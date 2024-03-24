import React from "react";
import "./styles/ConnectOnWhatsApp.css";
import { Link } from "react-router-dom";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

function ConnectOnWhatsApp({ text }) {
  const handleMessageClick = () => {
    const message = "Hello! Make your special day unforgettable";
    const phoneNumber = "7838416907";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };
  return (
    <div className="ConnectOnWhatsApp">
      <Link id="ConnectOnWhatsApp-Link" onClick={handleMessageClick}>
        <WhatsAppIcon id="WhatsApp-Icon" />
        <span className="WhatsAppText">{text}</span>
      </Link>
    </div>
  );
}

export default ConnectOnWhatsApp;
