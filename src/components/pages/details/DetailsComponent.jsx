import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as StarsRed} from '../../../assets/images/svg/Arrow_back.svg';
import { ReactComponent as StarsGrey} from '../../../assets/images/svg/stars_grey.svg';

import Collapse from '../../common/collapse/Collapse';
const DetailsComponent = ({setCollapse, collapse}) => {
    return (
        <div className='details'>
            <div className='details__carrousel'>
                
            </div>
            <div className='details__header'>
                <div className='details__header__left'>
                    <h2 className='details__header__left__title'>Cozy loft on the Canal Saint-Martin</h2> 
                    <p className='details__header__left__sub-title'>Paris, Ile-de-France</p>
                    <div className='details__header__left__tags'>
                        <p className='details__header__left__tags-item'>Cozy</p>
                        <p className='details__header__left__tags-item'>Canal</p>
                        <p className='details__header__left__tags-item'>Paris 10</p>
                    </div>
                </div>
                <div className='details__header__right'>
                    <div className='details__header__right__profil'>
                        <p className='details__header__right__profil__name'>Alexandre Dumas</p>
                        <div className='details__header__right__profil__logo'></div> 
                    </div>
                    <div className='details__header__right__rates'>
                        <div>
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" fill="#FF6060"/>
                            </svg>
                        </div>
                        <div>
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" fill="#FF6060"/>
                            </svg>
                        </div>
                        <div>
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" fill="#FF6060"/>
                            </svg>
                        </div>
                        <div>
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" fill="#E3E3E3"/>
                            </svg>
                        </div>
                        <div>
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" fill="#E3E3E3"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className='details__body'>
                <Collapse setCollapse={setCollapse} collapse={collapse} reduce={true}/>
                <Collapse setCollapse={setCollapse} collapse={collapse} reduce={true}/>
            </div>
        </div> 
    );
}


DetailsComponent.propTypes = {
    setCollapse: PropTypes.func,
    collapse: PropTypes.bool
}
export default DetailsComponent;
