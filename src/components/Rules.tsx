import { ShieldCheck } from 'lucide-react';
import gamosa2 from '../assets/gamosa-2.png';

export default function Rules() {
  const rules = [
    {
      text: 'নামভৰ্তি মাচুল প্ৰতিটো বিভাগতে ২০০ (দুশ) টকা ধাৰ্য কৰা হৈছে। (কোনো কাৰণতে এই মাচুল ঘূৰাই দিয়া নহয়)',
    },
    {
      text: 'সকলো যোগদানকাৰী প্ৰশিক্ষাৰ্থীকে প্ৰশিক্ষণৰ অন্তত একোখন মান-পত্ৰ প্ৰদান কৰা হ\'ব।',
    },
    {
      text: 'প্ৰশিক্ষাৰ্থীসকলে ২ কপিকৈ ফটো জমা দিব লাগিব।',
    },
    {
      text: 'প্ৰশিক্ষাৰ্থীৰ বয়স ৫ বছৰৰ পৰা ৪৫ বছৰৰ ভিতৰত হ\'ব লাগিব।',
    },
    {
      text: 'প্ৰশিক্ষণ গ্ৰহণ কৰি থকা সময়ত প্ৰশিক্ষাৰ্থীসকলে বাদ্যযন্ত্ৰ লগত লৈ অহাৰ লগতে জাতীয় সাজ-পাৰ পৰিধান কৰি অহাটো বাধ্যতামূলক।',
    },
    {
      text: 'প্ৰশিক্ষাৰ্থী তথা অভিভাৱক সকলৰ বাবে আসনৰ ব্যৱস্থা কৰিব পৰা নাযাব।',
    },
    {
      text: 'প্ৰশিক্ষণ লোৱাৰ আগত আৰু শেষ হোৱাৰ পাছত প্ৰশিক্ষাৰ্থীৰ দায়িত্ব অভিভাৱকে ল\'ব লাগিব।',
    },
    {
      text: 'সকলো ক্ষেত্ৰতে শৃংখলাবদ্ধ আৰু পৰিষ্কাৰ পৰিচ্ছন্নতা অৱলম্বন কৰিব লাগিব।',
    },
    {
      text: 'প্ৰশিক্ষাৰ্থীসকলে কোনো ধৰণৰ ৰাগিয়াল দ্ৰব্য সেৱন কৰিব নোৱাৰিব।',
    },
    {
      text: 'প্ৰশিক্ষণৰ সময়ত নিৰ্ধাৰিত স্থানৰ যিকোনো সুবিধাজনক ঠাইৰ পৰা ল\'ব লাগিব। ইয়াত কোনেও আপত্তি কৰিব নোৱাৰিব।',
    },
  ];

  return (
    <section
      id="rules"
      className="py-12 md:py-16 lg:py-24 bg-gradient-to-b from-white via-muga-light/20 to-white relative overflow-hidden"
    >
      {/* Decorative Gamosa separator at top */}
      <div className="absolute top-0 left-0 right-0 h-12 opacity-20 overflow-hidden">
        <img
          src={gamosa2}
          alt="Gamosa pattern"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header with Gamosa Background Pattern */}
          <div className="text-center mb-10 sm:mb-12 md:mb-16 relative">
            <div className="relative inline-block">
              <div className="absolute inset-0 opacity-40">
                <img
                  src={gamosa2}
                  alt="Gamosa decoration"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>

              <div className="relative bg-white/85 backdrop-blur-md border-4 border-gamusa-red/30 rounded-2xl px-6 sm:px-8 md:px-12 py-6 sm:py-8 shadow-2xl" style={{
                backgroundImage: `url(${gamosa2})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundBlendMode: 'soft-light'
              }}>
                <div className="relative bg-white/90 backdrop-blur-sm rounded-xl p-4">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 bg-gamusa-red/10 px-4 py-2 rounded-full border border-gamusa-red/20 mb-4">
                    <ShieldCheck className="h-4 w-4 text-gamusa-red" />
                    <span className="text-gamusa-deep text-sm font-semibold">
                      Guidelines
                    </span>
                  </div>

                  {/* Main Title */}
                  <h2
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gamusa-deep leading-tight mb-3"
                    style={{ fontFamily: 'Georgia, serif' }}
                  >
                    নিয়মাৱলী
                  </h2>
                  <p className="text-lg sm:text-xl text-gamusa-red/80 font-semibold">
                    (Rules & Regulations)
                  </p>

                  {/* Decorative bottom border */}
                  <div className="mt-4 w-24 h-1.5 bg-gradient-to-r from-gamusa-red via-muga-gold to-gamusa-deep mx-auto rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Rules List */}
          <div className="bg-white rounded-2xl shadow-xl border-2 border-gamusa-red/20 overflow-hidden">
            <div className="bg-gradient-to-r from-gamusa-red to-gamusa-deep p-4 sm:p-5">
              <h3
                className="text-lg sm:text-xl font-bold text-white text-center"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                অনুসৰণীয় নিয়মসমূহ
              </h3>
            </div>

            <div className="p-6 sm:p-8 md:p-10">
              <ul className="space-y-4 sm:space-y-5">
                {rules.map((rule, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 sm:gap-4 p-4 rounded-xl hover:bg-muga-light/30 transition-colors duration-300 group"
                  >
                    {/* Rule Number */}
                    <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-gamusa-red to-muga-gold flex items-center justify-center text-white font-bold text-sm sm:text-base shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {index + 1}
                    </div>

                    {/* Rule Text */}
                    <p
                      className="text-sm sm:text-base md:text-lg text-gray-800 leading-relaxed flex-1 pt-1"
                      style={{ fontFamily: 'Georgia, serif' }}
                    >
                      {rule.text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Important Note */}
          <div className="mt-8 sm:mt-10 bg-gradient-to-br from-gamusa-red/10 via-muga-beige/40 to-muga-light/60 rounded-2xl p-5 sm:p-6 md:p-8 border-l-4 border-gamusa-red shadow-lg">
            <div className="flex items-start gap-3 sm:gap-4">
              <ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8 text-gamusa-red flex-shrink-0 mt-1" />
              <div>
                <h4
                  className="text-base sm:text-lg md:text-xl font-bold text-gamusa-deep mb-2"
                  style={{ fontFamily: 'Georgia, serif' }}
                >
                  গুৰুত্বপূৰ্ণ কথা
                </h4>
                <p
                  className="text-sm sm:text-base text-gray-700 leading-relaxed"
                  style={{ fontFamily: 'Georgia, serif' }}
                >
                  অনুগ্ৰহ কৰি ওপৰত উল্লেখ কৰা সকলো নিয়ম-নীতি মানি চলক। যিকোনো সমস্যাৰ বাবে আয়োজকৰ লগত যোগাযোগ কৰক।
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-muga-gold to-transparent"></div>
    </section>
  );
}
