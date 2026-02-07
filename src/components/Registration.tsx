import { UserPlus, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';

export default function Registration() {
  // Google Form URL - opens in new tab when button is clicked
  const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSf3kBjLJHJ7iIsu96zPmuBAikvdV4K5VRnQnbitzc5oTfOzyQ/viewform';

  const handleRegisterClick = () => {
    window.open(googleFormUrl, '_blank');
  };

  return (
    <section id="register" className="py-12 md:py-16 lg:py-24 bg-gradient-to-b from-muga-light/30 to-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 bg-gamusa-red/10 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-4 md:mb-6">
            <UserPlus className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-gamusa-red" />
            <span className="text-gamusa-deep text-xs sm:text-sm font-semibold">Limited Seats Available</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4 px-2">
            Register Today
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Click the button below to fill out the registration form for Bihu Dance Workshop 2026
          </p>
        </div>

        {/* Registration CTA */}
        <div className="max-w-2xl mx-auto px-2">
          <div className="bg-gradient-to-br from-gamusa-red via-gamusa-deep to-muga-gold p-1 sm:p-1.5 md:p-2 rounded-2xl shadow-2xl text-center overflow-hidden">
            <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8">
              <UserPlus className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-gamusa-red mx-auto mb-3 md:mb-4" />
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gamusa-deep mb-2 md:mb-3 px-2">
                Ready to Join?
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 md:mb-6 px-2">
                Fill out our registration form to secure your spot in the workshop
              </p>
              <Button
                onClick={handleRegisterClick}
                className="w-full sm:w-auto bg-gradient-to-r from-gamusa-red to-gamusa-deep hover:from-gamusa-deep hover:to-gamusa-red text-white font-bold text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <span className="flex items-center justify-center gap-2">
                  <span className="whitespace-nowrap">Open Registration Form</span>
                  <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                </span>
              </Button>
              <p className="text-xs sm:text-sm text-gray-500 mt-3 md:mt-4">
                The form will open in a new tab
              </p>
            </div>
          </div>
        </div>

        {/* Registration Guidelines */}
        <div className="mt-8 md:mt-12 max-w-2xl mx-auto px-2">
          <div className="bg-gradient-to-r from-gamusa-red to-muga-gold p-1 rounded-xl overflow-hidden">
            <div className="bg-white rounded-lg p-4 sm:p-5 md:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-gamusa-deep mb-3 text-center">
                Registration Guidelines
              </h3>
              <ul className="space-y-2 text-sm sm:text-base text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-gamusa-red mt-1 font-bold flex-shrink-0">→</span>
                  <span>Registration closes on <strong>April 10, 2026</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gamusa-red mt-1 font-bold flex-shrink-0">→</span>
                  <span>Age limit: <strong>12-35 years</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gamusa-red mt-1 font-bold flex-shrink-0">→</span>
                  <span>No prior dance experience required</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gamusa-red mt-1 font-bold flex-shrink-0">→</span>
                  <span>Payment can be made online or at the venue</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
