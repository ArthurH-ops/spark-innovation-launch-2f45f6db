
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
    const points: { x: number; y: number; z: number; vx: number; vy: number; vz: number; radius: number }[] = [];
    const pointCount = Math.min(window.innerWidth / 3, 200); // Responsive point count
    const maxDepth = 5;
    
    // Initialize points
    for (let i = 0; i < pointCount; i++) {
      points.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * maxDepth,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        vz: (Math.random() - 0.5) * 0.1,
        radius: Math.random() * 2 + 1
      });
    }
    
    // Animation function
    const animate = () => {
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
        
        // Wrap around edges
        if (point.x < 0) point.x = canvas.width;
        if (point.x > canvas.width) point.x = 0;
        if (point.y < 0) point.y = canvas.height;
        if (point.y > canvas.height) point.y = 0;
        
        // Z-wrap
        if (point.z < 0) point.z = maxDepth;
        if (point.z > maxDepth) point.z = 0;
        
        // Calculate size based on depth (perspective)
        const scale = (maxDepth - point.z) / maxDepth;
        const size = point.radius * scale * 2;
        
        // Calculate color based on depth
        const colorIntensity = Math.floor(200 * scale);
        
        // Draw point
        ctx.beginPath();
        ctx.arc(point.x, point.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${colorIntensity}, ${colorIntensity}, ${colorIntensity}, ${scale})`;
        ctx.fill();
        
        // Connect nearby points
        for (const otherPoint of points) {
          if (point === otherPoint) continue;
          
          const dx = point.x - otherPoint.x;
          const dy = point.y - otherPoint.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Connect points within 100px
          if (distance < 100) {
            const opacity = (1 - distance / 100) * 0.2 * scale;
            ctx.beginPath();
            ctx.moveTo(point.x, point.y);
            ctx.lineTo(otherPoint.x, otherPoint.y);
            ctx.strokeStyle = `rgba(${colorIntensity}, ${colorIntensity}, ${colorIntensity}, ${opacity})`;
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
