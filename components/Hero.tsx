'use client';

import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { FaChevronRight } from 'react-icons/fa';
import { HiOutlineCode } from 'react-icons/hi';
import Image from 'next/image';

export default function Hero() {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
    },
  };

  return (
    <section
      id="home"
      className="min-h-[90vh] lg:min-h-[100dvh] 
                 flex items-center 
                 pt-24 lg:pt-32 
                 pb-16 
                 relative z-10"
    >
      <div className="w-full max-w-7xl mx-auto px-6 
                      grid grid-cols-1 lg:grid-cols-12 
                      gap-10 lg:gap-16 
                      items-center">

        {/* ================= LEFT CONTENT ================= */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start gap-6 
                     lg:col-span-7 
                     order-2 lg:order-1"
        >

          {/* Status Badge */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3 px-4 py-2 
                       rounded-full border border-white/10 
                       bg-white/5 backdrop-blur-md"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-slate-300">
              Available for Work
            </span>
          </motion.div>

          {/* Headline */}
          <div className="space-y-4">
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] 
                         font-black tracking-tight text-white leading-[1.1]"
            >
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Rafy
              </span>
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className="text-sm sm:text-sm md:text-2xl 
                         font-semibold text-slate-400 leading-snug"
            >
              I build{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent break-words">
                <Typewriter
                  words={[
                    "Modern Web Applications.",
                    "Scalable Backends.",
                    "Interactive User Interfaces.",
                    "Full Stack Solutions."
                  ]}
                  loop
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </span>
            </motion.h2>
          </div>

          {/* Bio */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base md:text-lg 
                       text-slate-400 max-w-xl leading-relaxed"
          >
            I design and develop premium, high-performance web applications that combine clean architecture with modern UI innovation.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 mt-4"
          >
            {/* Primary */}
            <button
              onClick={() =>
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="px-6 py-3 rounded-2xl 
                         bg-gradient-to-r from-primary to-secondary 
                         text-white font-semibold text-sm 
                         flex items-center gap-2 
                         hover:scale-105 transition-all duration-300"
            >
              View Projects
              <FaChevronRight className="group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Secondary */}
            <button
              className="px-6 py-3 rounded-2xl 
                         border border-white/10 
                         bg-white/5 
                         text-slate-300 text-sm 
                         flex items-center gap-2 
                         hover:border-primary hover:text-white 
                         transition-all duration-300"
            >
              <HiOutlineCode size={18} />
              Resume
            </button>
          </motion.div>
        </motion.div>

        {/* ================= RIGHT IMAGE ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="lg:col-span-5 
                     flex justify-center 
                     order-1 lg:order-2"
        >
          {/* Glow */}
          <div className="absolute w-[200px] h-[200px] bg-primary/30 rounded-full blur-[80px]" />
          <div className="absolute w-[180px] h-[180px] bg-secondary/30 rounded-full blur-[80px] translate-x-6 translate-y-6" />

          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 6 }}
            className="relative 
                       w-[220px] h-[260px] 
                       sm:w-[260px] sm:h-[300px] 
                       md:w-[380px] md:h-[450px] 
                       rounded-[2.5rem] 
                       backdrop-blur-2xl 
                       bg-white/10 
                       border border-white/10 
                       p-3"
          >
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden">
              <Image
                src="/pfle.jpeg"
                alt="Rafy"
                fill
                priority
                sizes="(max-width:768px) 100vw, 50vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}