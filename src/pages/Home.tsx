import { Link } from 'react-router-dom'

export function Home() {
  const features = [
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Built with Vite for instant hot module replacement and blazing fast builds.'
    },
    {
      icon: '🎨',
      title: 'Tailwind CSS',
      description: 'Utility-first CSS framework loaded via CDN for rapid UI development.'
    },
    {
      icon: '⚛️',
      title: 'React 18',
      description: 'Latest React features including concurrent rendering and automatic batching.'
    },
    {
      icon: '📱',
      title: 'Responsive',
      description: 'Mobile-first design that looks great on any device or screen size.'
    },
    {
      icon: '🔧',
      title: 'TypeScript',
      description: 'Full TypeScript support for type-safe development and better DX.'
    },
    {
      icon: '🚀',
      title: 'Production Ready',
      description: 'Optimized build configuration ready for deployment anywhere.'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">MyApp</div>
          <div className="flex gap-6">
            <Link to="/" className="hover:text-blue-200 transition-colors">Home</Link>
            <Link to="/about" className="hover:text-blue-200 transition-colors">About</Link>
            <Link to="/contact" className="hover:text-blue-200 transition-colors">Contact</Link>
          </div>
        </nav>

        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Build Amazing Apps
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto">
            A modern React starter template with Vite, TypeScript, and Tailwind CSS.
            Start building your next project in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg">
              Get Started
            </button>
            <button className="px-8 py-4 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-400 transition-colors border border-blue-400">
              Learn More
            </button>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
          Everything You Need
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          This template comes with all the tools and configurations you need to build modern web applications.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

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