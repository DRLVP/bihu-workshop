import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { ArrowRight, Music, Users, Calendar } from 'lucide-react';
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

  // Auto-advance slides
  useEffect(() => {
    if (!isPaused && !useVideo) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPaused, useVideo, slides.length]);

  const scrollToRegister = () => {
    const element = document.getElementById('register');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section
      className="relative min-h-[700px] lg:min-h-[800px] flex items-center overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Media */}
      {useVideo ? (
        /* YouTube Video Background */
        <div className="absolute inset-0">
          <iframe
            className="absolute inset-0 w-full h-full object-cover"
            src="https://www.youtube.com/embed/uWJ8bRttDrE?autoplay=1&mute=1&loop=1&playlist=uWJ8bRttDrE&controls=0&showinfo=0&rel=0&modestbranding=1"
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
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge with animation */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-6 py-3 rounded-full mb-8 border border-white/30 shine-effect animate-fade-in-up">
            <span className="h-2.5 w-2.5 bg-muga-cream rounded-full animate-pulse"></span>
            <span className="text-white text-sm md:text-base font-semibold tracking-wide">Cultural Heritage Program 2026</span>
          </div>

          {/* Main Heading with stagger animation */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight animate-fade-in-up delay-100 drop-shadow-2xl">
            Bihu Dance Workshop
            <span className="block text-muga-cream mt-3 text-4xl md:text-6xl lg:text-7xl">2026</span>
          </h1>

          {/* Assamese text with enhanced styling */}
          <div className="mb-6 animate-fade-in-up delay-200">
            <p className="text-3xl md:text-4xl text-muga-cream mb-2 font-bold tracking-wide drop-shadow-lg" style={{ fontFamily: 'Georgia, serif' }}>
              বিহু নৃত্যৰ কৰ্মশালা
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-muga-gold to-transparent mx-auto mt-4"></div>
          </div>

          {/* Sub-headline with enhanced typography */}
          <p className="text-xl md:text-2xl text-white/95 mb-12 max-w-3xl mx-auto font-medium leading-relaxed animate-fade-in-up delay-300 drop-shadow-lg">
            Preserving Culture · Empowering Youth · Celebrating Assamese Heritage
          </p>

          {/* CTA Buttons with hover effects */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center mb-16 animate-fade-in-up delay-400">
            <Button
              variant="bihu"
              size="xl"
              onClick={scrollToRegister}
              className="bg-white text-gamusa-deep hover:bg-muga-cream hover:scale-105 transition-all duration-300 shadow-2xl font-bold text-lg px-8 py-6"
            >
              Join the Workshop
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="xl"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white/15 backdrop-blur-md text-white border-2 border-white/40 hover:bg-white/25 hover:scale-105 transition-all duration-300 font-semibold text-lg px-8 py-6"
            >
              Learn More
            </Button>
          </div>

          {/* Enhanced stats cards with icons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto animate-fade-in-up delay-500">
            {[
              { label: 'Workshop Days', value: '5', icon: Calendar },
              { label: 'Training Sessions', value: '10', icon: Music },
              { label: 'Expert Trainers', value: '3', icon: Users },
            ].map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="group bg-white/15 backdrop-blur-md rounded-2xl p-6 border border-white/25 hover:bg-white/25 hover:scale-105 transition-all duration-300 shine-effect"
                >
                  <Icon className="w-8 h-8 text-muga-gold mb-3 mx-auto group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-4xl md:text-5xl font-black text-muga-cream mb-2">{stat.value}</div>
                  <div className="text-sm md:text-base text-white/90 font-medium">{stat.label}</div>
                </div>
              );
            })}
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
              className={`transition-all duration-300 rounded-full ${index === currentSlide
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
        className="absolute bottom-8 right-8 z-20 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm font-semibold border border-white/30 hover:bg-white/30 transition-all duration-300"
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
