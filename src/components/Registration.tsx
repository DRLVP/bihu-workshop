import { UserPlus, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';

export default function Registration() {
  // Google Form URL - opens in new tab when button is clicked
  const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSf3kBjLJHJ7iIsu96zPmuBAikvdV4K5VRnQnbitzc5oTfOzyQ/viewform';

  const handleRegisterClick = () => {
    window.open(googleFormUrl, '_blank');
  };

  return (
    <section id="register" className="py-16 md:py-24 bg-gradient-to-b from-muga-light/30 to-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gamusa-red/10 px-4 py-2 rounded-full mb-6">
            <UserPlus className="h-4 w-4 text-gamusa-red" />
            <span className="text-gamusa-deep text-sm font-semibold">Limited Seats Available</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Register Today
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Click the button below to fill out the registration form for Bihu Dance Workshop 2026
          </p>
        </div>

        {/* Registration CTA */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-gamusa-red via-gamusa-deep to-muga-gold p-8 rounded-2xl shadow-2xl text-center">
            <div className="bg-white/95 backdrop-blur-sm rounded-xl p-8">
              <UserPlus className="w-16 h-16 text-gamusa-red mx-auto mb-4" />
              <h3 className="text-2xl md:text-3xl font-bold text-gamusa-deep mb-3">
                Ready to Join?
              </h3>
              <p className="text-gray-600 mb-6">
                Fill out our registration form to secure your spot in the workshop
              </p>
              <Button
                onClick={handleRegisterClick}
                size="xl"
                className="bg-gradient-to-r from-gamusa-red to-gamusa-deep hover:from-gamusa-deep hover:to-gamusa-red text-white font-bold text-lg px-10 py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Open Registration Form
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
              <p className="text-sm text-gray-500 mt-4">
                The form will open in a new tab
              </p>
            </div>
          </div>
        </div>

        {/* Registration Guidelines */}
        <div className="mt-12 max-w-2xl mx-auto">
          <div className="bg-gradient-to-r from-gamusa-red to-muga-gold p-1 rounded-xl">
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-bold text-gamusa-deep mb-3 text-center">
                Registration Guidelines
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-gamusa-red mt-1 font-bold">→</span>
                  <span>Registration closes on <strong>April 10, 2026</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gamusa-red mt-1 font-bold">→</span>
                  <span>Age limit: <strong>12-35 years</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gamusa-red mt-1 font-bold">→</span>
                  <span>No prior dance experience required</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gamusa-red mt-1 font-bold">→</span>
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
