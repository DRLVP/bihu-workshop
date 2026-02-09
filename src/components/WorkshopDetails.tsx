import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Calendar, MapPin, IndianRupee, Phone } from 'lucide-react';
import gamosa1 from '../assets/gamosa-1.png';

export default function WorkshopDetails() {
  const details = [
    {
      icon: Calendar,
      title: 'Date & Time',
      content: 'April 15-19, 2026',
      subContent: '10:00 AM - 4:00 PM daily',
    },
    {
      icon: MapPin,
      title: 'Venue',
      content: 'Lakwa Community Hall',
      subContent: 'Lakwa, Charaideo District, Assam',
    },
    {
      icon: IndianRupee,
      title: 'Registration Fee',
      content: '₹500 only',
      subContent: 'Includes materials & certificate',
    },
    {
      icon: Phone,
      title: 'Contact Info',
      content: '+91 0101010101',
      subContent: 'bihu.workshop@example.com',
    },
  ];

  return (
    <section id="details" className="py-12 md:py-16 lg:py-24 bg-white overflow-hidden relative">
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
        {/* Section Header with Gamosa Frame */}
        <div className="text-center mb-8 md:mb-12 relative">
          <div className="relative inline-block">
            <div className="absolute inset-0 opacity-15 blur-sm">
              <img
                src={gamosa1}
                alt="Gamosa decoration"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>

            <div className="relative bg-white/90 backdrop-blur-sm border-4 border-gamusa-red/20 rounded-2xl px-6 sm:px-8 md:px-12 py-6 sm:py-8 shadow-2xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gamusa-deep mb-2">
                Workshop Details
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                Everything you need to know about joining our Bihu Dance Workshop
              </p>
              <div className="mt-4 w-24 h-1.5 bg-gradient-to-r from-gamusa-red via-muga-gold to-gamusa-deep mx-auto rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 max-w-7xl mx-auto">
          {details.map((detail) => {
            const Icon = detail.icon;
            return (
              <Card
                key={detail.title}
                className="border-2 border-gray-100 hover:border-gamusa-red/30 transition-all duration-300 hover:shadow-xl group"
              >
                <CardHeader className="text-center pb-3 md:pb-4">
                  <div className="mx-auto mb-3 md:mb-4 h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-gradient-to-br from-gamusa-red to-muga-gold flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl text-gray-900">{detail.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="font-bold text-base sm:text-lg text-gamusa-deep mb-1">
                    {detail.content}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600">
                    {detail.subContent}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-8 md:mt-12 max-w-3xl mx-auto bg-muga-light/50 border-2 border-muga-gold/30 rounded-xl p-4 sm:p-5 md:p-6">
          <h3 className="text-lg sm:text-xl font-bold text-gamusa-deep mb-3 text-center">
            What's Included
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-3 text-sm sm:text-base text-gray-700">
            {[
              '5 days of intensive training',
              'Expert Bihu dancers as instructors',
              'Traditional costume guidance',
              'Performance opportunities',
              'Certificate of completion',
              'Refreshments & lunch included',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-gamusa-red mt-1 flex-shrink-0">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
