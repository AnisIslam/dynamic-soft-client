import React from 'react';
import FooterCol from './FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

import './Footer.css'
const Footer = () => {
    const noNamed = [
        { name: "Dynamic Soft", link: "/dynamicsoft" },
        { name: "About our Team", link: "/team" },
        { name: "About our service", link: "/service" },
        { name: "Map", link: "/map" },
        { name:"Join with us", link: "/joinus" },
    ]
    const ourAddress = [
        { name: "Chatesshari Road,", link: "//google.com/map" },
        { name: "Chittagong", link: "//google.com/map" },


    ]

    const services = [
        { name: "AI", link: "/ai" },
        { name: "Data Mining", link: "/datamining" },
        { name: "Desktop Software", link: "/desktopsoft" },
        { name: "Mobile App", link: "/app" },
        { name: "Web App", link: "/webapp" },
        { name: "Banking Solution", link: "/banking" },
        { name: "Blockchain", link: "/blockchain" }
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={"Quick Link"} menuItems={noNamed} />
                    <FooterCol key={2} menuTitle="Services" menuItems={services} />
                    {/* <FooterCol key={3} menuTitle="Oral Health" menuItems={oralHealth} /> */}
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}>
                    <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon active-icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon active-icon" icon={faInstagram} /></a></li>
                            <li className="list-inline-item"><a href="//github.com"><FontAwesomeIcon className="icon active-icon" icon={faGithub} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Find By Call </h6>
                            <button className="btn btn-primary"> <FontAwesomeIcon className="text-black" icon={faPhoneAlt}/> +880-12133546</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p className="text-info">Copyright by Dynamic Soft <br/>All right preserved by Md. Anisul Islam <br/> {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;