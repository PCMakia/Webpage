import React, { useEffect, useRef, useState } from 'react';

const EXPERTISE_ITEMS = [
  {
    title: 'Software Development',
    description:
      'Experienced in both functional and OOP: Python, C++, Java, JavaScript. Focus on clean, readable code and efficient algorithms.',
  },
  {
    title: 'Machine Learning & AI',
    description:
      'Research and development in ML systems, neural networks, and AI agents. Experience with PyTorch, TensorFlow, and novel training techniques.',
  },
  {
    title: 'Game Development',
    description:
      'Developing interactive simulations and games using Unity, Pygame, and C++. Passionate about user-centered design and engaging gameplay.',
  },
] as const;

/** Time each card stays “lifted” before the wave moves to the next. */
const WAVE_STEP_MS = 1500;

export function Expertise() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);
  const waveDirectionRef = useRef(1);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduceMotion(mq.matches);
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    waveDirectionRef.current = 1;
    setActiveIndex(0);
    const n = EXPERTISE_ITEMS.length;
    const last = n - 1;
    const id = window.setInterval(() => {
      setActiveIndex((i) => {
        if (n <= 1) return 0;
        const d = waveDirectionRef.current;
        const next = i + d;
        if (next >= last) {
          waveDirectionRef.current = -1;
          return last;
        }
        if (next <= 0) {
          waveDirectionRef.current = 1;
          return 0;
        }
        return next;
      });
    }, WAVE_STEP_MS);
    return () => clearInterval(id);
  }, [reduceMotion]);

  return (
    <section id="expertise" className="py-24 px-8 max-w-[1200px] mx-auto">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center">
        My Expertise
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {EXPERTISE_ITEMS.map((item, index) => {
          const isActive = !reduceMotion && activeIndex === index;
          return (
            <div
              key={item.title}
              className={`rounded-xl border bg-[#111111] p-8 transition-all duration-300 ease-out ${
                isActive
                  ? 'z-10 -translate-y-1 border-[rgba(139,26,92,0.55)] shadow-[0_20px_42px_rgba(139,26,92,0.4),0_4px_20px_rgba(255,255,255,0.06)] ring-1 ring-[rgba(139,26,92,0.25)]'
                  : 'translate-y-0 border-[rgba(255,255,255,0.1)] shadow-none ring-0'
              }`}
            >
              <h3 className="text-2xl mb-4 font-semibold">{item.title}</h3>
              <p className="text-[#b0b0b0] leading-relaxed">{item.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
