import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as StarsRed} from '../../../assets/images/svg/stars_red.svg';
import { ReactComponent as StarsGrey} from '../../../assets/images/svg/stars_grey.svg';

import Collapse from '../../common/collapse/Collapse';
import SlideShowComponent from '../../common/slideshow/SlideShowComponent';

const DetailsComponent = ({ logement }) => {
    return (
        <div className='details'>
            <div className='details__carrousel'>
                <SlideShowComponent pictures={logement.pictures} alt={`${logement.title}`}/>
            </div>
            <div className='details__header'>
                <div className='details__header__left'>
                    <h2 className='details__header__left__title'>{logement.title}</h2> 
                    <p className='details__header__left__sub-title'>{logement.location}</p>
                    <div className='details__header__left__tags'>
                        {
                            logement.tags.map(tag => 
                                    <p key={tag} className='details__header__left__tags-item'>{tag}</p>
                                )
                        }
                    </div>
                </div>
                <div className='details__header__right'>
                    <div className='details__header__right__profil'>
                        <p className='details__header__right__profil__name'>{logement.host.name}</p>
                        <div className='details__header__right__profil__logo'>
                            <img src={logement.host.picture} alt={logement.host.name} />    
                        </div> 
                    </div>
                    <div className='details__header__right__rates'>
                     
                        <div>
                             <StarsRed />
                        </div>
                        <div>
                         <StarsGrey />
                        </div>
                  
                    </div>
                </div>
            </div>
            <div className='details__body'>
                <Collapse  reduce={true} about={
                    {
                        id: 1,
                        title: 'Desription',
                        body: logement.description
                    }
                }/>
                <Collapse reduce={true} about={
                         {
                            id: 2,
                            title: 'Equipements',
                            body: logement.equiments
                        }
                }/>
            </div>
        </div> 
    );
}


DetailsComponent.propTypes = {
    logement: PropTypes.object
}
export default DetailsComponent;
