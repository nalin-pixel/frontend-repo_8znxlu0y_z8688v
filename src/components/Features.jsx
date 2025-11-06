import React from 'react';
import { Rocket, Leaf, Gauge, Battery } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Rocket,
    title: 'Supercar Acceleration',
    desc: 'Instant torque with electric drive. 0–100 km/h in under 3 seconds powered by clean hydrogen.',
  },
  {
    icon: Gauge,
    title: 'Track-Grade Range',
    desc: 'Up to 800 km on a single fill with quick 5-minute refueling to keep you moving.',
  },
  {
    icon: Leaf,
    title: 'Zero Emissions',
    desc: 'Only water vapor out the tail. Breathe easy with a drivetrain that loves the planet.',
  },
  {
    icon: Battery,
    title: 'Efficient Powertrain',
    desc: 'Fuel cell + performance battery hybrid for relentless power and thermal efficiency.',
  },
];

export default function Features() {
  return (
    <section id="performance" className="relative w-full bg-gradient-to-b from-black to-zinc-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold md:text-5xl">Engineered to thrill</h2>
            <p className="mt-3 max-w-2xl text-white/70">Purpose-built architecture for speed, endurance, and everyday luxury comfort.</p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-white/10 p-3">
                  <f.icon className="h-6 w-6 text-red-400" />
                </div>
                <h3 className="text-lg font-semibold">{f.title}</h3>
              </div>
              <p className="mt-4 text-sm text-white/70">{f.desc}</p>
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-red-500/10 blur-2xl transition group-hover:bg-red-500/20" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
