import React from "react";
import "./footer.css";
import Logo from '../../assets/images/TunnelCraft_white.png'
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram , FaLinkedin, FaRegCopyright } from "react-icons/fa6";

export const Footer = () => {
    return (

        <div className="footer">
            <div className="footer-content">
                <div className="connect" id="Footer">
                        <img src={Logo} alt="logo" />
                    

                    <div className="copyright">
                        <FaRegCopyright />
                        <p>2024 TunnelCraft. All rights reserved</p>
                    </div>
                </div>
                <div className="About" id="Footer">
                    <p className="text_about">About</p>
                    <div className="about-content">
                    <p>Chez Tunnel Craft, 
                    nous  sommes une équipe  dévouée 
                    d'enthousiastes du développement web,
                    engagés  à simplifier le processus
                        d'intégration pour les développeurs
                    </p>
                    </div>

                </div>

                <div className="ContactUs" id="Footer">
                    <p className="contactname">Contact Us</p>
                    <div className="contact12">
                        <FaWhatsapp/>
                        <p>+237698271978</p>
                    </div>
                    <div className="contact12">
                        <FaWhatsapp/>
                        <p>+237676878446</p>
                    </div>
                    <p>ENSPY </p>
                    <p>Yaoundé Cmr</p>
                </div>

                <div className="social_Media_Icons">
                <FaXTwitter to="https://twitter.com/i/flow/login" />
                {/* <a href="https://web.facebook.com/?_rdc=1&_rdr" target="_blank"><FaFacebookF/> </a> */}
                <FaFacebookF/>
                <FaInstagram />
                <FaLinkedin />
            </div>

             </div>

            
        </div>
        
    );
};

export default Footer