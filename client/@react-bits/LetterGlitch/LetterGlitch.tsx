import { cn } from "@shadcn-ui/lib/utils";
import { useRef, useEffect } from "react";

export const LetterGlitch = ({
  glitchColors = ["#2b4539", "#61dca3", "#61b3dc"],
  glitchSpeed = 50,
  centerVignette = false,
  outerVignette = true,
  smooth = true,
  className
}: {
  glitchColors: string[];
  glitchSpeed: number;
  centerVignette: boolean;
  outerVignette: boolean;
  smooth: boolean;
  className?: string;
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const letters = useRef<
    {
      char: string;
      color: string;
      targetColor: string;
      colorProgress: number;
      shouldRender: boolean;
    }[]
  >([]);
  const grid = useRef({ columns: 0, rows: 0 });
  const context = useRef<CanvasRenderingContext2D | null>(null);
  const lastGlitchTime = useRef(Date.now());
  const renderState = useRef({ width: 0, height: 0, dpr: 1 });
  const positions = useRef<{ x: number; y: number }[]>([]);

  const fontSize = 16;
  const charWidth = 10;
  const charHeight = 20;

  const lettersAndSymbols = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "!",
    "@",
    "#",
    "$",
    "&",
    "*",
    "(",
    ")",
    "-",
    "_",
    "+",
    "=",
    "/",
    "[",
    "]",
    "{",
    "}",
    ";",
    ":",
    "<",
    ">",
    ",",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ];

  const getRandomChar = () => {
    return lettersAndSymbols[
      Math.floor(Math.random() * lettersAndSymbols.length)
    ];
  };

  const getRandomColor = () => {
    return glitchColors[Math.floor(Math.random() * glitchColors.length)];
  };

  const hexToRgb = (hex: string) => {
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, (_m, r, g, b) => {
      return r + r + g + g + b + b;
    });

    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
      : null;
  };

  const interpolateColor = (
    start: { r: number; g: number; b: number },
    end: { r: number; g: number; b: number },
    factor: number,
  ) => {
    const result = {
      r: Math.round(start.r + (end.r - start.r) * factor),
      g: Math.round(start.g + (end.g - start.g) * factor),
      b: Math.round(start.b + (end.b - start.b) * factor),
    };
    return `rgb(${result.r}, ${result.g}, ${result.b})`;
  };

  const calculateGrid = (width: number, height: number) => {
    const columns = Math.ceil(width / charWidth);
    const rows = Math.ceil(height / charHeight);
    return { columns, rows };
  };

  const initializeLetters = (columns: number, rows: number) => {
    grid.current = { columns, rows };
    const totalLetters = columns * rows;
    letters.current = Array.from({ length: totalLetters }, () => ({
      char: getRandomChar(),
      color: getRandomColor(),
      targetColor: getRandomColor(),
      colorProgress: 1,
      shouldRender: Math.random() < 0.3
    }));
    // Precompute cell positions
    positions.current = Array.from({ length: totalLetters }, (_v, i) => ({
      x: (i % columns) * charWidth,
      y: Math.floor(i / columns) * charHeight,
    }));
  };

  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;
    const maxDpr = 1.5; // clamp DPR for performance
    const dpr = Math.min(window.devicePixelRatio || 1, maxDpr);
    const rect = parent.getBoundingClientRect();

    canvas.width = Math.floor(rect.width * dpr);
    canvas.height = Math.floor(rect.height * dpr);

    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;

    if (context.current) {
      context.current.setTransform(dpr, 0, 0, dpr, 0, 0);
      context.current.imageSmoothingEnabled = false;
    }

    const { columns, rows } = calculateGrid(rect.width, rect.height);
    initializeLetters(columns, rows);
    renderState.current = { width: rect.width, height: rect.height, dpr };
    drawLetters();
  };

  const drawLetters = () => {
    if (!context.current || letters.current.length === 0) return;
    const ctx = context.current;
    const { width, height, dpr } = renderState.current;
    ctx.clearRect(0, 0, width, height);
    ctx.font = `${fontSize}px monospace`;
    ctx.textBaseline = "top";
    // glow settings once per frame (scale with DPR)
    ctx.shadowBlur = Math.max(4, Math.round(16 / dpr));
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;

    const len = letters.current.length;
    for (let index = 0; index < len; index++) {
      const letter = letters.current[index];
      if (!letter.shouldRender) continue;
      const pos = positions.current[index];
      ctx.shadowColor = letter.color;
      ctx.fillStyle = letter.color;
      ctx.fillText(letter.char, pos.x, pos.y);
    }
  };

  const updateLetters = () => {
    if (!letters.current || letters.current.length === 0) return false;
    let changed = false;
    const len = letters.current.length;
    const updateCount = Math.max(1, Math.floor(len * 0.03));
    for (let i = 0; i < updateCount; i++) {
      const index = Math.floor(Math.random() * len);
      const item = letters.current[index];
      if (!item) continue;
      item.char = getRandomChar();
      item.targetColor = getRandomColor();
      if (!smooth) {
        item.color = item.targetColor;
        item.colorProgress = 1;
      } else {
        item.colorProgress = 0;
      }
      item.shouldRender = Math.random() < 0.3;
      changed = true;
    }
    return changed;
  };

  const parseColorToRgb = (c: string) => {
    if (c.startsWith("rgb")) {
      const m = c.match(/rgba?\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)/i);
      if (m) return { r: +m[1], g: +m[2], b: +m[3] };
    }
    return hexToRgb(c);
  };

  const handleSmoothTransitions = () => {
    let needsRedraw = false;
    const len = letters.current.length;
    for (let i = 0; i < len; i++) {
      const letter = letters.current[i];
      if (letter.colorProgress < 1) {
        letter.colorProgress += 0.05;
        if (letter.colorProgress > 1) letter.colorProgress = 1;
        const startRgb = parseColorToRgb(letter.color) || { r: 0, g: 0, b: 0 };
        const endRgb = hexToRgb(letter.targetColor);
        if (endRgb) {
          letter.color = interpolateColor(startRgb, endRgb, letter.colorProgress);
          needsRedraw = true;
        }
      }
    }
    return needsRedraw;
  };

  const animate = () => {
    const now = Date.now();
    let needsDraw = false;
    if (now - lastGlitchTime.current >= glitchSpeed) {
      needsDraw = updateLetters() || needsDraw;
      lastGlitchTime.current = now;
    }
    if (smooth) {
      needsDraw = handleSmoothTransitions() || needsDraw;
    }
    if (needsDraw) {
      drawLetters();
    }
    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    context.current = canvas.getContext("2d");
    resizeCanvas();
    animate();

    let resizeTimeout: NodeJS.Timeout;

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        cancelAnimationFrame(animationRef.current as number);
        resizeCanvas();
        animate();
      }, 100);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationRef.current!);
      window.removeEventListener("resize", handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [glitchSpeed, smooth]);

  return (
    <div className={cn("relative w-full h-full bg-black overflow-hidden", className)}>
      <canvas ref={canvasRef} className="block w-full h-full" />
      {outerVignette && (
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-[radial-gradient(circle,_rgba(0,0,0,0)_60%,_rgba(0,0,0,1)_100%)]"></div>
      )}
      {centerVignette && (
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-[radial-gradient(circle,_rgba(0,0,0,0.8)_0%,_rgba(0,0,0,0)_60%)]"></div>
      )}
    </div>
  );
};
