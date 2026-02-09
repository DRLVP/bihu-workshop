import { GraduationCap } from 'lucide-react';
import dholImage from '../assets/bihu-dhol-playing.png';
import pepaImage from '../assets/bihu-pepa-playing.png';
import bihuDanceImage from '../assets/bihu-dance.png';
import gamosa1 from '../assets/gamosa-1.png';
import gamosa2 from '../assets/gamosa-2.png';

export default function Curriculum() {
  const curriculumItems = [
    {
      title: 'ঢোল বাদন',
      englishTitle: 'Dhol Playing',
      image: dholImage,
      imageAlt: 'Bihu Dhol Playing',
    },
    {
      title: 'বিহু নাচ',
      englishTitle: 'Bihu Dance',
      image: bihuDanceImage,
      imageAlt: 'Bihu Dance Performance',
    },
    {
      title: 'পেঁপা বাদন',
      englishTitle: 'Pepa Playing',
      image: pepaImage,
      imageAlt: 'Pepa (Horn) Playing',
    },
  ];

  return (
    <section
      id="curriculum"
      className="py-12 md:py-16 lg:py-24 bg-gradient-to-b from-white via-muga-cream/30 to-white relative overflow-hidden"
    >
      {/* Decorative Gamosa separator at top */}
      <div className="absolute top-0 left-0 right-0 h-16 opacity-30 overflow-hidden">
        <img
          src={gamosa1}
          alt="Gamosa pattern"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header with Gamosa Frame */}
          <div className="text-center mb-10 sm:mb-12 md:mb-16 relative">
            {/* Gamosa Background Frame with visible pattern */}
            <div className="relative inline-block">
              <div className="absolute inset-0 opacity-40">
                <img
                  src={gamosa1}
                  alt="Gamosa decoration"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>

              {/* Content Container with gamosa background */}
              <div className="relative bg-white/85 backdrop-blur-md border-4 border-gamusa-red/30 rounded-2xl px-6 sm:px-8 md:px-12 py-6 sm:py-8 shadow-2xl" style={{
                backgroundImage: `url(${gamosa1})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundBlendMode: 'soft-light'
              }}>
                <div className="relative bg-white/90 backdrop-blur-sm rounded-xl p-4">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 bg-gamusa-red/10 px-4 py-2 rounded-full border border-gamusa-red/20 mb-4">
                    <GraduationCap className="h-4 w-4 text-gamusa-red" />
                    <span className="text-gamusa-deep text-sm font-semibold">
                      Curriculum
                    </span>
                  </div>

                  {/* Main Title */}
                  <h2
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gamusa-deep leading-tight mb-3"
                    style={{ fontFamily: 'Georgia, serif' }}
                  >
                    প্ৰশিক্ষণৰ বিষয়সমূহ
                  </h2>
                  <p className="text-lg sm:text-xl text-gamusa-red/80 font-semibold">
                    (Curriculum)
                  </p>

                  {/* Decorative bottom border */}
                  <div className="mt-4 w-24 h-1.5 bg-gradient-to-r from-gamusa-red via-muga-gold to-gamusa-deep mx-auto rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Subtitle */}
            <p
              className="text-base sm:text-lg md:text-xl text-gray-700 text-center mt-6 px-2 sm:px-4 leading-relaxed max-w-3xl mx-auto"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              এই কৰ্মশালাত অভিজ্ঞ প্ৰশিক্ষকৰ দ্বাৰা তলত উল্লেখ কৰা বিষয়সমূহৰ ওপৰত বিশেষ
              গুৰুত্ব প্ৰদান কৰা হ'ব:
            </p>
          </div>

          {/* Curriculum Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12 md:mb-16 cursor-pointer">
            {curriculumItems.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-transparent hover:border-gamusa-red/30 transform hover:-translate-y-2"
              >
                {/* Image Container */}
                <div className="relative h-48 sm:h-56 md:h-64 bg-gradient-to-br from-muga-beige to-muga-light overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  {/* Icon and Title */}
                  <div className="flex items-center gap-3 mb-3">
                    <div>
                      <h3
                        className="text-xl sm:text-2xl font-bold text-gamusa-deep group-hover:text-gamusa-red transition-colors duration-300"
                        style={{ fontFamily: 'Georgia, serif' }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-500 font-medium">
                        {item.englishTitle}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom accent */}
                <div className="h-1.5 bg-gradient-to-r from-gamusa-red via-muga-gold to-gamusa-deep transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div
            className="bg-gradient-to-br from-gamusa-red/10 via-muga-beige/40 to-muga-light/60 rounded-2xl p-6 sm:p-8 md:p-10 border-l-4 border-gamusa-red shadow-lg text-center"
          >
            <p
              className="text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed font-medium"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              আহক, আমি সকলোৱে মিলি আমাৰ বাপতি সাহোন বিহুটিক বিশ্ব দৰবাৰত জিলিকাই
              ৰখাৰ স্বাৰ্থত এই কৰ্মশালাত অংশগ্ৰহণ কৰোঁ।
            </p>
            <div className="mt-4 w-16 h-1 bg-gradient-to-r from-gamusa-red to-muga-gold mx-auto"></div>
          </div>
        </div>
      </div>

      {/* Decorative Gamosa separator at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 opacity-30 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white"></div>
        <img
          src={gamosa2}
          alt="Gamosa pattern"
          className="w-full h-full object-cover object-center"
        />
      </div>
    </section>
  );
}
