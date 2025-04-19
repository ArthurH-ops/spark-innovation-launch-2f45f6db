
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
    const points: { x: number; y: number; z: number; vx: number; vy: number; vz: number }[] = [];
    const pointCount = Math.min(window.innerWidth / 3, 300); // Responsive point count
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    
    // Initialize points in organic shape
    for (let i = 0; i < pointCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * 200 + 50;
      const height = Math.random() * 200 - 100;
      
      points.push({
        x: centerX + Math.cos(angle) * radius,
        y: centerY + Math.sin(angle) * radius,
        z: height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        vz: (Math.random() - 0.5) * 0.5
      });
    }
    
    // Animation function
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, '#000000');
      gradient.addColorStop(1, '#222222');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw points
      for (const point of points) {
        // Update position
        point.x += point.vx;
        point.y += point.vy;
        point.z += point.vz;
        
        // Boundary check and bounce
        if (Math.abs(point.x - centerX) > 250) point.vx *= -1;
        if (Math.abs(point.y - centerY) > 250) point.vy *= -1;
        if (Math.abs(point.z) > 100) point.vz *= -1;
        
        // Calculate size and opacity based on z position
        const scale = (500 + point.z) / 500;
        const size = 1.5 * scale;
        const opacity = Math.min(scale, 0.8);
        
        // Draw point
        ctx.beginPath();
        ctx.arc(point.x, point.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.fill();
        
        // Connect nearby points
        for (const otherPoint of points) {
          const dx = point.x - otherPoint.x;
          const dy = point.y - otherPoint.y;
          const dz = point.z - otherPoint.z;
          const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
          
          if (distance < 50) {
            ctx.beginPath();
            ctx.moveTo(point.x, point.y);
            ctx.lineTo(otherPoint.x, otherPoint.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${(1 - distance / 50) * 0.2})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      
      requestAnimationFrame(animate);
    }
    
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

