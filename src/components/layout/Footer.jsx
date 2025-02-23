const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { label: "LinkedIn", href: "https://linkedin.com/in/wesleygrubbs" },
    { label: "GitHub", href: "https://github.com/wesgrubbs" },
    { label: "Twitter", href: "https://twitter.com/wesleygrubbs" },
  ];

  return (
    <footer className="bg-primary-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="font-meta-serif text-xl mb-4">Contact</h3>
            <a
              href="mailto:wesley@pitchinteractive.com"
              className="font-meta-sans text-grey-70 hover:text-white transition-colors duration-300"
            >
              wesley@pitchinteractive.com
            </a>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-meta-serif text-xl mb-4">Connect</h3>
            <div className="flex flex-col space-y-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-meta-sans text-grey-70 hover:text-white transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Location */}
          <div>
            <h3 className="font-meta-serif text-xl mb-4">Location</h3>
            <p className="font-meta-sans text-grey-70">
              Oakland, CA 94601
              <br />
              United States
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-grey-100">
          <p className="font-meta-sans text-grey-70 text-sm">
            © {currentYear} Wesley Grubbs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
