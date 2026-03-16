import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface Feature {
  id: string;
  title: string;
  description: string;
  screenshot: string;
  icon: string;
}

interface FeatureCarouselProps {
  features: Feature[];
}

export function FeatureCarousel({ features }: FeatureCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({ container: containerRef });

  return (
    <div className="relative">
      {/* Progress Indicator */}
      <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm py-4 mb-8">
        <div className="container mx-auto px-4">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <motion.div
              className="bg-blue-600 h-2 rounded-full"
              style={{ scaleX: scrollXProgress }}
              initial={{ scaleX: 0 }}
            />
          </div>
          <div className="flex justify-between mt-2 text-sm text-gray-600">
            <span>Features Overview</span>
            <span>{Math.round(scrollXProgress.get() * 100)}% Complete</span>
          </div>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div
        ref={containerRef}
        className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-8"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={feature.id}
            className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-4 snap-center"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
              {/* Screenshot */}
              <div className="relative h-64 bg-gradient-to-br from-blue-50 to-indigo-50 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Mock Screenshot */}
                  <div className="w-48 h-96 bg-white rounded-2xl shadow-lg border-4 border-gray-200 relative">
                    {/* Status Bar */}
                    <div className="h-6 bg-gray-800 rounded-t-2xl"></div>

                    {/* Content */}
                    <div className="p-3 space-y-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-lg"></div>
                      <div className="space-y-2">
                        <div className="h-3 bg-gray-300 rounded"></div>
                        <div className="h-3 bg-gray-300 rounded w-3/4"></div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="h-16 bg-gray-200 rounded"></div>
                        <div className="h-16 bg-gray-200 rounded"></div>
                      </div>
                    </div>

                    {/* Highlight Animation */}
                    <motion.div
                      className="absolute inset-0 bg-blue-500/20 rounded-2xl"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 2, delay: index * 0.5 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>

                {/* Feature Icon */}
                <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center text-2xl">
                  {feature.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Action Button */}
                <button className="mt-4 w-full bg-blue-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="text-center mt-8">
        <p className="text-gray-500 text-sm">← Scroll horizontally to explore features →</p>
      </div>
    </div>
  );
}