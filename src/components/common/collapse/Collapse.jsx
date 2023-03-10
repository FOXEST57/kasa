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
                {
                    
                }
                            {
                    collapse &&   
                    <div className={reduce ? 'collapse__body--reduce' : 'collapse__body'}>
                        <div className='collapse__body__text'>
                                {about.body}
                        </div>
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
