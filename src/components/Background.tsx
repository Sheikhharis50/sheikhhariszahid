import { useEffect, useRef, useState } from "react";
// @ts-ignore — vanta has no official TS types
import WAVES from "vanta/dist/vanta.waves.min";
import * as THREE from "three";

export default function Background() {
  const ref = useRef<HTMLDivElement>(null);
  const [effect, setEffect] = useState<{ destroy: () => void } | null>(null);

  useEffect(() => {
    if (!effect && ref.current) {
      setEffect(
        WAVES({
          el: ref.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          color: 0x70909
        }),
      );
    }
    return () => {
      if (effect) effect.destroy();
    };
  }, [effect]);

  return <div ref={ref} className="fixed inset-0 w-full h-full z-[1]" />;
}
