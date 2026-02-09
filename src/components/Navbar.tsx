import { Button } from './ui/button';
import { Menu } from 'lucide-react';
import logo from '../assets/logo.jpeg';

export default function Navbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-md">
      <div className="container mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo and Organizer Name */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4 flex-1 min-w-0">
            {/* Japi Image */}
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full overflow-hidden border-2 border-gamusa-red shadow-lg flex-shrink-0">
              <img
                src={logo}
                alt="Japi - Traditional Assamese Hat"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="min-w-0 flex-1">
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gamusa-deep truncate">
                লাকুৱা কেন্দ্ৰীয় বিহু কৰ্মশালা
              </h2>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6 flex-shrink-0">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-gamusa-red transition-colors font-medium whitespace-nowrap cursor-pointer"
            >
              About
            </button>
            <Button
              variant="bihu"
              onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSeI9xfbUFfkyB_C-ByfvLLXAQIcoYyjEPoz_yLg8gKFubLlrg/viewform', '_blank')}
              className="!text-white font-bold shadow-lg text-sm lg:text-base px-4 lg:px-6 py-2 lg:py-2.5 whitespace-nowrap cursor-pointer"
            >
              Register Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 flex-shrink-0 cursor-pointer"
            onClick={() => scrollToSection('register')}
            aria-label="Go to registration"
          >
            <Menu className="h-5 w-5 sm:h-6 sm:w-6 text-gamusa-deep" />
          </button>
        </div>
      </div>
    </nav>
  );
}
