import React, { useState } from 'react';
import BannersImg from '../../../assets/images/about_banners.jpg' 

import AboutComponent from './AboutComponent';

const AboutContainer = () => {
    const [collapse, setCollapse] = useState(false);
    console.log(collapse);
    return (
        <div>
            <AboutComponent text={''} img={BannersImg} setCollapse={setCollapse} collapse={collapse} />
        </div>
    );
}
 
export default AboutContainer;
