
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
    
    // Helix parameters
    const points: { angle: number; height: number; radius: number }[] = [];
    const numberOfPoints = 300;
    const helixRadius = Math.min(canvas.width, canvas.height) * 0.3;
    const helixHeight = canvas.height * 1.5;
    const rotationSpeed = 0.001;
    
    // Initialize points in a helix formation
    for (let i = 0; i < numberOfPoints; i++) {
      points.push({
        angle: (i / numberOfPoints) * Math.PI * 8,
        height: (i / numberOfPoints) * helixHeight - helixHeight / 2,
        radius: helixRadius
      });
    }
    
    let rotationAngle = 0;
    
    // Animation function
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, '#000000');
      gradient.addColorStop(1, '#222222');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Update rotation angle
      rotationAngle += rotationSpeed;
      
      // Calculate center position
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      // Draw points
      points.forEach((point) => {
        // Calculate 3D position
        const x = centerX + Math.cos(point.angle + rotationAngle) * point.radius;
        const y = centerY + point.height;
        const z = Math.sin(point.angle + rotationAngle) * point.radius;
        
        // Scale based on z position for perspective
        const scale = (1000 + z) / 1000;
        const size = 2 * scale;
        const opacity = Math.min(scale, 0.8);
        
        // Draw point
        ctx.beginPath();
        ctx.arc(x, y % canvas.height, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.fill();
        
        // Connect points
        points.forEach((otherPoint) => {
          const otherX = centerX + Math.cos(otherPoint.angle + rotationAngle) * otherPoint.radius;
          const otherY = centerY + otherPoint.height;
          const distance = Math.sqrt(
            Math.pow(x - otherX, 2) + 
            Math.pow((y % canvas.height) - (otherY % canvas.height), 2)
          );
          
          if (distance < 50) {
            ctx.beginPath();
            ctx.moveTo(x, y % canvas.height);
            ctx.lineTo(otherX, otherY % canvas.height);
            ctx.strokeStyle = `rgba(255, 255, 255, ${(1 - distance / 50) * 0.2})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });
      
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
