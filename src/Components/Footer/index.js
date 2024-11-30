import React from "react";
//import "./styles.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-column">
        <h3>Contact Info</h3>
        <p>Wesley Grubbs</p>
        <p>Email: wesley@example.com</p>
        <p>Phone: (123) 456-7890</p>
      </div>
      <div className="footer-column">
        <h3>Follow Me</h3>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/wesleygrubbs"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/wesleygrubbs"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://bsky.app/profile/wesleygrubbs"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bluesky
            </a>
          </li>
          <li>
            <a
              href="https://www.threads.net/@wesleygrubbs"
              target="_blank"
              rel="noopener noreferrer"
            >
              Threads
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
