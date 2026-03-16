import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Star, Download, ChevronLeft, ChevronRight, X } from 'lucide-react';

export function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState('');
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (value) => {
      setScrollProgress(value * 100);
    });
    return unsubscribe;
  }, [scrollYProgress]);

  const phoneRotation = useTransform(scrollYProgress, [0, 0.5], [0, 360]);

  const features = [
    {
      title: 'Smart Dashboard',
      description: 'Get insights at a glance with interactive charts and real-time analytics.',
      image: 'https://api.a0.dev/assets/image?text=Mobile%20app%20screenshot%20showing%20a%20dashboard%20interface%20with%20charts%2C%20stats%2C%20and%20navigation%20menu&aspect=16:9&seed=3347',
      highlight: 'Analytics & Insights'
    },
    {
      title: 'Social Connect',
      description: 'Stay connected with friends through seamless social features and messaging.',
      image: 'https://api.a0.dev/assets/image?text=Mobile%20app%20screenshot%20displaying%20a%20social%20feed%20with%20posts%2C%20likes%2C%20and%20user%20profiles&aspect=16:9&seed=1162',
      highlight: 'Community & Chat'
    },
    {
      title: 'Personal Settings',
      description: 'Customize your experience with advanced preferences and privacy controls.',
      image: 'https://api.a0.dev/assets/image?text=Mobile%20app%20screenshot%20showing%20settings%20page%20with%20preferences%2C%20notifications%2C%20and%20account%20options&aspect=16:9&seed=3195',
      highlight: 'Privacy & Customization'
    }
  ];

  const screenshots = [
    'https://api.a0.dev/assets/image?text=Mobile%20app%20screenshot%20showing%20a%20dashboard%20interface%20with%20charts%2C%20stats%2C%20and%20navigation%20menu&aspect=16:9&seed=3347',
    'https://api.a0.dev/assets/image?text=Mobile%20app%20screenshot%20displaying%20a%20social%20feed%20with%20posts%2C%20likes%2C%20and%20user%20profiles&aspect=16:9&seed=1162',
    'https://api.a0.dev/assets/image?text=Mobile%20app%20screenshot%20showing%20settings%20page%20with%20preferences%2C%20notifications%2C%20and%20account%20options&aspect=16:9&seed=3195',
    'https://api.a0.dev/assets/image?text=Mobile%20app%20screenshot%20of%20a%20chat%20interface%20with%20messages%2C%20emojis%2C%20and%20typing%20indicator&aspect=16:9&seed=7834'
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      rating: 5,
      text: 'This app has transformed how I manage my daily tasks. The interface is intuitive and the features are exactly what I needed.'
    },
    {
      name: 'Mike Johnson',
      rating: 5,
      text: 'Outstanding performance and user experience. The 3D animations make it feel premium and modern.'
    },
    {
      name: 'Emma Davis',
      rating: 5,
      text: 'Love the seamless integration and responsive design. Works perfectly on all my devices.'
    }
  ];

  const openLightbox = (image: string) => {
    setLightboxImage(image);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxImage('');
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && lightboxOpen) {
        closeLightbox();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-teal-50 dark:from-gray-800 dark:to-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent)]" />
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Experience the Future of Mobile Apps
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
              Discover a revolutionary mobile experience with stunning 3D interactions,
              seamless animations, and powerful features that adapt to your lifestyle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Download Now
              </button>
              <button className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-500 dark:hover:text-blue-400 transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <motion.div
              style={{ rotateY: phoneRotation }}
              className="perspective-1000"
            >
              <img
                src="https://api.a0.dev/assets/image?text=A%20sleek%203D%20smartphone%20mockup%20displaying%20a%20modern%20mobile%20app%20interface%20with%20gradient%20background%2C%20clean%20UI%20elements%2C%20and%20app%20icons%2C%20realistic%20lighting%20and%20shadows&aspect=1:1&seed=2703"
                alt="Mobile app interface"
                className="w-64 h-64 md:w-80 md:h-80 object-contain drop-shadow-2xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Feature Carousel */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Powerful Features</h2>
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-8 pb-4 min-w-max">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg p-6 min-w-[300px] md:min-w-[400px] hover:shadow-xl transition-shadow"
                >
                  <div className="relative mb-4">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-48 object-cover rounded-xl"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {feature.highlight}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* App Store Badges */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-8">Download on Your Platform</h3>
          <div className="flex justify-center gap-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-black text-white px-6 py-3 rounded-xl flex items-center gap-3 cursor-pointer hover:bg-gray-800 transition-colors"
            >
              <Download className="w-6 h-6" />
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="font-semibold">App Store</div>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-black text-white px-6 py-3 rounded-xl flex items-center gap-3 cursor-pointer hover:bg-gray-800 transition-colors"
            >
              <Download className="w-6 h-6" />
              <div className="text-left">
                <div className="text-xs">Get it on</div>
                <div className="font-semibold">Google Play</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ratings & Testimonials */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <motion.div
                  key={star}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: star * 0.1 }}
                >
                  <Star className="w-8 h-8 fill-yellow-400 text-yellow-400" />
                </motion.div>
              ))}
            </div>
            <div className="text-4xl font-bold mb-2">4.9/5</div>
            <div className="text-xl text-blue-100">From 50,000+ reviews</div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6"
              >
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-lg mb-4">"{testimonial.text}"</p>
                <div className="font-semibold">{testimonial.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshot Gallery */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">App Screenshots</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {screenshots.map((screenshot, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group cursor-pointer"
                onClick={() => openLightbox(screenshot)}
              >
                <img
                  src={screenshot}
                  alt={`Screenshot ${index + 1}`}
                  className="w-full h-32 md:h-48 object-cover rounded-xl hover:scale-105 transition-transform"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 rounded-xl transition-colors" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <motion.img
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            src={lightboxImage}
            alt="Enlarged screenshot"
            className="max-w-full max-h-full object-contain"
          />
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300"
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>
        </motion.div>
      )}

      {/* Persistent CTA */}
      <motion.div
        className="fixed bottom-6 right-6 z-40"
        animate={{ y: scrollProgress > 10 ? 0 : 100 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
            <Download className="w-5 h-5" />
            Download App
          </button>
          <div className="absolute -top-2 -left-2 w-12 h-12 border-4 border-blue-600 rounded-full border-t-transparent animate-spin" />
          <div className="absolute -top-2 -left-2 text-xs text-white font-bold flex items-center justify-center w-12 h-12">
            {Math.round(scrollProgress)}%
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-gray-400 mb-8">Join thousands of users who have transformed their mobile experience.</p>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
            Download Now
          </button>
        </div>
      </footer>
    </div>
  );
}