import React, { useState } from 'react';
import BannersImg from '../../../assets/images/about_banners.jpg' 
import { ABOUTS } from '../../../constants/aboutConst';

import AboutComponent from './AboutComponent';

const AboutContainer = () => {
    return (
        <div>
            <AboutComponent text={''} img={BannersImg} abouts={ABOUTS} />
        </div>
    );
}
 
export default AboutContainer;
