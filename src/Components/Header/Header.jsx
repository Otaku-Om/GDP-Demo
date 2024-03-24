import React, { useEffect, useState } from "react";
import "./Styles/Header.css";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import Logo from "./Images/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Header = ({ handler, state, setState }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [toggleMenu, setToggleMenu] = useState(false);

  const scrollToMySection = (ID) => {
    if (ID) {
      const sectionElement = document.querySelector(ID);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    scrollToMySection(location.hash);
  }, [location]);

  return (
    <div className="Header">
      <div className="Header-Container">
        <div onClick={() => navigate("/")} className="Logo">
          <img src={Logo} alt="" />
        </div>
        <ul className="Header-Container-List">
          <li>
            <Link to="/#Fitness">About us</Link>
          </li>
          <li>
            <Link to="/#Services">Services</Link>
          </li>
          <li>
            <Link to="/Gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/#Reviews">Reviews</Link>
          </li>
          <li>
            <Link to="/#Faq">FAQ</Link>
          </li>
        </ul>
        <a onClick={handler} className="Header-Container-Button">
          Contact Us
        </a>
        {!toggleMenu ? (
          <MenuIcon id="Header-MenuIcon" onClick={() => setToggleMenu(true)} />
        ) : (
          <CloseIcon
            id="Header-CloseIcon"
            onClick={() => setToggleMenu(false)}
          />
        )}

        {toggleMenu && (
          <div className="Header-Container-Mob">
            <ul className="Header-Container-Mob-List">
              <li>
                <Link to="/#Fitness">About us</Link>
              </li>
              <li>
                <Link to="/#Services">Services</Link>
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
            <a onClick={handler} className="Header-Container-Mob-Button">
              Contact Us
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
