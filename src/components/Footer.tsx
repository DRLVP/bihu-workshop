import { Facebook, Instagram, Youtube, MapPin, Phone } from 'lucide-react';
import ongcLogo from '../assets/ONGC.png';
import digiHubLogo from '../assets/DiGI-Hub.jpeg';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Youtube, label: 'YouTube', href: '#' },
  ];

  const quickLinks = [
    { assamese: 'আমাৰ বিষয়ে', english: 'About Us', href: '#about' },
    { assamese: 'পাঠ্যক্ৰম', english: 'Curriculum', href: '#curriculum' },
    { assamese: 'ফটো গেলাৰী', english: 'Gallery', href: '#gallery' },
    { assamese: 'নিয়মাৱলী', english: 'Rules', href: '#rules' },
    { assamese: 'পঞ্জীয়ন', english: 'Register', href: '#register' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gamusa-deep via-gamusa-red to-gamusa-deep text-white overflow-hidden relative">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-muga-gold via-muga-cream to-muga-gold"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16">
        {/* Powered By Section */}
        <div className="flex flex-col items-center justify-center mb-10 sm:mb-12 border-b border-white/10 pb-8 sm:pb-10">
          <p className="text-sm sm:text-base text-muga-cream font-medium mb-4 tracking-widest uppercase" style={{ fontFamily: 'Georgia, serif' }}>
            Powered By
          </p>
          <div className="flex items-center gap-6 sm:gap-10 py-4 px-6 sm:px-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-xl">
            <img 
              src={digiHubLogo} 
              alt="DiGI Hub" 
              className="h-10 sm:h-14 md:h-16 object-contain bg-white rounded-lg p-1.5 sm:p-2" 
            />
            <div className="w-px h-10 sm:h-14 bg-white/20"></div>
            <img 
              src={ongcLogo} 
              alt="ONGC" 
              className="h-10 sm:h-14 md:h-16 object-contain bg-white rounded-lg p-1.5 sm:p-2" 
            />
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-8 sm:mb-10">

          {/* Organization Info */}
          <div className="text-center sm:text-left lg:col-span-2">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3" style={{ fontFamily: 'Georgia, serif' }}>
              বীৰ লাচিত সেনা অসম
            </h3>
            <p className="text-base sm:text-lg text-muga-cream/90 font-semibold mb-3">
              (Beer Lachit Sena Axom)
            </p>
            <p className="text-sm sm:text-base text-white/80 mb-2" style={{ fontFamily: 'Georgia, serif' }}>
              লাকুৱা আঞ্চলিক সমিতি
            </p>
            <p className="text-xs sm:text-sm text-white/70 italic mb-3">
              (Lakwa Anchalik Samiti)
            </p>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
              পৰম্পৰাগত কলা আৰু সমাজৰ জড়িততাৰ জৰিয়তে অসমীয়া সংস্কৃতি সংৰক্ষণ কৰা
              <br />
              <span className="text-white/60 italic text-xs">
                (Preserving Assamese culture through traditional art forms and community engagement)
              </span>
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              দ্ৰুত সংযোগ
            </h3>
            <p className="text-xs sm:text-sm text-muga-cream/80 mb-3">
              (Quick Links)
            </p>
            <ul className="space-y-2 sm:space-y-2.5">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-muga-beige transition-colors cursor-pointer group inline-block"
                  >
                    <span className="text-xs sm:text-sm font-medium" style={{ fontFamily: 'Georgia, serif' }}>
                      {link.assamese}
                    </span>
                    <span className="text-xs text-white/60 ml-1 group-hover:text-muga-beige/80">
                      ({link.english})
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              যোগাযোগ
            </h3>
            <p className="text-xs sm:text-sm text-muga-cream/80 mb-3">
              (Contact & Connect)
            </p>

            {/* Social Media */}
            <div className="flex gap-3 mb-4 justify-center sm:justify-start">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-white/10 hover:bg-muga-gold/30 border border-white/20 hover:border-muga-gold flex items-center justify-center transition-all hover:scale-110 cursor-pointer shadow-lg"
                  >
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                );
              })}
            </div>

            {/* Contact Details */}
            <div className="space-y-2 text-xs sm:text-sm text-white/80">
              <div className="flex items-start gap-2 justify-center sm:justify-start">
                <Phone className="h-4 w-4 flex-shrink-0 mt-0.5 text-muga-gold" />
                <div>
                  <p style={{ fontFamily: 'Georgia, serif' }}>ফোন: +910101010101</p>
                  <p className="text-xs text-white/60">(Phone)</p>
                </div>
              </div>
              <div className="flex items-start gap-2 justify-center sm:justify-start">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5 text-muga-gold" />
                <div>
                  <p style={{ fontFamily: 'Georgia, serif' }}>লাকুৱা, অসম</p>
                  <p className="text-xs text-white/60">(Lakwa, Assam)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs sm:text-sm">
            <p className="text-white/70 text-center md:text-left" style={{ fontFamily: 'Georgia, serif' }}>
              © {currentYear} বীৰ লাচিত সেনা অসম, লাকুৱা আঞ্চলিক সমিতি। সকলো অধিকাৰ সুৰক্ষিত।
              <br />
              <span className="text-xs text-white/60 italic">
                (© {currentYear} Beer Lachit Sena Axom, Lakwa Anchalik Samiti. All rights reserved.)
              </span>
            </p>
            <div className="text-center">
              <p className="text-muga-cream font-bold text-sm sm:text-base" style={{ fontFamily: 'Georgia, serif' }}>
                অসমীয়া ঐতিহ্যৰ উদযাপন 🎭
              </p>
              <p className="text-xs text-white/70 italic">
                (Celebrating Assamese Heritage)
              </p>
            </div>
          </div>
        </div>

        {/* Crafted with love message */}
        <div className="text-center mt-6 sm:mt-8 pt-4 border-t border-white/10">
          <p className="text-xs text-white/50" style={{ fontFamily: 'Georgia, serif' }}>
            প্ৰেমেৰে নিৰ্মিত • Made with ❤️ for Assamese Culture
          </p>
        </div>
      </div>
    </footer>
  );
}
