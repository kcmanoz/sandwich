import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <p className="footer-text">
                    © 2023 Sandwich House. All rights reserved.
                </p>
                <div className="footer-icons">
                    <a
                        href="https://www.facebook.com/your-page-url"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-icon"
                    >
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a
                        href="https://www.instagram.com/your-page-url"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-icon"
                    >
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;