import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as ArrowBack} from '../../../assets/images/svg/Arrow_back.svg';
import { ReactComponent as ArrowBackUp} from '../../../assets/images/svg/Arrow_back_up.svg';
const Collapse = ({ reduce, about}) => {
    const [collapse, setCollapse] = useState(false);
    return (
        <div className='collapse'>
            <div className='collapse__content'> 
                <div className={reduce ? 'collapse__header--reduce' : 'collapse__header'}>
                    <p className='collapse__header__title'>{about.title}</p>
                    {
                        collapse ?
                        <ArrowBackUp onClick={() => setCollapse(!collapse)}/> :
                        <ArrowBack onClick={() => setCollapse(!collapse)}/>
                    }
                </div>
                {/*    <div className='collapse__body' {...collapse ? '--open' : '--close'}>
                        <p className='collapse__body__text'>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                    </div> */}
                            {
                    collapse &&   
                    <div className={reduce ? 'collapse__body--reduce' : 'collapse__body'}>
                        <p className='collapse__body__text'>
                                {about.body}
                        </p>
                    </div>
                }
            </div>
        </div>
    );
}


Collapse.propTypes = {
    reduce: PropTypes.bool,
    about: PropTypes.object
}
export default Collapse;
