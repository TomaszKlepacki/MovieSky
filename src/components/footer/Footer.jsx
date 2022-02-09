import React from 'react';

import './footer.scss';

import { Link } from 'react-router-dom';

import bg from '../../assets/footer-bg.jpg';
import logo from '../../assets/tmovie.png';

const Footer = () => {
    return (
        <div className="footer" style={{backgroundImage: `url(${bg})`}}>
            <div className="footer__content container">
                <div className="footer__content__logo">
                    <div className="logo">
                        <img src={logo} alt="" />
                        <Link to="/">MovieSky</Link>
                    </div>
                </div>
                <div className="footer__content__menus">
                    <div className="footer__content__menu">
                        <Link to="/">Strona Główna</Link>
                        <Link to="/">Kontakt</Link>
                        <Link to="/">Usługi</Link>
                        <Link to="/">O Nas</Link>
                    </div>
                    <div className="footer__content__menu">
                        <Link to="/">Na Żywo</Link>
                        <Link to="/">FAQ</Link>
                        <Link to="/">Premium</Link>
                        <Link to="/">Polityka Prywatności</Link>
                    </div>
                    <div className="footer__content__menu">
                        <Link to="/">Musisz Obejrzeć</Link>
                        <Link to="/">Ostatnio Dodane</Link>
                        <Link to="/">Top IMDB</Link>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;