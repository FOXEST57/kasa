import React from 'react';

const CardComponent = () => {
    return (
        <div className='card'>  
            <img 
            className='card__cover'
            alt='acco'
            src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg" />
            <p className='card__title'>Titre de la location</p>
        </div>
    );
}

export default CardComponent;
