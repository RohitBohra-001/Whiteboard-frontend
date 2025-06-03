import { useRef, useEffect } from 'react';
import rough from 'roughjs';

function Board() {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Set canvas dimensions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const roughCanvas = rough.canvas(canvas);
    const generator = roughCanvas.generator;

    // Draw rectangles
    let rect1 = generator.rectangle(10, 10, 100, 100);
    let rect2 = generator.rectangle(10, 120, 100, 100, {
      fill: "red",
      stroke: "blue",
    });

    roughCanvas.draw(rect1);
    roughCanvas.draw(rect2);
  }, []);

  return (
    <div className="relative w-full h-screen">
      <canvas 
        ref={canvasRef} 
        className="absolute top-0 left-0 w-full h-full"
      />
    </div>
  );
}

export default Board;