import { Link } from 'react-router-dom';
import Logo from '../assets/C.svg'; // ✅ path to your uploaded logo

const SocialIcon = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-accent transition-colors duration-300 transform hover:scale-110"
  >
    {children}
  </a>
);

const Footer = () => {
  return (
    <footer className="bg-background/80 backdrop-blur-md border-t border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Company Info - MODIFIED */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-1 mb-4">
              <img src={Logo} alt="Creozen Logo" className="h-8 w-auto" />
              <span className="text-2xl font-bold font-sans bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                reozen
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed font-sans">
              Zen-crafted intelligence, delivering innovative AI solutions with simplicity and precision.
            </p>
            <p className="text-gray-500 text-xs mt-4 font-sans">
              Creozen Ltd, 124 City Road, London EC1V 2NX.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase mb-4 font-sans">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About' },
                { to: '/services', label: 'Services & Products' },
                { to: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-gray-400 hover:text-accent hover:underline transition-all text-sm font-sans"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase mb-4 font-sans">
              Contact Info
            </h3>
            <ul className="space-y-2 text-sm font-sans">
              <li className="text-gray-400">
                Email:{' '}
                <a href="mailto:creozen@creozen.co.uk" className="hover:text-accent transition-colors">
                  creozen@creozen.co.uk
                </a>
              </li>
              <li className="text-gray-400">
                UK:{' '}
                <a href="tel:+44 7586 183428" className="hover:text-accent transition-colors">
                  +44 7586 183428
                </a>
              </li>
              <li className="text-gray-400">
                IN:{' '}
                <a href="tel:+916381738184" className="hover:text-accent transition-colors">
                  +91 63817 38184
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-500 md:order-1 font-sans">
            &copy; {new Date().getFullYear()} Creozen. All rights reserved.
          </p>
          <div className="flex space-x-6 md:order-2 mt-4 md:mt-0">
            <SocialIcon href="https://www.linkedin.com/company/creozen-ltd/">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                  clipRule="evenodd"
                />
              </svg>
            </SocialIcon>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
