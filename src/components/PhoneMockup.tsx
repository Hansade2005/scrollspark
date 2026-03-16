import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface PhoneMockupProps {
  className?: string;
}

export function PhoneMockup({ className }: PhoneMockupProps) {
  const phoneRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: phoneRef,
    offset: ["start end", "end start"]
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [15, -15]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [-10, 10]);

  return (
    <motion.div
      ref={phoneRef}
      className={`relative mx-auto ${className}`}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      {/* Phone Frame */}
      <div className="relative w-80 h-[600px] bg-black rounded-[3rem] p-2 shadow-2xl">
        {/* Screen */}
        <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
          {/* Status Bar */}
          <div className="h-6 bg-gray-900 flex items-center justify-between px-4">
            <span className="text-xs text-white">9:41</span>
            <div className="flex gap-1">
              <div className="w-4 h-2 bg-white rounded-sm"></div>
              <div className="w-4 h-2 bg-white rounded-sm"></div>
            </div>
          </div>

          {/* App Content Mockup */}
          <div className="p-4 space-y-4">
            {/* App Header */}
            <div className="flex items-center justify-between">
              <div className="w-8 h-8 bg-blue-500 rounded-lg"></div>
              <div className="flex gap-2">
                <div className="w-6 h-6 bg-gray-300 rounded"></div>
                <div className="w-6 h-6 bg-gray-300 rounded"></div>
              </div>
            </div>

            {/* Feature Showcase */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4">
              <div className="w-12 h-12 bg-blue-500 rounded-lg mb-2"></div>
              <div className="h-4 bg-gray-300 rounded mb-2"></div>
              <div className="h-3 bg-gray-200 rounded w-3/4"></div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <div className="h-20 bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="w-8 h-8 bg-blue-500 rounded"></div>
              </div>
              <div className="h-20 bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="w-8 h-8 bg-green-500 rounded"></div>
              </div>
            </div>

            {/* Bottom Navigation */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex justify-around">
                {[1,2,3,4,5].map((i) => (
                  <div key={i} className={`w-6 h-6 rounded ${i === 3 ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Home Indicator */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-black rounded-full"></div>
      </div>

      {/* Shadow */}
      <div className="absolute inset-0 bg-black/20 rounded-[3rem] blur-xl scale-105 -z-10"></div>
    </motion.div>
  );
}