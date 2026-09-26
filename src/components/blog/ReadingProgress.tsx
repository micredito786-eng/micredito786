'use client';

import { useEffect, useState } from 'react';

/** Barra de progreso de lectura, fija en la parte superior */
export function ReadingProgress({ targetId }: { targetId: string }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const target = document.getElementById(targetId);
    if (!target) return;

    const update = () => {
      const { top, height } = target.getBoundingClientRect();
      const total = height - window.innerHeight;
      setProgress(total <= 0 ? 1 : Math.min(1, Math.max(0, -top / total)));
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [targetId]);

  return (
    <div aria-hidden="true" className="fixed inset-x-0 top-0 z-[60] h-1 bg-transparent">
      <div className="h-full origin-left bg-secondary" style={{ transform: `scaleX(${progress})` }} />
    </div>
  );
}
