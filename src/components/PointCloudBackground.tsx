
import React, { useEffect, useRef } from 'react';

const PointCloudBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Point parameters
    const points: { x: number; y: number; z: number; initialAngle: number; radius: number; height: number; speed: number }[] = [];
    const pointCount = Math.min(window.innerWidth / 3, 300); // Responsive point count
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    
    // Create torus/donut shape
    const torusRadius = Math.min(canvas.width, canvas.height) * 0.3;
    const tubeRadius = torusRadius * 0.2;
    
    // Initialize points in a torus/donut shape
    for (let i = 0; i < pointCount; i++) {
      const theta = Math.random() * Math.PI * 2; // Around the main circle
      const phi = Math.random() * Math.PI * 2; // Around the tube
      
      // Calculate position on the torus
      const x = (torusRadius + tubeRadius * Math.cos(phi)) * Math.cos(theta);
      const y = (torusRadius + tubeRadius * Math.cos(phi)) * Math.sin(theta);
      const z = tubeRadius * Math.sin(phi);
      
      points.push({
        x: centerX + x,
        y: centerY + y,
        z: z,
        initialAngle: theta,
        radius: Math.random() * 1.5 + 0.5, // Smaller points
        height: Math.random() * 0.5 + 0.5,
        speed: (Math.random() * 0.0005 + 0.0005) * (Math.random() > 0.5 ? 1 : -1) // Random speed direction
      });
    }
    
    // Animation time tracking
    let time = 0;
    
    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, '#000000');
      gradient.addColorStop(1, '#222222');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      time += 0.01;
      
      // Update and draw points
      for (const point of points) {
        // Rotate point around the center - creating the spinning effect
        const angle = point.initialAngle + time * point.speed;
        
        // Update position based on torus equations with time-based rotation
        const x = (torusRadius + tubeRadius * Math.cos(angle * 5)) * Math.cos(angle);
        const y = (torusRadius + tubeRadius * Math.cos(angle * 5)) * Math.sin(angle);
        const z = tubeRadius * Math.sin(angle * 5) * point.height;
        
        // Convert to screen space
        point.x = centerX + x;
        point.y = centerY + y;
        point.z = z;
        
        // Calculate size and opacity based on z position for perspective
        const scale = (500 - point.z) / 500;
        const size = point.radius * scale;
        const opacity = Math.min(scale, 0.8);
        
        // Draw point
        ctx.beginPath();
        ctx.arc(point.x, point.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.fill();
        
        // Connect nearby points
        for (const otherPoint of points) {
          if (point === otherPoint) continue;
          
          const dx = point.x - otherPoint.x;
          const dy = point.y - otherPoint.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Connect points within certain distance
          if (distance < 50) {
            ctx.beginPath();
            ctx.moveTo(point.x, point.y);
            ctx.lineTo(otherPoint.x, otherPoint.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${(1 - distance / 50) * 0.2 * opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
      style={{ background: 'linear-gradient(to bottom, #000000, #222222)' }}
    />
  );
};

export default PointCloudBackground;
