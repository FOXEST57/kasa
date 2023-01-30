import React from 'react';
import LogoFooter from '../../common/logo/LogoFooter';

const FooterComponent = () => {
    return (
        <footer className='footer'>
            <div className='footer__logo'>
                <LogoFooter />
            </div>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}

export default FooterComponent;
