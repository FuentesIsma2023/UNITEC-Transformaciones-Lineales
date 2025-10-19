import { useEffect, useRef } from 'react';

interface CartesianPlaneProps {
  children?: React.ReactNode;
}

const CartesianPlane = ({ children }: CartesianPlaneProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * window.devicePixelRatio;
    canvas.height = rect.height * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    const width = rect.width;
    const height = rect.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const gridSize = 40;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Draw grid
    ctx.strokeStyle = 'rgba(59, 130, 246, 0.1)';
    ctx.lineWidth = 1;

    // Vertical lines
    for (let x = centerX % gridSize; x < width; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }

    // Horizontal lines
    for (let y = centerY % gridSize; y < height; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // Draw axes
    ctx.strokeStyle = 'rgba(59, 130, 246, 0.5)';
    ctx.lineWidth = 2;

    // X axis
    ctx.beginPath();
    ctx.moveTo(0, centerY);
    ctx.lineTo(width, centerY);
    ctx.stroke();

    // Y axis
    ctx.beginPath();
    ctx.moveTo(centerX, 0);
    ctx.lineTo(centerX, height);
    ctx.stroke();

    // Draw axis labels
    ctx.fillStyle = 'rgba(59, 130, 246, 0.8)';
    ctx.font = 'bold 16px sans-serif';
    ctx.fillText('X', width - 30, centerY - 10);
    ctx.fillText('Y', centerX + 10, 20);

    // Draw axis arrows
    ctx.strokeStyle = 'rgba(59, 130, 246, 0.8)';
    ctx.lineWidth = 2;
    
    // X arrow
    ctx.beginPath();
    ctx.moveTo(width - 15, centerY - 5);
    ctx.lineTo(width - 5, centerY);
    ctx.lineTo(width - 15, centerY + 5);
    ctx.stroke();

    // Y arrow
    ctx.beginPath();
    ctx.moveTo(centerX - 5, 15);
    ctx.lineTo(centerX, 5);
    ctx.lineTo(centerX + 5, 15);
    ctx.stroke();

    // Draw scale markers
    ctx.fillStyle = 'rgba(139, 92, 246, 0.6)';
    ctx.font = '12px sans-serif';
    
    for (let i = -5; i <= 5; i++) {
      if (i === 0) continue;
      
      const xPos = centerX + i * gridSize;
      const yPos = centerY + i * gridSize;
      
      // X axis markers
      if (xPos >= 0 && xPos <= width) {
        ctx.fillText(i.toString(), xPos - 5, centerY + 20);
      }
      
      // Y axis markers
      if (yPos >= 0 && yPos <= height) {
        ctx.fillText((-i).toString(), centerX + 10, yPos + 5);
      }
    }

    // Origin
    ctx.fillStyle = 'rgba(6, 182, 212, 0.8)';
    ctx.beginPath();
    ctx.arc(centerX, centerY, 4, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillText('(0,0)', centerX + 10, centerY - 10);

  }, []);

  return (
    <div className="relative w-full h-[500px] bg-card/40 backdrop-blur-sm rounded-lg border border-primary/30 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {children}
      </div>
    </div>
  );
};

export default CartesianPlane;