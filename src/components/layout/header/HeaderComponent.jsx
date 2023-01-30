import React from 'react';

import { Link } from "react-router-dom";

// import component
import Logo from '../../common/logo/Logo';

// import ROUTES
import { ROUTES } from '../../../constants/routesConst'

const HeaderComponent = () => {
    return (
        <header className='header'>
            <nav className='main-nav'>
                <div className='main-nav__logo'>
                    <Logo />
                </div>
                <ul className='main-nav__menu'>
                    <li className='main-nav__menu__item'><Link to={ROUTES.HOME.PATH}>Accueil</Link></li>
                    <li className='main-nav__menu__item'><Link to={ROUTES.ABOUT.PATH}>About</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default HeaderComponent;
