import React from 'react';
import Collapse from '../../common/collapse/Collapse';
import BannersComponent from '../../shared/banners/BannersComponent';
import PropTypes from 'prop-types';
 
const AboutComponent = ({text, img, setCollapse, collapse}) => {
    return (
        <div>
            <BannersComponent text={text} img={img} />
            <Collapse setCollapse={setCollapse} collapse={collapse}/>
        </div>
    );
}

AboutComponent.propTypes = {
    text: PropTypes.string,
    img:  PropTypes.string.isRequired,
    setCollapse: PropTypes.func,
    collapse: PropTypes.bool
}

export default AboutComponent;
