import React from 'react';
import PropTypes from 'prop-types';

import BannersComponent from '../../shared/banners/BannersComponent';
import CardComponent from '../../shared/card/CardComponent';

const HomeComponent = ({text, img}) => {
    return ( 
        <div className='home'>
            <div className='home__banners'>
            <BannersComponent text={text} img={img}/>
            </div>
            <div className='home__card'>
                <CardComponent />
                <CardComponent />
                <CardComponent />
                <CardComponent />
                <CardComponent />

            </div>
        </div>
    );
}

HomeComponent.propTypes = {
    text: PropTypes.string,
    img:  PropTypes.string.isRequired,
}
export default HomeComponent;
