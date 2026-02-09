import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import bihu1 from '../assets/bihu1.jpg';
import bihu2 from '../assets/bihu2.jpg';
import bihu3 from '../assets/bihu3.jpg';
import lachitLogo from '../assets/lachit-sena-logo.png';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [useVideo, setUseVideo] = useState(false);

  const slides = [
    { image: bihu1, alt: 'Bihu Dance Performance 1' },
    { image: bihu2, alt: 'Bihu Dance Performance 2' },
    { image: bihu3, alt: 'Bihu Dance Performance 3' },
  ];

  // Auto-advance slides every 3 seconds
  useEffect(() => {
    if (!isPaused && !useVideo) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 3000); // Changed from 5000 to 3000 (3 seconds)
      return () => clearInterval(interval);
    }
  }, [isPaused, useVideo, slides.length]);

  const handleRegisterClick = () => {
    // Open Google Form in new tab
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSeI9xfbUFfkyB_C-ByfvLLXAQIcoYyjEPoz_yLg8gKFubLlrg/viewform', '_blank');
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section
      className="relative min-h-[600px] sm:min-h-[700px] lg:min-h-[800px] flex items-center overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Media */}
      {useVideo ? (
        /* YouTube Video Background with Sound */
        <div className="absolute inset-0">
          <iframe
            className="absolute inset-0 w-full h-full object-cover"
            src="https://www.youtube.com/embed/uWJ8bRttDrE?autoplay=1&mute=0&loop=1&playlist=uWJ8bRttDrE&controls=0&showinfo=0&rel=0&modestbranding=1"
            title="Bihu Dance Background"
            allow="autoplay; encrypted-media"
            allowFullScreen
            style={{
              pointerEvents: 'none',
              transform: 'scale(1.5)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
        </div>
      ) : (
        /* Sliding Images Background */
        <>
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
            </div>
          ))}
        </>
      )}

      {/* Animated Bihu gradient overlay */}
      <div className="absolute inset-0 bihu-hero-gradient opacity-40">
        {/* Decorative floral pattern overlay */}
        <div className="absolute inset-0 floral-pattern"></div>

        {/* Subtle geometric pattern */}
        <div className="absolute inset-0 bg-hero-pattern opacity-20"></div>

        {/* Gamusa-inspired decorative borders */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-gamusa-deep via-gamusa-red to-muga-gold"></div>
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-muga-gold via-gamusa-red to-gamusa-deep"></div>
      </div>

      {/* Beer Lachit Sena Logo Watermark */}
      <div className="absolute top-20 right-4 md:top-24 md:right-8 z-10 opacity-30 hover:opacity-60 transition-opacity duration-300">
        <img
          src={lachitLogo}
          alt="Beer Lachit Sena Logo"
          className="w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow-2xl"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge with animation - Enhanced with gradient */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-muga-gold/30 via-gamusa-red/20 to-muga-gold/30 backdrop-blur-md px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-6 sm:mb-8 border-2 border-muga-gold/50 shine-effect animate-fade-in-up shadow-xl">
            <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 bg-muga-gold rounded-full animate-pulse shadow-lg"></span>
            <span className="text-muga-cream text-xs sm:text-sm md:text-base font-bold tracking-wide">গৰিমাময় ষষ্ঠ বৰ্ষ</span>
          </div>

          {/* Main Heading with gradient text effect */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 sm:mb-8 leading-tight animate-fade-in-up delay-100 px-2" style={{ fontFamily: 'Georgia, serif' }}>
            <span className="bg-gradient-to-r from-white via-muga-cream to-white bg-clip-text text-transparent drop-shadow-2xl">
              লাকুৱা কেন্দ্ৰীয় বিহু কৰ্মশালা
            </span>
            <span className="block mt-2 sm:mt-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl bg-gradient-to-r from-muga-gold via-muga-cream to-muga-gold bg-clip-text text-transparent drop-shadow-2xl font-black">২০২৬</span>
          </h1>

          {/* Venue text with gamosa-inspired background */}
          <div className="mb-4 sm:mb-6 animate-fade-in-up delay-200 px-2">
            <div className="inline-block bg-gradient-to-r from-gamusa-red/20 via-muga-gold/30 to-gamusa-red/20 backdrop-blur-md px-6 sm:px-8 py-3 sm:py-4 rounded-2xl border-2 border-muga-gold/40 shadow-2xl">
              <p className="text-xl sm:text-2xl md:text-3xl bg-gradient-to-r from-muga-cream via-white to-muga-cream bg-clip-text text-transparent font-bold tracking-wide" style={{ fontFamily: 'Georgia, serif' }}>
                স্থানঃ লাইলৌ বৰুৱা ক্ষেত্ৰ (লাকুৱা চাৰিঙ্গীয়া কোঁৱৰ ৰাজহুৱা খেলপথাৰ)
              </p>
            </div>
            <div className="w-32 sm:w-40 h-1.5 bg-gradient-to-r from-gamusa-red via-muga-gold to-gamusa-red mx-auto mt-4 sm:mt-5 rounded-full shadow-lg"></div>
          </div>

          {/* Sub-headline with gradient text - Assamese & English */}
          <div className="mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto animate-fade-in-up delay-300 px-4">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-3 font-bold leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
              <span className="bg-gradient-to-r from-muga-cream via-muga-gold to-muga-cream bg-clip-text text-transparent drop-shadow-2xl">
                সংস্কৃতি সংৰক্ষণ · যুৱ শক্তিৰ উত্থান · অসমীয়া ঐতিহ্যৰ উদযাপন
              </span>
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold leading-relaxed">
              <span className="bg-gradient-to-r from-white via-muga-beige to-white bg-clip-text text-transparent drop-shadow-xl">
                Preserving Culture · Empowering Youth · Celebrating Assamese Heritage
              </span>
            </p>
          </div>

          {/* CTA Buttons with hover effects */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 justify-center mb-12 sm:mb-14 md:mb-16 animate-fade-in-up delay-400 px-4">
            <Button
              variant="bihu"
              onClick={handleRegisterClick}
              className="w-full sm:w-auto bg-white text-gamusa-deep hover:bg-muga-cream hover:scale-105 transition-all duration-300 shadow-2xl font-bold text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-5 md:py-6 cursor-pointer"
            >
              Join the Workshop
              <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6" />
            </Button>
            <Button
              variant="outline"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto bg-white/15 backdrop-blur-md text-white border-2 border-white/40 hover:bg-white/25 hover:scale-105 transition-all duration-300 font-semibold text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-5 md:py-6 cursor-pointer"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      {!useVideo && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full cursor-pointer ${index === currentSlide
                ? 'w-12 h-3 bg-white'
                : 'w-3 h-3 bg-white/50 hover:bg-white/70'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Media Toggle Button */}
      <button
        onClick={() => setUseVideo(!useVideo)}
        className="absolute bottom-8 right-8 z-20 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm font-semibold border border-white/30 hover:bg-white/30 transition-all duration-300 cursor-pointer"
      >
        {useVideo ? '📸 Show Images' : '🎥 Play Video'}
      </button>

      {/* Decorative bottom wave with Gamusa colors */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#FFF8E7', stopOpacity: 1 }} />
              <stop offset="50%" style={{ stopColor: '#ffffff', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#FFF8E7', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <path
            fill="url(#waveGradient)"
            fillOpacity="1"
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}
