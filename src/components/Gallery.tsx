import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import gamosa1 from '../assets/gamosa-1.png';
import bihu1 from '../assets/bihu1.jpg';
import bihu2 from '../assets/bihu2.jpg';
import bihu3 from '../assets/bihu3.jpg';
import dholImage from '../assets/bihu-dhol-playing.png';
import pepaImage from '../assets/bihu-pepa-playing.png';
import bihuDanceImage from '../assets/bihu-dance.png';

export default function Gallery() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const galleryItems = [
    { image: bihu1, title: 'বিহু নৃত্য প্ৰদৰ্শন', subtitle: 'Bihu Dance Performance' },
    { image: bihu2, title: 'সাংস্কৃতিক কাৰ্যসূচী', subtitle: 'Cultural Program' },
    { image: bihu3, title: 'পৰম্পৰাগত উৎসৱ', subtitle: 'Traditional Festival' },
    { image: dholImage, title: 'ঢোল বাদন', subtitle: 'Dhol Playing' },
    { image: bihuDanceImage, title: 'বিহু নাচ', subtitle: 'Bihu Dance' },
    { image: pepaImage, title: 'পেঁপা বাদন', subtitle: 'Pepa Playing' },
  ];

  // Auto-rotate slides every 3 seconds
  useEffect(() => {
    if (!isPaused && selectedImage === null) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % galleryItems.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isPaused, selectedImage, galleryItems.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    setSelectedImage((prev) => (prev !== null ? (prev + 1) % galleryItems.length : 0));
  };

  const prevImage = () => {
    setSelectedImage((prev) =>
      prev !== null ? (prev - 1 + galleryItems.length) % galleryItems.length : 0
    );
  };

  return (
    <section
      id="gallery"
      className="py-12 md:py-16 lg:py-24 bg-gradient-to-b from-white via-muga-beige/20 to-white relative overflow-hidden"
    >
      {/* Decorative Gamosa separator at top */}
      <div className="absolute top-0 left-0 right-0 h-12 opacity-20 overflow-hidden">
        <img
          src={gamosa1}
          alt="Gamosa pattern"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Gamosa Background */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16 relative">
          <div className="relative inline-block">
            <div className="absolute inset-0 opacity-40">
              <img
                src={gamosa1}
                alt="Gamosa decoration"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>

            <div
              className="relative bg-white/85 backdrop-blur-md border-4 border-gamusa-red/30 rounded-2xl px-6 sm:px-8 md:px-12 py-6 sm:py-8 shadow-2xl"
              style={{
                backgroundImage: `url(${gamosa1})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundBlendMode: 'soft-light',
              }}
            >
              <div className="relative bg-white/90 backdrop-blur-sm rounded-xl p-4">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-gamusa-red/10 px-4 py-2 rounded-full border border-gamusa-red/20 mb-4">
                  <ImageIcon className="h-4 w-4 text-gamusa-red" />
                  <span className="text-gamusa-deep text-sm font-semibold">Gallery</span>
                </div>

                {/* Main Title */}
                <h2
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gamusa-deep leading-tight mb-3"
                  style={{ fontFamily: 'Georgia, serif' }}
                >
                  আমাৰ মুহূৰ্তসমূহ
                </h2>
                <p className="text-lg sm:text-xl text-gamusa-red/80 font-semibold">
                  (Our Moments)
                </p>

                {/* Decorative bottom border */}
                <div className="mt-4 w-24 h-1.5 bg-gradient-to-r from-gamusa-red via-muga-gold to-gamusa-deep mx-auto rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Subtitle */}
          <p
            className="text-base sm:text-lg text-gray-700 text-center mt-6 px-2 sm:px-4 leading-relaxed max-w-3xl mx-auto"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            পূৰ্বৰ কৰ্মশালাৰ স্মৃতি আৰু মুহূৰ্তসমূহ
            <br />
            <span className="text-sm text-gray-600 italic">
              (Memories and moments from previous workshops)
            </span>
          </p>
        </div>

        {/* Main Slider */}
        <div
          className="relative max-w-5xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Slider Container */}
          <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-500"
                  onClick={() => openModal(index)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                {/* Image Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                  <h3
                    className="text-xl sm:text-2xl md:text-3xl font-bold mb-1"
                    style={{ fontFamily: 'Georgia, serif' }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base opacity-90">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {galleryItems.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${index === currentSlide
                    ? 'w-10 h-3 bg-gamusa-red'
                    : 'w-3 h-3 bg-gray-300 hover:bg-gamusa-red/50'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mt-8 sm:mt-12 max-w-5xl mx-auto">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              onClick={() => openModal(index)}
              className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-gamusa-red"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal/Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white hover:text-gamusa-red transition-colors p-2 bg-white/10 rounded-full hover:bg-white/20 cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 text-white hover:text-gamusa-red transition-colors p-2 bg-white/10 rounded-full hover:bg-white/20 cursor-pointer"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 text-white hover:text-gamusa-red transition-colors p-2 bg-white/10 rounded-full hover:bg-white/20 cursor-pointer"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          <div className="max-w-6xl max-h-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={galleryItems[selectedImage].image}
              alt={galleryItems[selectedImage].title}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
            <div className="text-center mt-4 text-white">
              <h3
                className="text-xl sm:text-2xl md:text-3xl font-bold mb-1"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                {galleryItems[selectedImage].title}
              </h3>
              <p className="text-sm sm:text-base opacity-90">
                {galleryItems[selectedImage].subtitle}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
