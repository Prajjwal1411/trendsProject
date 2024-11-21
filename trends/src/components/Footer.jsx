import React from "react";
import logo from "../media/logo.svg";
import linkedinlogo from "../media/1d6993a7-6f3f-4014-967f-2e2d9db59aac.svg";
import fblogo from "../media/283ec92f-985d-41c3-86eb-00598dd41ba9.svg";
import iglogo from "../media/40127163-06d1-4263-965b-e9e35a073f31.svg";
import tiktoklogo from "../media/cf72513a-1fe8-4d47-8891-3adfd8dd8093.svg";
import xlogo from "../media/dcc5f3c5-b1cf-401b-81f4-d372744cd787.svg";


const Footer = () => {
  return (
    <div className="footer">
      {/* Company Logo */}
      <div className="footer-logo">
        <img src={logo} alt="Company Logo" />
      </div>

      {/* Grid and Emails Container */}
      <div className="footer-content">
        {/* Footer Grid */}
        <div className="footer-grid">
        <div className="footer-column">
            <h4 className="footer-header">Services</h4>
            <a href="/" className="footer-item">Products</a>
            <a href="/" className="footer-item">For Business</a>
            <a href="/" className="footer-item">Store</a>
          </div>
          <div className="footer-column">
            <h4 className="footer-header">Support</h4>
            <a href="/" className="footer-item">Affiliate Program</a>
            <a href="/" className="footer-item">Careers</a>
            <a href="/" className="footer-item">Blog</a>
          </div>
          <div className="footer-column">
            <h4 className="footer-header">Company</h4>
            <a href="/" className="footer-item">About Us</a>
            <a href="/" className="footer-item">Contact Us</a>
            <a href="/" className="footer-item">Brand Assets</a>
          </div>
        </div>

        {/* Contact Emails */}
        <div className="footer-emails">
          <a href="mailto:press@betterme.world" className="footer-email">
            press@betterme.world
          </a>
          <a
            href="mailto:legal.support@betterme.world"
            className="footer-email"
          >
            legal.support@betterme.world
          </a>
          <a href="mailto:hiring@betterme.world" className="footer-email">
            hiring@betterme.world
          </a>

          {/* Social Media Icons */}
          <div className="footer-social-media">
            <a
              href="https://www.instagram.com/betterme"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={iglogo}
                alt="Instagram"
                className="social-icon"
              />
            </a>
            <a
              href="https://www.tiktok.com/@betterme.health.coaching"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={tiktoklogo}
                alt="Tiktok"
                className="social-icon"
              />
            </a>
            <a
              href="https://www.facebook.com/betterme.health.coaching"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={fblogo}
                alt="Facebook"
                className="social-icon"
              />
            </a>
            <a
              href="https://twitter.com/betterme"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={xlogo}
                alt="X (Twitter)"
                className="social-icon"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/betterme-apps"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={linkedinlogo}
                alt="LinkedIn"
                className="social-icon"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Horizontal Line */}
      <hr className="footer-line" />

      <div className="footer-links">
        <a href="https://betterme.world/articles/policy-for-evidence-based-guides" target="_blank" rel="noopener noreferrer" className="footer-link">Policy for evidence-based guides</a>
        <a href="https://betterme.world/articles/team-page" target="_blank" rel="noopener noreferrer" className="footer-link">Editorial Team</a>
        <a href="https://betterme.world/articles/process" target="_blank" rel="noopener noreferrer" className="footer-link">Editorial Standards</a>
        <a href="https://betterme.world/privacy-policy" target="_blank" rel="noopener noreferrer" className="footer-link">Privacy policy</a>
        <a href="https://betterme.world/terms" target="_blank" rel="noopener noreferrer" className="footer-link">Terms of Service</a>
        <a href="https://betterme.world/about#" target="_blank" rel="noopener noreferrer" className="footer-link">e-Privacy Settings</a>
      </div>

      {/* Copyright */}
      <div className="footer-copyright">
        <p>&copy; {new Date().getFullYear()} BetterMe. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
