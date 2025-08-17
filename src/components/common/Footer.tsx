import React from "react";
import logo from "/images/Logo.png";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

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
              <img src={logo} alt="Little Learners Logo" className="logo-image" />
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
                <MdEmail className="contact-icon" />
              </div>
              <a href="mailto:hello@littlelearners.com" className="contact-link text-primary">
                hello@littlelearners.com
              </a>
            </div>

            {/* Phone Button */}
            <div className="contact-button">
              <div className="icon-button" aria-hidden="true">
                <MdPhone className="contact-icon" />
              </div>
              <a href="tel:+9191813232309" className="contact-link text-primary">
                +91 91813 23 2309
              </a>
            </div>

            {/* Location Button */}
            <div className="contact-button">
              <div className="icon-button" aria-hidden="true">
                <MdLocationOn className="contact-icon" />
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
              <FaFacebook className="social-icon" />
            </a>
            <a href="#" className="footer-social-button" aria-label="Follow us on Twitter">
              <FaTwitter className="social-icon" />
            </a>
            <a href="#" className="footer-social-button" aria-label="Follow us on LinkedIn">
              <FaLinkedin className="social-icon" />
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
