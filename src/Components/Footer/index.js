import React from "react";
import "./styles.scss";

const Footer = () => {
  const revealEmail = (e) => {
    e.preventDefault(); // Prevent default link behavior
    const user = "wesgrubbs";
    const domain = ".com";
    const tld = "gmail";
    const email = `${user}@${tld}${domain}`;
    const subject = "Email from website";

    // Use window.location to open email client
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}`;
  };

  return (
    <footer className="Footer">
      <div className="footer-column">
        <ul className="social-media-list">
          <li>
            <a id="email-link" href="#" onClick={revealEmail}>
              <img src="images/email.svg" alt="Email" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/wesgrubbs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="images/github.svg" alt="GitHub" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/wesgrubbs/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="images/linkedin.svg" alt="LinkedIn" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/wesgrubbs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="images/instagram.svg" alt="Instagram" />
            </a>
          </li>
          <li>
            <a
              href="https://www.threads.net/@wesgrubbs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="images/threads.svg" alt="Threads" />
            </a>
          </li>
          <li>
            <a
              href="https://bsky.app/profile/wesgrubbs.bsky.social"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="images/bluesky.svg" alt="Bluesky" />
            </a>
          </li>
        </ul>
        <ul className="footer-links">
          <li>
            <a
              href="https://pitchinteractive.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pitch Interactive
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/pitch_inc/"
              target="_blank"
              rel="noopener noreferrer"
            >
              @pitch_inc
            </a>
          </li>
        </ul>
        <ul className="footer-links">
          <li>
            <a
              href="https://www.alpine-mode.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Alpine Mode
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/alpine.mode"
              target="_blank"
              rel="noopener noreferrer"
            >
              @alpine.mode
            </a>
          </li>
        </ul>
        <ul className="footer-links">
          <li>
            <a
              href="https://www.instagram.com/gray.pattern/"
              target="_blank"
              rel="noopener noreferrer"
            >
              @gray.pattern
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
