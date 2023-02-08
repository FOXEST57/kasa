import React from 'react';
import Collapse from '../../common/collapse/Collapse';
import BannersComponent from '../../shared/banners/BannersComponent';
import PropTypes from 'prop-types';

const AboutComponent = ({text, img, abouts}) => {
    return (
        <div className={'about'}>
            <BannersComponent text={text} img={img} />
            {
                     abouts?.length <= 0 ?
                     <p>Aucune informations disponible.</p>
                     :
                     abouts.map(about =>
                        <div key={about.id} className={'about__collapse'}>
                             <Collapse about={about} />
                        </div>
                        )
            }
        </div>
    );
}

AboutComponent.propTypes = {
    text: PropTypes.string,
    img:  PropTypes.string.isRequired,
    abouts: PropTypes.array
}

export default AboutComponent;
