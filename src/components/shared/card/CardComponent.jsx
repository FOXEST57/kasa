import React from 'react';
import PropTypes from 'prop-types';

const CardComponent = ({title, cover}) => {
    return (
        <div className='card'>  
            <img 
                className='card__cover'
                alt={title}
                src={cover} />
            <p className='card__title'>{title}</p>
        </div>
    );
}

CardComponent.propTypes = {
    title: PropTypes.string.isRequired,
    cover:  PropTypes.string.isRequired,
}
export default CardComponent;
