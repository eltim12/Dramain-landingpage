// src/components/Footer.jsx (or .tsx)
import { Link } from '@heroui/link'
// Import social icons (example using react-icons)
import FaTiktok from '@/assets/footer-tiktok.svg'
import FaYoutube from '@/assets/footer-youtube.svg'
import FaInstagram from '@/assets/footer-instagram.svg'
import FaFacebook from '@/assets/footer-facebook.svg'
import CompanyLogo from "@/assets/nav-logo.svg";
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear(); // Get current year dynamically

  // --- Data for Links (makes it easier to manage) ---
  const socialLinks = [
    { href: 'https://www.tiktok.com/@dramein.id', label: 'TikTok', icon: FaTiktok },
    { href: 'https://www.youtube.com/channel/UCgdFCS9KWDgRFPTDQvAaO7g', label: 'YouTube', icon: FaYoutube },
    { href: 'https://www.instagram.com/dramein.id/', label: 'Instagram', icon: FaInstagram },
    { href: 'https://www.facebook.com/profile.php?id=61577282187475', label: 'Facebook', icon: FaFacebook },
  ];

  const footerLinkSections = [
    {
      title: 'Links',
      links: [
        { href: '/about', label: 'About Us' },
        { href: '/features', label: 'Features' },
        { href: '/partners', label: 'Partners' },
        { href: '/download', label: 'Download' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { href: '/faq', label: 'FAQ' },
        { href: '/tnc', label: 'Terms & Conditions' },
        { href: '/legal', label: 'Legal & Compliance' },
      ],
    },
  ];

  // --- End Data ---


  return (
    // Use a dark background color matching your site (e.g., gray-900 or a specific hex)
    <footer className="bg-[#111111] text-gray-400">
      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* --- Top Section: Grid Layout --- */}
        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-12 lg:gap-[13rem] mb-8">

          {/* === Item 1: Brand Column === */}
          {/* Optional: Define a basis or max-width for this column on larger screens */}
          <div className="md:w-auto md:max-w-xs"> {/* Example width control */}
            <img
              src={CompanyLogo}
              alt="Dramein Logo"
              className="w-auto h-[40px]"
            />
            <p className="text-sm mb-4 mt-2">
              Every second holds a Universe.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {/* Using react-icons components directly */}
                  <img
                    src={social.icon}
                    alt="Social Icon"
                    className="w-auto h-[40px]"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* === Item 2: Wrapper for Links/Platform/Contact Columns === */}
          {/* This div will contain the remaining 3 columns */}
          {/* flex-grow allows it to take available space if needed */}
          <div className="flex-grow">
            {/* Inner Grid for the 3 columns */}
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">

              {/* Col 2 & 3: Links Sections */}
              {footerLinkSections.map((section, index) => (
                <div key={index} className="sm:col-span-1">
                  <h3 className="mb-3 text-base font-semibold tracking-wider text-white uppercase">
                    {t(`footer.sections.${section.title}`)}
                  </h3>
                  <ul className="space-y-2">
                    {section.links.map((link, idx) => (
                      <li key={idx}>
                        <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                          {t(`footer.links.${link.label}`)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Col 4: Contact Info */}
              <div className="sm:col-span-1">
                <h3 className="mb-3 text-base font-semibold tracking-wider text-white uppercase">
                  Socials
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <span className="font-medium text-gray-200">Email:</span>{' '}
                    <a href="mailto:hello@dramein.com" className="hover:text-white transition-colors duration-200">
                      hello@dramein.com
                    </a>
                  </li>
                  <li>
                    <span className="font-medium text-gray-200">Call:</span>{' '}
                    <a href="tel:+622019863801" className="hover:text-white transition-colors duration-200">
                      +62 (201) 986-3801
                    </a>
                  </li>
                </ul>
              </div>

            </div> {/* End Inner Grid */}
          </div> {/* === End Wrapper for columns 2, 3, 4 === */}

        </div> {/* --- End Top Section Flex Container --- */}

        {/* --- Divider --- */}
        <hr className="my-8 md:my-10 border-gray-700" />

        {/* --- Bottom Section: Copyright & Legal Links --- */}
        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          {/* Copyright */}
          <p className="text-sm text-gray-500">
            &copy; {currentYear} Dramein. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
};
