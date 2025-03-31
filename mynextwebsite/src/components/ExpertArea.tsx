'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { expertItems, ExpertItem } from '@/data/expert-items';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function ExpertArea() {
  return (
    <div className="group rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark">
      <motion.h3 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl font-semibold dark:text-light mb-6"
      >
        My Expert Area
      </motion.h3>

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4"
      >
        {expertItems.map((expert: ExpertItem, index: number) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{ scale: 1.05 }}
            className="relative group/item flex flex-col items-center"
          >
            <div className="relative grid place-content-center rounded-lg bg-white p-3 dark:bg-dark-2 h-20 w-20 shadow-sm transition-all duration-300 group-hover/item:shadow-md">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
              <Image
                src={expert.icon}
                alt={expert.name}
                width={40}
                height={40}
                className={`h-full w-full object-contain ${expert.name === 'Next.js' ? 'dark:invert' : ''}`}
              />
            </div>
            <motion.p 
              className="mt-3 text-center text-base font-medium text-dark dark:text-light/70"
              whileHover={{ color: 'var(--color-primary)' }}
            >
              {expert.name}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
} 