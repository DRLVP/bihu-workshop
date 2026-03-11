import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Image as ImageIcon, Video } from 'lucide-react';
import gamosa1 from '../assets/gamosa-1.png';
import workshop1 from '../assets/workshop-1.jpg';
import workshop2 from '../assets/workshop-2.jpg';
import workshop3 from '../assets/workshop-3.jpg';
import workshop4 from '../assets/workshop-4.jpg';
import workshop5 from '../assets/workshop-5.jpg';
import workshop6 from '../assets/workshop-6.jpg';
import workshop7 from '../assets/workshop-7.jpeg';
import workshop8 from '../assets/workshop-8.jpeg';
import workshop9 from '../assets/workshop-9.jpeg';
import workshop10 from '../assets/workshop-10.jpeg';
import workshop11 from '../assets/workshop-11.jpeg';
import workshop12 from '../assets/workshop-12.jpeg';
import workshop13 from '../assets/workshop-13.jpeg';
import workshop14 from '../assets/workshop-14.jpeg';
import workshop15 from '../assets/workshop-15.jpeg';
import workshop16 from '../assets/workshop-16.jpeg';
import workshop17 from '../assets/workshop-17.jpeg';
import workshop18 from '../assets/workshop-18.jpeg';
import workshop19 from '../assets/workshop-19.jpeg';
import workshop20 from '../assets/workshop-20.jpeg';

export default function Gallery() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const galleryItems = [
    { image: workshop1, title: 'কৰ্মশালাৰ মুহূৰ্ত', subtitle: 'Workshop Moment' },
    { image: workshop2, title: 'কৰ্মশালাৰ মুহূৰ্ত', subtitle: 'Workshop Moment' },
    { image: workshop3, title: 'কৰ্মশালাৰ মুহূৰ্ত', subtitle: 'Workshop Moment' },
    { image: workshop4, title: 'কৰ্মশালাৰ মুহূৰ্ত', subtitle: 'Workshop Moment' },
    { image: workshop5, title: 'কৰ্মশালাৰ মুহূৰ্ত', subtitle: 'Workshop Moment' },
    { image: workshop6, title: 'কৰ্মশালাৰ মুহূৰ্ত', subtitle: 'Workshop Moment' },
    { image: workshop7, title: 'কৰ্মশালাৰ মুহূৰ্ত', subtitle: 'Workshop Moment' },
    { image: workshop8, title: 'কৰ্মশালাৰ মুহূৰ্ত', subtitle: 'Workshop Moment' },
    { image: workshop9, title: 'কৰ্মশালাৰ মুহূৰ্ত', subtitle: 'Workshop Moment' },
    { image: workshop10, title: 'কৰ্মশালাৰ মুহূৰ্ত', subtitle: 'Workshop Moment' },
    { image: workshop11, title: 'কৰ্মশালাৰ মুহূৰ্ত', subtitle: 'Workshop Moment' },
    { image: workshop12, title: 'কৰ্মশালাৰ মুহূৰ্ত', subtitle: 'Workshop Moment' },
    { image: workshop13, title: 'কৰ্মশালাৰ মুহূৰ্ত', subtitle: 'Workshop Moment' },
    { image: workshop14, title: 'কৰ্মশালাৰ মুহূৰ্ত', subtitle: 'Workshop Moment' },
    { image: workshop15, title: 'কৰ্মশালাৰ মুহূৰ্ত', subtitle: 'Workshop Moment' },
    { image: workshop16, title: 'কৰ্মশালাৰ মুহূৰ্ত', subtitle: 'Workshop Moment' },
    { image: workshop17, title: 'কৰ্মশালাৰ মুহূৰ্ত', subtitle: 'Workshop Moment' },
    { image: workshop18, title: 'কৰ্মশালাৰ মুহূৰ্ত', subtitle: 'Workshop Moment' },
    { image: workshop19, title: 'কৰ্মশালাৰ মুহূৰ্ত', subtitle: 'Workshop Moment' },
    { image: workshop20, title: 'কৰ্মশালাৰ মুহূৰ্ত', subtitle: 'Workshop Moment' },
  ];

  // Default Facebook Video URL
  const facebookVideoUrl = 'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2F100082564459517%2Fvideos%2Fpcb.643684125060397%2F1023034236372943&show_text=0&width=560';

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

        {/* Video Player Section */}
        <div className="mt-16 sm:mt-24 max-w-5xl mx-auto border-t-2 border-gamusa-red/20 pt-16">
          <div className="text-center mb-10 relative">
            <div className="inline-flex items-center gap-2 bg-gamusa-red/10 px-4 py-2 rounded-full border border-gamusa-red/20 mb-4">
              <Video className="h-4 w-4 text-gamusa-red" />
              <span className="text-gamusa-deep text-sm font-semibold">ভিডিঅ সমূহ (Videos)</span>
            </div>
            <h3
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-gamusa-deep mb-3"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              কৰ্মশালাৰ দৃশ্যকল্প
            </h3>
            <p className="text-sm sm:text-base text-gray-600 italic">
              (Glimpses from the workshop)
            </p>
          </div>

          <div className="flex justify-center w-full">
            <div className="relative w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-video bg-black flex items-center justify-center">
              <iframe
                src={facebookVideoUrl}
                width="100%"
                height="100%"
                style={{ border: 'none', overflow: 'hidden' }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                title="Facebook Video Player"
              ></iframe>
            </div>
          </div>
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
