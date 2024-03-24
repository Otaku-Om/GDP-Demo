import React from "react";
import "./Styles/Footer.css";
import { Link } from "react-router-dom";
import FooterLogo from "./Images/logo.png";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const History = useNavigate();

  return (
    <div className="Footer">
      <div className="Footer-Container">
        <div className="Footer-Logo">
          <img src={FooterLogo} alt="" />
        </div>
        <div className="Footer-Container-QuickLinks">
          <h2 className="Footer-Container-List-heading">Quick links</h2>
          <ul className="Footer-Container-QuickLinks-List">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/#Fitness">About us</Link>
            </li>
            <li>
              <Link to="/#Reviews">Reviews</Link>
            </li>
            <li>
              <Link to="/#Faq">FAQ</Link>
            </li>
            <li>
              <Link to="/Gallery">Gallery</Link>
            </li>
          </ul>
        </div>
        <div className="Footer-Container-Services">
          <h2 className="Footer-Container-List-heading">Services</h2>
          <ul className="Footer-Container-Services-List">
            <li>Regular Dance Sessions</li>
            <li>Fitness Sessions</li>
            <li>Wedding Choreography</li>
            <li>Wedding Choreography</li>
          </ul>
        </div>
        <div className="Footer-Container-SocialMedia">
          <h2 className="Footer-Container-List-heading">Social media</h2>
          <ul className="Footer-Container-SocialMedia-List">
            <li>
              <Link>Instagram</Link>
            </li>
            <li>
              <Link>Facebook</Link>
            </li>
            <li>
              <Link>Youtube</Link>
            </li>
          </ul>
        </div>
        <div className="Footer-Container-ContactUs">
          <h2 className="Footer-Container-List-heading">Contact us</h2>
          <p>
            Address:{" "}
            <span>
              K-6, near SANOSH MEDICAL, Sector-12, Block-K, Pratap Vihar,
              Ghaziabad, Uttar Pradesh 201009
            </span>
          </p>
          <p>
            Phone: <span className="highlight">07838416907</span>
          </p>
          <p>
            Email us: <span className="highlight">Garima@productions.com</span>
          </p>
        </div>
      </div>
      <div className="Footer-Copyright-Container">
        <p className="Footer-Copyright-Container-Content">
          copyright&#169;2024 Garima dance productions. All rights reserved
        </p>
        <div className="Footer-Copyright-Container-Policy">
          <p onClick={()=> History('/Terms-&-Conditions')}>Terms & Conditions</p>
          <p onClick={()=> History('/Privacy-Policy')}>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
