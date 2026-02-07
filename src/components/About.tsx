import { Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-12 md:py-16 lg:py-24 bg-gradient-to-b from-white to-muga-light/30 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Badge */}
          <div className="inline-flex items-center gap-2 bg-gamusa-red/10 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-4 sm:mb-6">
            <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-gamusa-red" />
            <span className="text-gamusa-deep text-xs sm:text-sm font-semibold">Our Mission</span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-2">
            About Beer Lachit Sena Axom
          </h2>

          {/* Description */}
          <div className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed px-2">
            <p>
              <span className="font-semibold text-gamusa-red">Beer Lachit Sena Axom, Lakwa Anchalik Samiti</span> is dedicated to preserving and promoting the rich cultural heritage of Assam. Our organization believes in empowering the youth through traditional art forms and cultural education.
            </p>
            <p>
              The <span className="font-semibold">Bihu Dance Workshop</span> is our flagship initiative to pass on the vibrant traditions of Assamese Bihu to the next generation. Through expert training and immersive sessions, we aim to keep our cultural identity alive and thriving.
            </p>
            <p className="text-muga-gold font-medium italic">
              "Culture is not just our past, it is our future. Let's dance to preserve our heritage."
            </p>
          </div>

          {/* Decorative Elements */}
          <div className="mt-8 sm:mt-10 md:mt-12 flex flex-wrap justify-center gap-6 sm:gap-8">
            {[
              { icon: '🎭', label: 'Cultural Heritage' },
              { icon: '🪘', label: 'Traditional Music' },
              { icon: '💃', label: 'Bihu Dance' },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="text-3xl sm:text-4xl mb-2">{item.icon}</div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
