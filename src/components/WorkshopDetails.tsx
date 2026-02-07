import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Calendar, MapPin, IndianRupee, Phone } from 'lucide-react';

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
    <section id="details" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Workshop Details
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about joining our Bihu Dance Workshop
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {details.map((detail) => {
            const Icon = detail.icon;
            return (
              <Card
                key={detail.title}
                className="border-2 border-gray-100 hover:border-gamusa-red/30 transition-all duration-300 hover:shadow-xl group"
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 h-14 w-14 rounded-full bg-gradient-to-br from-gamusa-red to-muga-gold flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{detail.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="font-bold text-lg text-gamusa-deep mb-1">
                    {detail.content}
                  </p>
                  <p className="text-sm text-gray-600">
                    {detail.subContent}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-12 max-w-3xl mx-auto bg-muga-light/50 border-2 border-muga-gold/30 rounded-xl p-6">
          <h3 className="text-xl font-bold text-gamusa-deep mb-3 text-center">
            What's Included
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
            {[
              '5 days of intensive training',
              'Expert Bihu dancers as instructors',
              'Traditional costume guidance',
              'Performance opportunities',
              'Certificate of completion',
              'Refreshments & lunch included',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-gamusa-red mt-1">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
