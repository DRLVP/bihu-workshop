import { Button } from './ui/button';
import { Menu } from 'lucide-react';
import japiImage from '../assets/japee.jpg';
import lachitLogo from '../assets/lachit-sena-logo.png';

export default function Navbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-md">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Organizer Name */}
          <div className="flex items-center gap-3 md:gap-4 flex-1">
            {/* Japi Image */}
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border-2 border-gamusa-red shadow-lg flex-shrink-0">
              <img
                src={japiImage}
                alt="Japi - Traditional Assamese Hat"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Beer Lachit Sena Logo */}
            <div className="w-12 h-12 md:w-14 md:h-14 flex-shrink-0">
              <img
                src={lachitLogo}
                alt="Beer Lachit Sena Logo"
                className="w-full h-full object-contain drop-shadow-md"
              />
            </div>

            <div>
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-gamusa-deep">
                বীৰ লাচিত সেনা অসম
              </h2>
              <p className="text-xs md:text-sm text-gray-600 hidden sm:block">
                লাকুৱা আঞ্চলিক সমিতি।
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-gamusa-red transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('details')}
              className="text-gray-700 hover:text-gamusa-red transition-colors font-medium"
            >
              Details
            </button>
            <Button
              variant="bihu"
              size="lg"
              onClick={() => scrollToSection('register')}
              className="!text-white font-bold shadow-lg"
            >
              Register Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => scrollToSection('register')}>
            <Menu className="h-6 w-6 text-gamusa-deep" />
          </button>
        </div>
      </div>
    </nav>
  );
}
