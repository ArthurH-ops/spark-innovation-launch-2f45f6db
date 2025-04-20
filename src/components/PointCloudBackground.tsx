
import React, { useEffect, useRef } from 'react';

const PointCloudBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Single Helix parameters
    const points: { angle: number; height: number }[] = [];
    const numberOfPoints = 200;
    const helixRadius = Math.min(canvas.width, canvas.height) * 0.3;
    const helixHeight = canvas.height * 1.5;
    const rotationSpeed = 0.001;
    
    // Initialize points in a single helix formation
    for (let i = 0; i < numberOfPoints; i++) {
      points.push({
        angle: (i / numberOfPoints) * Math.PI * 4,
        height: (i / numberOfPoints) * helixHeight - helixHeight / 2
      });
    }
    
    let rotationAngle = 0;
    
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Dark blue gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, '#151d2c');
      gradient.addColorStop(1, '#203354');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      rotationAngle += rotationSpeed;
      
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      // Draw the single helix
      for (let i = 0; i < points.length; i++) {
        const point = points[i];
        const x = centerX + Math.cos(point.angle + rotationAngle) * helixRadius;
        const y = centerY + point.height;
        const z = Math.sin(point.angle + rotationAngle) * helixRadius;
        
        const scale = (1000 + z) / 1000;
        const size = 2 * scale;
        const opacity = Math.min(scale, 0.8);
        
        ctx.beginPath();
        ctx.arc(x, y % canvas.height, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.fill();
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
    />
  );
};

export default PointCloudBackground;
