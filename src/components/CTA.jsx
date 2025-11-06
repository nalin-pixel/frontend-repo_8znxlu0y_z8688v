import React from 'react';
import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="relative w-full overflow-hidden bg-black py-24 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold md:text-5xl"
        >
          Feel the future of motion
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mx-auto mt-4 max-w-2xl text-white/70"
        >
          Book a private track session and experience hydrogen speed, serenity, and sustainability in one breathtaking drive.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a href="#" className="rounded-full bg-white px-6 py-3 font-semibold text-black shadow-lg shadow-red-500/20 transition hover:scale-[1.02] hover:bg-red-100">
            Book Track Session
          </a>
          <a href="#" className="rounded-full border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/10">
            Find a Hydrogen Station
          </a>
        </motion.div>
      </div>
    </section>
  );
}
