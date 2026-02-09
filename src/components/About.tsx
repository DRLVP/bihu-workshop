import { Sparkles, MapPin } from 'lucide-react';
import japeeImage from '../assets/japee.jpg';

export default function About() {
  return (
    <section id="about" className="py-12 md:py-16 lg:py-24 bg-gradient-to-b from-white via-muga-light/20 to-white overflow-hidden relative">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gamusa-red to-transparent"></div>

      {/* Floating Japi Image Watermark */}
      <div className="absolute top-10 right-4 md:top-16 md:right-12 lg:right-16 z-0 opacity-15 hover:opacity-30 transition-opacity duration-500 rotate-12 hover:rotate-0">
        <img
          src={japeeImage}
          alt="Traditional Assamese Japi"
          className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-contain drop-shadow-2xl transform hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Floating Japi Image Watermark - Left Side */}
      <div className="absolute bottom-20 left-4 md:bottom-32 md:left-12 lg:left-16 z-0 opacity-10 hover:opacity-25 transition-opacity duration-500 -rotate-12 hover:rotate-0">
        <img
          src={japeeImage}
          alt="Traditional Assamese Japi"
          className="w-28 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 object-contain drop-shadow-2xl transform hover:scale-110 transition-transform duration-500"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Badge */}
          <div className="text-center mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 bg-gamusa-red/10 px-4 py-2 rounded-full border border-gamusa-red/20">
              <Sparkles className="h-4 w-4 text-gamusa-red" />
              <span className="text-gamusa-deep text-sm font-semibold">পৰিচয় আৰু উদ্দেশ্য</span>
            </div>
          </div>

          {/* Main Title - Assamese */}
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-10 text-gamusa-deep leading-tight px-2"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            ঐতিহ্যৰ সন্ধানত – লাকুৱা কেন্দ্ৰীয় বিহু কৰ্মশালা ২০২৬
          </h2>

          {/* Quote Section */}
          <div className="bg-gradient-to-br from-gamusa-red/5 to-muga-light/30 rounded-2xl p-6 sm:p-8 md:p-10 mb-8 sm:mb-10 border-l-4 border-gamusa-red shadow-lg">
            <p
              className="text-lg sm:text-xl md:text-2xl text-gray-800 text-center italic leading-relaxed font-medium"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              "বিহু আমাৰ বাপতি সাহোন, বিহু আমাৰ প্ৰাণ।<br />
              জাতিৰ পিতাৰ উশাহ-নিশাহ, অসমীয়াৰ পৰিচয় আৰু সন্মান।"
            </p>
            <div className="mt-4 w-16 h-1 bg-gradient-to-r from-gamusa-red to-muga-gold mx-auto"></div>
          </div>

          {/* Main Content */}
          <div className="space-y-5 sm:space-y-6 text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed px-2 sm:px-4">
            <p style={{ fontFamily: 'Georgia, serif' }} className="text-justify">
              অসমীয়া জাতিৰ স্বাভিমান আৰু চহকী কৃষ্টি-সংস্কৃতি নৱপ্ৰজন্মৰ মাজত বিশুদ্ধ ৰূপত জীয়াই ৰখাৰ মানসেৰে,
              <span className="font-bold text-gamusa-deep"> বীৰ লাচিত সেনা, অসম (লাকুৱা আঞ্চলিক সমিতি)</span> আৰু
              <span className="font-bold text-gamusa-deep"> লাকুৱাবাসী ৰাইজৰ</span> যৌথ উদ্যোগত আয়োজন কৰা হৈছে
              <span className="font-bold text-gamusa-red"> "লাকুৱা কেন্দ্ৰীয় বিহু কৰ্মশালা ২০২৬"</span>।
            </p>

            <p style={{ fontFamily: 'Georgia, serif' }} className="text-justify">
              আজিৰ যান্ত্ৰিকতাৰ যুগত আমাৰ শিপাৰ পৰা যাতে আমি বিছিন্ন হৈ নাযাওঁ, তাৰ বাবে আমাৰ এই প্ৰচেষ্টা।
              আমি বিচাৰো আমাৰ নৱপ্ৰজন্মই কেৱল নাচ-গান কৰাই নহয়, বৰঞ্চ বিহুৰ প্ৰকৃত তাল, লয় আৰু ভংগীমাৰ সৈতে একাত্ম হওক।
            </p>
          </div>

          {/* Location Card */}
          <div className="mt-10 sm:mt-12 bg-white rounded-2xl shadow-xl border border-gamusa-red/20 overflow-hidden">
            <div className="bg-gradient-to-r from-gamusa-red to-gamusa-deep p-4 sm:p-5">
              <div className="flex items-center justify-center gap-2 text-white">
                <MapPin className="h-5 w-5 sm:h-6 sm:w-6" />
                <span className="text-base sm:text-lg font-bold">স্থান</span>
              </div>
            </div>
            <div className="p-6 sm:p-8 text-center">
              <p
                className="text-xl sm:text-2xl md:text-3xl font-bold text-gamusa-deep"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                লাইলৌ বৰুৱা ক্ষেত্ৰ
              </p>
              <p
                className="text-base sm:text-lg md:text-xl text-gray-600 mt-3"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                (লাকুৱা চাৰিঙ্গীয়া কোঁৱৰ ৰাজহুৱা খেলপথাৰ)
              </p>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="mt-10 sm:mt-12 flex flex-wrap justify-center gap-6 sm:gap-8">
            {[
              { label: 'সাংস্কৃতিক ঐতিহ্য', sublabel: 'Cultural Heritage' },
              { label: 'পৰম্পৰাগত সংগীত', sublabel: 'Traditional Music' },
              { label: 'বিহু নৃত্য', sublabel: 'Bihu Dance' },
            ].map((item) => (
              <div
                key={item.label}
                className="text-center group hover:scale-110 transition-transform duration-300"
              >
                <div
                  className="text-sm sm:text-base text-gamusa-deep font-bold"
                  style={{ fontFamily: 'Georgia, serif' }}
                >
                  {item.label}
                </div>
                <div className="text-xs text-gray-500 mt-1">{item.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-muga-gold to-transparent"></div>
    </section>
  );
}
