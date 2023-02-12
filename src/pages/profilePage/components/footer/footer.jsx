import React from "react";
import "./footer.scss";
import { logo } from "../../imgs/";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
  
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__box">
          <div className="footer__logos">
            <Link to="/">
              <div className="footer__logo-box">
                <img src={logo} alt="footer logo" />
              </div>
            </Link>
            <p className="footer__title">© 2023 GitHub, Inc.</p>
          </div>
          <ul className="footer__link-box">
            <li>
              <a
                target="_blank"
                className="footer__links"
                href="https://docs.github.com/en/site-policy/github-terms/github-terms-of-service"
              >
                Terms
              </a>
            </li>
            <li>
              <a
                target="_blank"
                className="footer__links"
                href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement"
              >
                Privacy
              </a>
            </li>
            <li>
              <a
                target="_blank"
                className="footer__links"
                href="https://github.com/security"
              >
                Security
              </a>
            </li>
            <li>
              <a
                target="_blank"
                className="footer__links"
                href="https://www.githubstatus.com/"
              >
                Status
              </a>
            </li>
            <li>
              <a
                target="_blank"
                className="footer__links"
                href="https://docs.github.com/en"
              >
                Docs
              </a>
            </li>
            <li>
              <a
                target="_blank"
                className="footer__links"
                href="https://support.github.com/?tags=dotcom-footer"
              >
                Contact GitHub
              </a>
            </li>
            <li>
              <a
                target="_blank"
                className="footer__links"
                href="https://github.com/pricing"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                target="_blank"
                className="footer__links"
                href="https://docs.github.com/en"
              >
                API
              </a>
            </li>
            <li>
              <a
                target="_blank"
                className="footer__links"
                href="https://github.com/services/"
              >
                Training
              </a>
            </li>
            <li>
              <a
                target="_blank"
                className="footer__links"
                href="https://github.blog/"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                target="_blank"
                className="footer__links"
                href="https://github.com/about"
              >
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
