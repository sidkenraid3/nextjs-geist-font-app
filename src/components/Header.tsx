export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="text-xl font-bold text-white">
            Party Plans 4 U
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white hover:text-gray-300 transition-colors">
              Home
            </a>
            <a href="#services" className="text-white hover:text-gray-300 transition-colors">
              Services
            </a>
            <a href="#about" className="text-white hover:text-gray-300 transition-colors">
              About
            </a>
            <a href="#contact" className="text-white hover:text-gray-300 transition-colors">
              Contact
            </a>
          </div>
          <button className="md:hidden text-white">
            <span className="block w-6 h-0.5 bg-white mb-1"></span>
            <span className="block w-6 h-0.5 bg-white mb-1"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </button>
        </nav>
      </div>
    </header>
  )
}
