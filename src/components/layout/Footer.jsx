import { useState, useEffect } from "react";

const ProtectedEmail = () => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    // Assemble email parts
    const username = ["w", "e", "s"].join("");
    const domain = [
      "p",
      "i",
      "t",
      "c",
      "h",
      "i",
      "n",
      "t",
      "e",
      "r",
      "a",
      "c",
      "t",
      "i",
      "v",
      "e",
    ].join("");
    const tld = ["c", "o", "m"].join("");
    setEmail(`${username}@${domain}.${tld}`);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    window.location.href = `mailto:${email}`;
  };

  return (
    <span
      onClick={handleClick}
      className="font-meta-sans text-grey-70 hover:text-white transition-colors duration-300 cursor-pointer"
      aria-label="Contact email"
    >
      {email || "Contact me"}
    </span>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { label: "LinkedIn", href: "https://linkedin.com/in/wesleygrubbs" },
    { label: "GitHub", href: "https://github.com/wesgrubbs" },
    {
      label: "BlueSky",
      href: "https://bsky.app/profile/wesgrubbs.bsky.social",
    },
  ];

  return (
    <footer className="bg-primary-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="font-meta-serif text-xl mb-4">Contact</h3>
            <ProtectedEmail />
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
