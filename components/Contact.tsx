'use client';

import { motion } from 'framer-motion';
import { HiTerminal } from 'react-icons/hi';
import { FiMail, FiMapPin, FiSend, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section id="contact" className="py-32 relative z-10 overflow-hidden">
      
      {/* 🌟 Background Subtle Glow */}
      <div className="absolute top-[30%] left-[-10%] w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* 🌟 FIX: Section Header - Now Exactly Matches All Other Sections Style */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-10"
        >
          <div>
           
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter">
               <span className="text-gradient">Let&apos;s Connect</span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm md:text-base max-w-sm font-medium leading-relaxed border-l-2 border-primary/30 pl-5 py-2">
            Whether you have a complex SaaS idea, need a scalable backend, or just want to say hi—my inbox is always open.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          {/* 🌟 LEFT: Text & Info */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col gap-8"
          >
            {/* Contact Details */}
            <motion.div variants={itemVariants} className="flex flex-col gap-6">
              <div className="flex items-center gap-4 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 group-hover:bg-primary/10 group-hover:text-primary group-hover:border-primary/30 transition-all duration-300">
                  <FiMail size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-slate-500 mb-1">Email Address</p>
                  <p className="text-white font-bold text-base md:text-lg">rafyhossain56.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group mt-2">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 group-hover:bg-primary/10 group-hover:text-primary group-hover:border-primary/30 transition-all duration-300">
                  <FiMapPin size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-slate-500 mb-1">Current Location</p>
                  <p className="text-white font-bold text-base md:text-lg">Jonail, Natore, Bangladesh</p>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex items-center gap-4 mt-8 pt-8 border-t border-white/10 w-max">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-widest mr-4">Socials_</span>
              {[
                { Icon: FiGithub, href: '#' },
                { Icon: FiLinkedin, href: '#' },
                { Icon: FiTwitter, href: '#' }
              ].map((item, i) => (
                <a 
                  key={i} 
                  href={item.href} 
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-white/10 hover:text-white hover:-translate-y-1 transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_15px_rgba(var(--color-primary),0.2)]"
                >
                  <item.Icon size={18} />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* 🌟 RIGHT: Premium Glassmorphic Form Container */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative group p-[1px] rounded-[2.5rem] bg-white/5 hover:bg-white/10 transition-colors duration-500"
          >
            <div className="relative h-full bg-[#020617]/90 backdrop-blur-2xl rounded-[2.4rem] p-8 md:p-10 z-10 border border-white/5 group-hover:border-white/10 transition-colors">
              
              {/* Internal Subtle Grid Pattern */}
              <div 
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`, backgroundSize: '2rem 2rem' }}
              />

              <form className="relative z-20 flex flex-col gap-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-[10px] font-mono text-slate-500 uppercase tracking-widest ml-1">Your Name</label>
                    <input 
                      type="text" 
                      id="name"
                      placeholder="Name" 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all duration-300"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-[10px] font-mono text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
                    <input 
                      type="email" 
                      id="email"
                      placeholder="mail@example.com" 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="text-[10px] font-mono text-slate-500 uppercase tracking-widest ml-1">Subject</label>
                  <input 
                    type="text" 
                    id="subject"
                    placeholder="Project Inquiry" 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all duration-300"
                  />
                </div>

                {/* Message Input */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-[10px] font-mono text-slate-500 uppercase tracking-widest ml-1">Your Message</label>
                  <textarea 
                    id="message"
                    rows={5}
                    placeholder="Tell me about your project..." 
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all duration-300 resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button 
                  type="button" 
                  className="mt-2 group relative w-full flex items-center justify-center gap-3 bg-white text-black font-black uppercase tracking-widest text-xs px-8 py-5 rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Send Message <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gray-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                </button>

              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}