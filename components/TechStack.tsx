'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { FaNodeJs, FaJava, FaReact, FaGithub, FaFigma, FaGitAlt } from 'react-icons/fa';
import { HiTerminal } from 'react-icons/hi';
import { 
  SiNextdotjs, 
  SiTailwindcss, 
  SiFramer, 
  SiFirebase, 
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiDaisyui,
  SiKalilinux,
  SiVercel
} from 'react-icons/si';

// Infinite Marquee Icons
const row1Icons = [FaReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiFramer, SiDaisyui, FaFigma];
const row2Icons = [FaNodeJs, SiExpress, SiMongodb, SiFirebase, FaJava, FaGithub, SiKalilinux];

// 3D Spheres Data
const bowlsData = [
  {
    title: 'Frontend Ecosystem',
    description: 'Building interactive, high-performance UIs and smooth animations.',
    skills: [
      { name: 'React', icon: FaReact, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#000000', text: '#ffffff' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'Tailwind', icon: SiTailwindcss, color: '#38B2AC' },
      { name: 'Framer', icon: SiFramer, color: '#0055FF' },
    ],
    themeColor: 'var(--color-primary)',
  },
  {
    title: 'Backend & Database',
    description: 'Designing scalable APIs, server logic, and secure databases.',
    skills: [
      { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
      { name: 'Express', icon: SiExpress, color: '#888888', text: '#111111' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'Firebase', icon: SiFirebase, color: '#FFCA28', text: '#111111' },
      { name: 'Java', icon: FaJava, color: '#007396' },
    ],
    themeColor: 'var(--color-secondary)',
  },
  {
    title: 'Tools & Security',
    description: 'Version control, system security, and object-oriented programming.',
    skills: [
      { name: 'Git', icon: FaGitAlt, color: '#F05032' },
      { name: 'Kali Linux', icon: SiKalilinux, color: '#666666', text: '#ffffff' },
      { name: 'Vercel', icon: SiVercel, color: '#000000', text: '#ffffff' },
      { name: 'Figma', icon: FaFigma, color: '#F24E1E' },
      { name: 'DaisyUI', icon: SiDaisyui, color: '#5A0EF8' },
    ],
    themeColor: 'var(--color-accent)',
  },
];

export default function TechStack() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Advanced Scroll Animation (Parallax Logic)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Staggered vertical translation for each bowl
  const yBowl1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const yBowl2 = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const yBowl3 = useTransform(scrollYProgress, [0, 1], [200, -200]);
  
  const bowlTransforms = [yBowl1, yBowl2, yBowl3];

  // Spotlight Effect (Mouse Tracking)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const card = containerRef.current;
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const sphereContainerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const sphereVariants = {
    hidden: { opacity: 0, scale: 0.5, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: [0.34, 1.56, 0.64, 1] } },
    float: {
      y: [0, -8, 0, 8, 0], // Increased float amplitude slightly
      rotate: [0, 5, -5, 0],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <section id="tech" className="py-32 relative z-10 overflow-hidden" ref={containerRef}>
      
      {/* 🌟 Background Animated Gradient Orbs */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full mix-blend-screen filter blur-[150px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full mix-blend-screen filter blur-[150px] animate-pulse pointer-events-none animation-delay-2000" />

      {/* Spotlight for the entire container */}
      <div 
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-0"
        style={{ background: `radial-gradient(1000px circle at var(--mouse-x) var(--mouse-y), rgba(var(--color-primary), 0.05), transparent 45%)` }}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* 🌟 Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-10"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-6">
              <HiTerminal className="text-primary animate-pulse" /> <span>./load_superpowers.sh</span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter">
               <span className="text-gradient"> Tech Stack</span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm md:text-base max-w-sm font-medium leading-relaxed border-l-2 border-primary/30 pl-5 py-2">
            A comprehensive overview of my technical arsenal, from interactive frontend frameworks to robust backend architectures.
          </p>
        </motion.div>

        {/* 🌟 1. Infinite Floating Marquee with Edge Fade Mask */}
        <div 
          className="flex flex-col gap-6 mb-32 relative overflow-hidden"
          style={{ maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' }}
        >
          {/* Row 1 - Moving Left */}
          <div className="flex w-full whitespace-nowrap">
            <motion.div 
              className="flex gap-10 md:gap-16 items-center px-4"
              animate={{ x: [0, -1000] }}
              transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
            >
              {[...row1Icons, ...row1Icons, ...row1Icons].map((Icon, i) => (
                <Icon key={i} className="text-5xl md:text-6xl text-white/10 hover:text-primary transition-colors duration-300 flex-shrink-0" />
              ))}
            </motion.div>
          </div>
          
          {/* Row 2 - Moving Right */}
          <div className="flex w-full whitespace-nowrap">
            <motion.div 
              className="flex gap-10 md:gap-16 items-center px-4"
              animate={{ x: [-1000, 0] }}
              transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
            >
              {[...row2Icons, ...row2Icons, ...row2Icons].map((Icon, i) => (
                <Icon key={i} className="text-5xl md:text-6xl text-white/10 hover:text-secondary transition-colors duration-300 flex-shrink-0" />
              ))}
            </motion.div>
          </div>
        </div>

        {/* 🌟 2. 3D Bowls Grid with Scroll Parallax */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 pt-10 lg:pt-0">
          {bowlsData.map((bowl, index) => (
            <motion.div
              key={index}
              style={{ y: bowlTransforms[index] }} // Applied Parallax transform here
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="w-full min-h-[400px] md:h-[480px] rounded-[2.5rem] lg:rounded-[3.5rem] glass-panel bg-[#020617]/40 p-6 md:p-10 relative flex flex-col items-center justify-start text-center overflow-hidden hover:shadow-[0_30px_60px_rgba(0,0,0,0.5)] transition-all duration-500 group border-white/5 hover:border-white/10"
              style={{ ['--tw-shadow-color' as string]: `rgba(${bowl.themeColor}, 0.2)` }}
            >
              {/* Internal Subtle Grid Pattern */}
              <div 
                className="absolute inset-0 opacity-[0.02] pointer-events-none"
                style={{ backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`, backgroundSize: '2rem 2rem' }}
              />

              {/* Premium 3D Inner Glow Effects */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-0 w-full h-2/3 bg-gradient-to-t from-[#020617]/90 to-transparent"></div>

              <div className="relative z-10 flex flex-col items-center w-full h-full">
                
                {/* 🌟 Bowl Title & Desc */}
                <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all">
                  {bowl.title}
                </h3>
                <p className="text-slate-400 text-xs md:text-sm mb-6 md:mb-auto max-w-[95%] leading-relaxed">
                  {bowl.description}
                </p>

                {/* Spheres Grid (Mobile Responsive) */}
                <motion.div 
                  variants={sphereContainerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  className="grid grid-cols-3 sm:flex sm:flex-wrap justify-center gap-4 mt-6 md:mt-auto w-full px-2"
                >
                  {bowl.skills.map((skill, sIndex) => (
                    <motion.div
                      key={sIndex}
                      variants={sphereVariants}
                      whileHover={{ scale: 1.15, rotate: 10 }}
                      whileTap={{ scale: 0.95 }}
                      animate="float"
                      style={{
                        background: `radial-gradient(130% 130% at 30% 20%, #ffffff 0%, #e5e7eb 25%, ${skill.color} 100%)`,
                        color: skill.text || '#111111',
                        boxShadow: `0 10px 25px -5px rgba(0,0,0,0.5), inset 0 4px 10px rgba(255,255,255,0.5)`
                      }}
                      className="w-16 h-16 md:w-20 md:h-20 rounded-full flex flex-col items-center justify-center p-2 relative group/sphere overflow-hidden hover:z-20 cursor-pointer mx-auto border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] transition-shadow duration-300"
                    >
                      {/* Realistic Gloss Overlay */}
                      <div className="absolute top-1 left-2 w-4 h-3 md:w-6 md:h-4 rounded-full bg-white/80 blur-[1px] pointer-events-none mix-blend-overlay"></div>

                      <skill.icon size={22} className="mb-0.5 md:mb-1 relative z-10 drop-shadow-md md:text-[28px]" />
                      <span className="text-[8px] md:text-[10px] font-black leading-tight relative z-10 text-center uppercase tracking-tighter">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}