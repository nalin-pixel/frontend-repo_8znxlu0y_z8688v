import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/m8wpIQzXWhEh9Yek/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Atmospheric gradients that won't block Spline interaction */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-80 w-[36rem] -translate-x-1/2 rounded-full bg-fuchsia-600/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-2xl" />
        <div className="absolute bottom-10 left-0 h-72 w-72 rounded-full bg-red-500/10 blur-2xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-widest text-white/80 backdrop-blur"
          >
            Hydrogen Performance • Zero Emissions
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-4xl font-extrabold leading-tight md:text-6xl lg:text-7xl"
          >
            Speed of a Supercar.
            <span className="bg-gradient-to-r from-red-400 via-rose-300 to-white bg-clip-text text-transparent"> Clean as the Wind.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mx-auto max-w-2xl text-base text-white/80 md:text-lg"
          >
            Meet the next generation hydrogen sports car — blistering acceleration, track-grade handling, and silent luxury. Zero compromise. Zero emissions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-6 flex flex-col items-center gap-3 sm:flex-row"
          >
            <a
              href="#performance"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-semibold text-black shadow-lg shadow-red-500/20 transition hover:scale-[1.02] hover:bg-red-100"
            >
              Explore Performance
            </a>
            <a
              href="#learn"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              Why Hydrogen?
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* subtle bottom fade for readability */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
