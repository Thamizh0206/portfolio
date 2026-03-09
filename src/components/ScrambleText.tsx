import { useEffect, useRef, useState } from 'react';

interface ScrambleTextProps {
  text: string;
  className?: string;
  delay?: number;
  as?: 'span' | 'p' | 'h1' | 'h2' | 'h3';
}

const chars = '!<>-_\\/[]{}—=+*^?#________';

export function ScrambleText({
  text,
  className = '',
  delay = 0,
  as: Component = 'span'
}: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [hasAnimated, setHasAnimated] = useState(false);
  const frameRef = useRef<number>(0);
  const queueRef = useRef<{ from: string; to: string; start: number; end: number; char?: string }[]>([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (hasAnimated) return;
      setHasAnimated(true);

      const length = text.length;
      queueRef.current = [];

      for (let i = 0; i < length; i++) {
        queueRef.current.push({
          from: text[i],
          to: text[i],
          start: Math.floor(Math.random() * 20),
          end: Math.floor(Math.random() * 20) + 20,
        });
      }

      let frame = 0;
      const update = () => {
        let output = '';
        let complete = 0;

        for (let i = 0; i < length; i++) {
          const { from, to, start, end } = queueRef.current[i];
          let char = queueRef.current[i].char;

          if (frame >= end) {
            complete++;
            output += to;
          } else if (frame >= start) {
            if (!char || Math.random() < 0.28) {
              char = chars[Math.floor(Math.random() * chars.length)];
              queueRef.current[i].char = char;
            }
            output += char;
          } else {
            output += from;
          }
        }

        setDisplayText(output);

        if (complete < length) {
          frameRef.current = requestAnimationFrame(update);
          frame++;
        }
      };

      update();
    }, delay);

    return () => {
      clearTimeout(timeout);
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [text, delay]);

  return (
    <Component className={className}>
      {displayText}
    </Component>
  );
}
