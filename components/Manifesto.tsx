import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Manifesto: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "end 0.9"]
  });

  const words = "STRONG WOMEN. EMPOWERED LIVES. YOGA. ZUMBA. WELLNESS. A SUPPORTIVE SPACE FOR YOU. OWNED BY MONIKA NANDEDKAR. YOUR HEALTH IS YOUR POWER. JOIN THE SISTERHOOD.".split(" ");

  return (
    <section 
      id="manifesto" 
      ref={containerRef} 
      className="relative min-h-[80vh] bg-sanctum-black flex items-center justify-center px-6 py-24"
    >
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-[1.5vw] relative z-10">
        {words.map((word, i) => {
          // Stagger the opacity animation based on index
          const start = i / words.length;
          const end = start + (1 / words.length);
          const opacity = useTransform(scrollYProgress, [start, end], [0.1, 1]);
          const color = word.includes("WOMEN") || word.includes("POWER") || word.includes("MONIKA") ? "#F43F5E" : "#FFFFFF"; 
          
          return (
            <motion.span
              key={i}
              style={{ opacity, color }}
              className="text-[5vw] md:text-[4vw] font-display font-bold uppercase leading-[0.9] tracking-tighter transition-colors duration-100"
            >
              {word}
            </motion.span>
          );
        })}
      </div>
    </section>
  );
};

export default Manifesto;