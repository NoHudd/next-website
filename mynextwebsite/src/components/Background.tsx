'use client';

import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

export default function Background() {
  const { theme } = useTheme();

  return (
    <div className="fixed inset-0 -z-10">
      <BackgroundGradientAnimation />
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1,
          background: theme === 'dark' 
            ? 'linear-gradient(to bottom right, rgba(71,112,255,0.05), transparent, rgba(71,112,255,0.05))'
            : 'linear-gradient(to bottom right, rgba(71,112,255,0.1), transparent, rgba(71,112,255,0.1))'
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
    </div>
  );
}
