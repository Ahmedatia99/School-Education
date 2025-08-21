import React from "react";
import logo from "/images/Logo.png";
import {MdEmail, MdPhone, MdLocationOn} from "react-icons/md";
import {FaFacebook, FaTwitter, FaLinkedin} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
      <footer className="footer-container" role="contentinfo" aria-label="Site footer">
        {/* Top: Brand + Nav */}
        <div className="footer-top">
          {/* Brand/Company info */}
          <section className="footer-brand" aria-labelledby="company-info">
            <h2 id="company-info" className="footer-sr">Company Information</h2>

            <img src={logo} alt="Little Learners Logo" className="footer-logo" />
            <p className="footer-desc">
              We believe in the power of play to foster creativity, problem-solving skills,
              and imagination.
            </p>

            <address className="footer-address">
              <h3 className="footer-sr">Contact Information</h3>

              <div className="footer-contact-row">
                <div className="footer-icon-box">
                  <MdEmail className="footer-contact-icon" />
                </div>
                <a href="mailto:hello@littlelearners.com" className="footer-contact-link">
                  hello@littlelearners.com
                </a>
              </div>

              <div className="footer-contact-row">
                <div className="footer-icon-box">
                  <MdPhone className="footer-contact-icon" />
                </div>
                <a href="tel:+9191813232309" className="footer-contact-link">
                  +91 91813 23 2309
                </a>
              </div>

              <div className="footer-contact-row">
                <div className="footer-icon-box">
                  <MdLocationOn className="footer-contact-icon" />
                </div>
                <span className="footer-contact-text">Somewhere in the World</span>
              </div>
            </address>
          </section>

          {/* Navigation */}
          <nav className="footer-nav" aria-label="Footer navigation">
            <section>
              <h3 className="footer-heading">Home</h3>
              <ul className="footer-nav-list">
                <li><a className="footer-nav-item-link" href="#">Features</a></li>
                <li><a className="footer-nav-item-link" href="#">Our Testimonials</a></li>
                <li><a className="footer-nav-item-link" href="#">FAQ</a></li>
              </ul>
            </section>

            <section>
              <h3 className="footer-heading">About Us</h3>
              <ul className="footer-nav-list">
                <li><a className="footer-nav-item-link" href="#">Our Mission</a></li>
                <li><a className="footer-nav-item-link" href="#">Our Vision</a></li>
                <li><a className="footer-nav-item-link" href="#">Awards and Recognitions</a></li>
                <li><a className="footer-nav-item-link" href="#">History</a></li>
                <li><a className="footer-nav-item-link" href="#">Teachers</a></li>
              </ul>
            </section>

            <section>
              <h3 className="footer-heading">Academics</h3>
              <ul className="footer-nav-list">
                <li><a className="footer-nav-item-link" href="#">Special Features</a></li>
                <li><a className="footer-nav-item-link" href="#">Gallery</a></li>
              </ul>
            </section>

            <section>
              <h3 className="footer-heading">Contact Us</h3>
              <ul className="footer-nav-list">
                <li><a className="footer-nav-item-link" href="#">Information</a></li>
                <li><a className="footer-nav-item-link" href="#">Map &amp; Direction</a></li>
              </ul>
            </section>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <nav aria-label="Legal links">
            <ul className="footer-legal-list">
              <li className="text-center"><a className="footer-nav-item-link" href="#">Terms of Service</a></li>
              <li className="text-center footer-legal-middle"><a className="footer-nav-item-link" href="#">Privacy Policy</a></li>
              <li className="text-center"><a className="footer-nav-item-link" href="#">Cookie Policy</a></li>
            </ul>
          </nav>

          <nav className="footer-social-list" aria-label="Social media links">
            <a href="#" aria-label="Follow us on Facebook" className="footer-social-btn">
              <FaFacebook className="footer-social-icon" />
            </a>
            <a href="#" aria-label="Follow us on Twitter" className="footer-social-btn">
              <FaTwitter className="footer-social-icon" />
            </a>
            <a href="#" aria-label="Follow us on LinkedIn" className="footer-social-btn">
              <FaLinkedin className="footer-social-icon" />
            </a>
          </nav>
        </div>

        <div className="footer-copy">
          <small>© 2024 Little Learners. All rights reserved.</small>
        </div>
      </footer>
  );
};

export default Footer;