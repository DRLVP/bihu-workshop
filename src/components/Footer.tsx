import { Facebook, Instagram, Youtube, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Youtube, label: 'YouTube', href: '#' },
    { icon: Mail, label: 'Email', href: 'mailto:bihu.workshop@example.com' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gamusa-deep to-gamusa-red text-white">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Organization Info */}
          <div>
            <h3 className="text-xl font-bold mb-3">Beer Lachit Sena Axom</h3>
            <p className="text-white/80 text-sm mb-2">Lakwa Anchalik Samiti</p>
            <p className="text-white/70 text-sm">
              Preserving Assamese culture through traditional art forms and community engagement.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-white/80 hover:text-muga-beige transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#details" className="text-white/80 hover:text-muga-beige transition-colors">
                  Workshop Details
                </a>
              </li>
              <li>
                <a href="#register" className="text-white/80 hover:text-muga-beige transition-colors">
                  Register Now
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Connect With Us</h3>
            <div className="flex gap-4 mb-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all hover:scale-110"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
            <p className="text-white/80 text-sm">
              Contact: +91 98765 43210
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70">
            <p>
              © {currentYear} Beer Lachit Sena Axom, Lakwa Anchalik Samiti. All rights reserved.
            </p>
            <p className="text-muga-beige font-medium">
              Celebrating Assamese Heritage 🎭
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
