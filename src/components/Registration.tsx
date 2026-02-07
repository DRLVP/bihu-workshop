import GoogleFormEmbed from './GoogleFormEmbed';
import { UserPlus } from 'lucide-react';

export default function Registration() {
  // Replace this URL with your actual Google Form URL
  const googleFormUrl = 'https://forms.gle/MEKEE6Un18YmV96j9';

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
            Fill out the form below to book your seat in the Bihu Dance Workshop 2026
          </p>
        </div>

        {/* Google Form Embed */}
        <GoogleFormEmbed formUrl={googleFormUrl} />

        {/* Additional Info */}
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
