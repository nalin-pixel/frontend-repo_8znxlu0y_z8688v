import React from 'react';
import { motion } from 'framer-motion';

export default function TechShowcase() {
  const items = [
    {
      label: 'Hydrogen Fuel Cell',
      value: '120 kW stack with platinum-optimized membranes for peak efficiency',
      gif: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGk4b21jeXF5eGxramllNnA4c3RvN3Z4ZWR5a25yZzI1a2llc2k4aCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5eLDrEaRGHegx2FeF2/giphy.gif',
    },
    {
      label: 'Dual Motor AWD',
      value: 'Torque-vectoring control with sub-10ms response',
      gif: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdmp6YzFmZ3g2bGNoYjUybTA0bjE4Z2R6eG5tZ2tncGQ1dWJlbW9taiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0ExncehJzexFpRHq/giphy.gif',
    },
    {
      label: 'Luxury Cabin',
      value: 'Acoustic glass, adaptive ambient lighting, zero-vibration ride',
      gif: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbTMyZTR2ZXhuaGhzcTJnYm1tcTlwNGRzOGF5Y2YzN2Vya3V2eGw2NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3og0ISeflqz0k9Q2Ck/giphy.gif',
    },
  ];

  return (
    <section id="learn" className="relative w-full bg-zinc-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="text-3xl font-bold md:text-5xl">Technology in motion</h2>
            <p className="mt-3 max-w-2xl text-white/70">Race-bred engineering meets effortless luxury. Discover how hydrogen elevates performance and sustainability.</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {items.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: idx * 0.1 }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur"
            >
              <div className="aspect-video w-full overflow-hidden">
                <img src={item.gif} alt={item.label} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <p className="text-sm uppercase tracking-widest text-white/60">{item.label}</p>
                <p className="mt-2 text-lg font-semibold">{item.value}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
