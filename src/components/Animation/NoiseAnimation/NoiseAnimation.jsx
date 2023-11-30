import React, { useEffect, useRef } from 'react';

const NoiseAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    let frame = 0;
    const patternSize = 600;
    const patternScaleX = 1;
    const patternScaleY = 1;
    const patternRefreshInterval = 20;
    const patternAlpha = 10;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.scale(patternScaleX, patternScaleY);

    const patternCanvas = document.createElement('canvas');
    patternCanvas.width = patternSize;
    patternCanvas.height = patternSize;
    const patternCtx = patternCanvas.getContext('2d');
    const patternData = patternCtx.createImageData(patternSize, patternSize);
    const patternPixelDataLength = patternSize * patternSize * 4;

    const resize = () => {
      canvas.width = window.innerWidth * window.devicePixelRatio;
      canvas.height = window.innerHeight * window.devicePixelRatio;
    };

    const update = () => {
      for (let i = 0; i < patternPixelDataLength; i += 4) {
        const value = Math.random() * 155 + 100;
        patternData.data[i] = value;
        patternData.data[i + 1] = value;
        patternData.data[i + 2] = value;
        patternData.data[i + 3] = patternAlpha;
      }
      patternCtx.putImageData(patternData, 0, 0);
    };

    const draw = () => {
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = ctx.createPattern(patternCanvas, 'repeat');
      ctx.fillRect(0, 0, width, height);
    };

    const loop = () => {
      const shouldDraw = ++frame % patternRefreshInterval === 0;
      if (shouldDraw) {
        update();
        draw();
      }
      window.requestAnimationFrame(loop);
    };

    window.addEventListener('resize', resize);
    resize();
    loop();

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="grain" />;
}

export default NoiseAnimation;
