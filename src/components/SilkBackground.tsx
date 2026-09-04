import { useEffect, useRef } from 'react';

export const SilkBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let time = 0;
    const speed = 0.004;
    const scale = 2;
    const noiseIntensity = 0.8;
    let animId: number;

    const resizeCanvas = () => {
      const pixelRatio = 0.3;
      canvas.width = Math.max(1, Math.floor(window.innerWidth * pixelRatio));
      canvas.height = Math.max(1, Math.floor(window.innerHeight * pixelRatio));
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const noise = (x: number, y: number) => {
      const G = 2.71828;
      return (G * Math.sin(G * x) * G * Math.sin(G * y) * (1 + x)) % 1;
    };

    const animate = () => {
      const { width, height } = canvas;
      if (width === 0 || height === 0) return;
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, '#0a0a0a');
      gradient.addColorStop(0.5, '#14141c');
      gradient.addColorStop(1, '#0a0a0a');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
      const imageData = ctx.getImageData(0, 0, width, height);
      const data = imageData.data;

      for (let x = 0; x < width; x += 1) {
        for (let y = 0; y < height; y += 1) {
          const tex_x = (x / width) * scale;
          const tex_y = (y / height) * scale + 0.03 * Math.sin(8.0 * tex_x - speed * time);
          const pattern =
            0.6 +
            0.4 *
              Math.sin(
                5.0 * (tex_x + tex_y + Math.cos(3.0 * tex_x + 5.0 * tex_y) + 0.02 * speed * time) +
                  Math.sin(20.0 * (tex_x + tex_y - 0.1 * speed * time))
              );
          const intensity = Math.max(0, pattern - (noise(x, y) / 15.0) * noiseIntensity);
          const r = Math.floor(103 * intensity);
          const g = Math.floor(98 * intensity);
          const b = Math.floor(122 * intensity);
          const index = (y * width + x) * 4;
          if (index < data.length) {
            data[index] = Math.max(data[index], r);
            data[index + 1] = Math.max(data[index + 1], g);
            data[index + 2] = Math.max(data[index + 2], b);
            data[index + 3] = 255;
          }
        }
      }
      ctx.putImageData(imageData, 0, 0);
      time += 1;
      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-[#0a0a0a]">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full object-cover opacity-80" />
      <div
        className="absolute inset-0 z-10"
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, rgba(3, 3, 3, 0.5) 100%)',
        }}
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#030303]/30 via-transparent to-[#030303]/80" />
    </div>
  );
};
