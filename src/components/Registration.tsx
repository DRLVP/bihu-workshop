import { UserPlus, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import gamosa2 from '../assets/gamosa-2.png';

export default function Registration() {
  // Google Form URL - opens in new tab when button is clicked
  const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSeI9xfbUFfkyB_C-ByfvLLXAQIcoYyjEPoz_yLg8gKFubLlrg/viewform';

  const handleRegisterClick = () => {
    window.open(googleFormUrl, '_blank');
  };

  return (
    <section id="register" className="py-12 md:py-16 lg:py-24 bg-gradient-to-b from-muga-light/30 to-white overflow-hidden relative">
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
        {/* Section Header with Gamosa Frame */}
        <div className="text-center mb-8 md:mb-12 relative">
          <div className="relative inline-block">
            <div className="absolute inset-0 opacity-15 blur-sm">
              <img
                src={gamosa2}
                alt="Gamosa decoration"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>

        {/* Registration CTA */}
        <div className="max-w-2xl mx-auto px-2">
          <div className="bg-gradient-to-br from-gamusa-red via-gamusa-deep to-muga-gold p-1 sm:p-1.5 md:p-2 rounded-2xl shadow-2xl text-center overflow-hidden">
            <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8">
              <UserPlus className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-gamusa-red mx-auto mb-3 md:mb-4" />
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gamusa-deep mb-2 px-2" style={{ fontFamily: 'Georgia, serif' }}>
                যোগদান কৰিবলৈ সাজু নে?
              </h3>
              <p className="text-base sm:text-lg text-gamusa-red/80 font-semibold mb-1">
                (Ready to Join?)
              </p>
              <p className="text-sm sm:text-base text-gray-700 mb-4 md:mb-6 px-2 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                কৰ্মশালাত নিজৰ স্থান সুৰক্ষিত কৰিবলৈ আমাৰ পঞ্জীয়ন ফৰ্ম পূৰণ কৰক
                <br />
                <span className="text-xs sm:text-sm text-gray-600 italic">(Fill out our registration form to secure your spot)</span>
              </p>
              <Button
                onClick={handleRegisterClick}
                className="w-full sm:w-auto bg-gradient-to-r from-gamusa-red to-gamusa-deep hover:from-gamusa-deep hover:to-gamusa-red text-white font-bold text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <span className="flex items-center justify-center gap-2">
                  <span className="whitespace-nowrap">পঞ্জীয়ন ফৰ্ম খোলক</span>
                  <span className="text-xs opacity-90">(Open Form)</span>
                  <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                </span>
              </Button>
              <p className="text-xs sm:text-sm text-gray-500 mt-3 md:mt-4">
                ফৰ্মখন নতুন টেবত খোলা হ'ব (The form will open in a new tab)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
