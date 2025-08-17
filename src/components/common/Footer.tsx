import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer-container" role="contentinfo" aria-label="Site footer">
      {/* Main Container */}
      <div className="footer-main-section">
        {/* Left Sub Container - Company Info */}
        <section className="footer-left-section" aria-labelledby="company-info">
          <h2 id="company-info" className="sr-only">Company Information</h2>

          {/* Logo and Company Info Container */}
          <div className="logo-container">
            {/* Logo */}
            <div className="logo" role="img" aria-label="Little Learners Logo">
              {/* SVG Logo - Exact SVG provided */}
              <svg className="logo-svg" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.6663 19.9999L19.9997 11.6666L28.333 19.9999L19.9997 28.3333L11.6663 19.9999Z" fill="#1A1A1A"/>
                <path d="M36.6663 9.99992V19.9999L19.9997 3.33325H29.9997L36.6663 9.99992Z" fill="#1A1A1A"/>
                <path d="M36.6663 29.9999V19.9999L19.9997 36.6666H29.9997L36.6663 29.9999Z" fill="#1A1A1A"/>
                <path d="M3.33301 29.9999V19.9999L19.9997 36.6666H9.99967L3.33301 29.9999Z" fill="#1A1A1A"/>
                <path d="M3.33301 9.99992V19.9999L19.9997 3.33325H9.99967L3.33301 9.99992Z" fill="#1A1A1A"/>
              </svg>
              {/* Text Button - Using your exact CSS specifications */}
              <button className="logo-text-button" type="button" aria-label="Little Learners">
                Little Learners
              </button>
            </div>

            {/* Paragraph */}
            <p className="company-description text-light">
              We believe in the power of play to foster creativity, problem-solving skills, and imagination.
            </p>
          </div>

          {/* Contact Information */}
          <address className="contact-address">
            <h3 className="sr-only">Contact Information</h3>

            {/* Email Button */}
            <div className="contact-button">
              <div className="icon-button" aria-hidden="true">
                <svg className="contact-icon" fill="none" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" stroke="#262626" strokeWidth="1.5"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" stroke="#262626" strokeWidth="1.5"/>
                </svg>
              </div>
              <a href="mailto:hello@littlelearners.com" className="contact-link text-primary">
                hello@littlelearners.com
              </a>
            </div>

            {/* Phone Button */}
            <div className="contact-button">
              <div className="icon-button" aria-hidden="true">
                <svg className="contact-icon" fill="none" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" stroke="#262626" strokeWidth="1.5"/>
                </svg>
              </div>
              <a href="tel:+9191813232309" className="contact-link text-primary">
                +91 91813 23 2309
              </a>
            </div>

            {/* Location Button */}
            <div className="contact-button">
              <div className="icon-button" aria-hidden="true">
                <svg className="contact-icon" fill="none" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" stroke="#262626" strokeWidth="1.5"/>
                </svg>
              </div>
              <span className="contact-link text-primary">
                Somewhere in the World
              </span>
            </div>
          </address>
        </section>

        {/* Right Sub Container - Navigation Links */}
        <nav className="footer-right-section" aria-label="Footer navigation">
          {/* Home Links Container */}
          <section className="nav-section">
            <h3 className="nav-heading heading-primary">Home</h3>
            <ul className="nav-list">
              <li><a href="#" className="footer-link">Features</a></li>
              <li><a href="#" className="footer-link">Our Testimonials</a></li>
              <li><a href="#" className="footer-link">FAQ</a></li>
            </ul>
          </section>

          {/* About Us Links Container */}
          <section className="nav-section">
            <h3 className="nav-heading heading-primary">About Us</h3>
            <ul className="nav-list">
              <li><a href="#" className="footer-link">Our Mission</a></li>
              <li><a href="#" className="footer-link">Our Vision</a></li>
              <li><a href="#" className="footer-link">Awards and Recognitions</a></li>
              <li><a href="#" className="footer-link">History</a></li>
              <li><a href="#" className="footer-link">Teachers</a></li>
            </ul>
          </section>

          {/* Academics Links Container */}
          <section className="nav-section">
            <h3 className="nav-heading heading-primary">Academics</h3>
            <ul className="nav-list">
              <li><a href="#" className="footer-link">Special Features</a></li>
              <li><a href="#" className="footer-link">Gallery</a></li>
            </ul>
          </section>

          {/* Contact Us Links Container */}
          <section className="nav-section">
            <h3 className="nav-heading heading-primary">Contact Us</h3>
            <ul className="nav-list">
              <li><a href="#" className="footer-link">Information</a></li>
              <li><a href="#" className="footer-link">Map & Direction</a></li>
            </ul>
          </section>
        </nav>
      </div>

      {/* Bottom Container */}
      <div className="footer-bottom-section">
        {/* Separator Line */}
        <hr className="footer-separator" aria-hidden="true" />

        {/* Bottom Sub Container */}
        <div className="bottom-sub-container">
          {/* Legal Links */}
          <nav className="footer-legal-container" aria-label="Legal links">
            <ul className="legal-links-list">
              <li><a href="#" className="footer-legal-link">Terms of Service</a></li>
              <li><a href="#" className="footer-legal-link">Privacy Policy</a></li>
              <li><a href="#" className="footer-legal-link">Cookie Policy</a></li>
            </ul>
          </nav>

          {/* Social Media Buttons */}
          <nav className="social-nav" aria-label="Social media links">
            <a href="#" className="footer-social-button" aria-label="Follow us on Facebook">
              <svg className="social-icon" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="#262626"/>
              </svg>
            </a>
            <a href="#" className="footer-social-button" aria-label="Follow us on Twitter">
              <svg className="social-icon" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" fill="#262626"/>
              </svg>
            </a>
            <a href="#" className="footer-social-button" aria-label="Follow us on LinkedIn">
              <svg className="social-icon" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="#262626"/>
              </svg>
            </a>
          </nav>
        </div>

        {/* Separator Line */}
        <hr className="footer-separator" aria-hidden="true" />

        {/* Copyright Text */}
        <div className="copyright-container text-muted text-center">
          <small>© 2024 Little Learners. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
