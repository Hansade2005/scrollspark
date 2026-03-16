import { Link } from 'react-router-dom'
import { PhoneMockup } from '../components/PhoneMockup'
import { FeatureCarousel } from '../components/FeatureCarousel'
import { StarRating } from '../components/StarRating'
import { TestimonialSection } from '../components/TestimonialSection'

export function Home() {
  const features = [
    {
      id: 'lightning-fast',
      icon: '⚡',
      title: 'Lightning Fast Performance',
      description: 'Experience blazing-fast load times with our optimized architecture. Built with Vite for instant hot module replacement and seamless development.',
      screenshot: '/screenshots/feature-1.png'
    },
    {
      id: 'ai-powered',
      icon: '🤖',
      title: 'AI-Powered Features',
      description: 'Harness the power of artificial intelligence to automate tasks and provide intelligent insights. Smart recommendations that learn from your behavior.',
      screenshot: '/screenshots/feature-2.png'
    },
    {
      id: 'cross-platform',
      icon: '📱',
      title: 'Cross-Platform Sync',
      description: 'Seamlessly sync your data across all devices. Whether on mobile, tablet, or desktop, your experience remains consistent and uninterrupted.',
      screenshot: '/screenshots/feature-3.png'
    },
    {
      id: 'security',
      icon: '🔒',
      title: 'Bank-Level Security',
      description: 'Your data is protected with enterprise-grade encryption and security measures. Privacy-first approach with end-to-end encryption.',
      screenshot: '/screenshots/feature-4.png'
    },
    {
      id: 'collaboration',
      icon: '👥',
      title: 'Real-Time Collaboration',
      description: 'Work together with your team in real-time. Share, edit, and collaborate on projects with live updates and instant communication.',
      screenshot: '/screenshots/feature-5.png'
    },
    {
      id: 'customization',
      icon: '🎨',
      title: 'Advanced Customization',
      description: 'Personalize your experience with extensive customization options. Themes, layouts, and settings tailored to your workflow.',
      screenshot: '/screenshots/feature-6.png'
    }
  ]

  const testimonials = [
    {
      id: 'sarah-johnson',
      name: 'Sarah Johnson',
      role: 'Product Manager',
      company: 'TechCorp',
      avatar: '/avatars/sarah.jpg',
      quote: 'This app has completely transformed how our team collaborates. The AI features are incredibly intuitive and save us hours every week.',
      rating: 5
    },
    {
      id: 'mike-chen',
      name: 'Mike Chen',
      role: 'Freelance Designer',
      company: 'Studio MC',
      avatar: '/avatars/mike.jpg',
      quote: 'The customization options are endless. I can tailor the interface perfectly to my workflow. Highly recommended for creative professionals.',
      rating: 5
    },
    {
      id: 'emily-davis',
      name: 'Emily Davis',
      role: 'Startup Founder',
      company: 'InnovateLabs',
      avatar: '/avatars/emily.jpg',
      quote: 'As a busy entrepreneur, I need tools that work seamlessly across all my devices. This app delivers exactly that with zero compromises.',
      rating: 5
    },
    {
      id: 'alex-rodriguez',
      name: 'Alex Rodriguez',
      role: 'Software Engineer',
      company: 'DevTech Solutions',
      avatar: '/avatars/alex.jpg',
      quote: 'The performance is outstanding. Even with complex projects, everything loads instantly. The developer experience is top-notch.',
      rating: 5
    },
    {
      id: 'lisa-wang',
      name: 'Lisa Wang',
      role: 'Marketing Director',
      company: 'Growth Agency',
      avatar: '/avatars/lisa.jpg',
      quote: 'Our team productivity has increased by 40% since adopting this platform. The collaboration features are game-changing.',
      rating: 5
    },
    {
      id: 'david-brown',
      name: 'David Brown',
      role: 'Data Analyst',
      company: 'Analytics Pro',
      avatar: '/avatars/david.jpg',
      quote: 'The analytics and reporting capabilities are exceptional. I can extract insights from my data faster than ever before.',
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="relative min-h-screen bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white overflow-hidden">
        {/* Navigation */}
        <nav className="relative z-10 container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="text-2xl font-bold">MyApp</div>
          <div className="flex gap-6">
            <Link to="/" className="hover:text-blue-200 transition-colors">Home</Link>
            <Link to="/about" className="hover:text-blue-200 transition-colors">About</Link>
            <Link to="/contact" className="hover:text-blue-200 transition-colors">Contact</Link>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Text Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Experience the
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                  Future
                </span>
                of Mobile Apps
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl">
                Discover innovative features that transform how you interact with technology.
                Download now and join millions of satisfied users.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Download Now
                </button>
                <button className="px-8 py-4 bg-blue-500/20 backdrop-blur-sm text-white rounded-xl font-semibold hover:bg-blue-500/30 transition-all duration-300 border border-white/20">
                  Watch Demo
                </button>
              </div>

              {/* Rating Display */}
              <div className="flex justify-center lg:justify-start mb-8">
                <StarRating rating={4.8} totalReviews={125000} />
              </div>

              {/* App Store Badges */}
              <div className="flex gap-4 justify-center lg:justify-start">
                <div className="bg-black rounded-xl px-6 py-3 hover:bg-gray-900 transition-colors cursor-pointer">
                  <div className="text-white text-sm">Download on the</div>
                  <div className="text-white text-lg font-semibold">App Store</div>
                </div>
                <div className="bg-black rounded-xl px-6 py-3 hover:bg-gray-900 transition-colors cursor-pointer">
                  <div className="text-white text-sm">Get it on</div>
                  <div className="text-white text-lg font-semibold">Google Play</div>
                </div>
              </div>
            </div>

            {/* Phone Mockup */}
            <div className="flex justify-center lg:justify-end">
              <PhoneMockup />
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-yellow-400/10 rounded-full blur-3xl"></div>
      </header>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
            Powerful Features
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Discover the innovative features that make our app stand out from the competition.
            Scroll through to explore each feature in detail.
          </p>
        </div>

        <FeatureCarousel features={features} />
      </section>

      {/* Testimonials Section */}
      <TestimonialSection testimonials={testimonials} />

      {/* CTA Section */}
      <section className="bg-gray-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Start building your application today. Edit the files in src/ to customize this template.
          </p>
          <button className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Start Building
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>Built with React + Vite + Tailwind CSS</p>
          <p className="mt-2 text-sm">© 2025 MyApp. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}