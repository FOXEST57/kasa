import React from 'react';
import PropTypes from 'prop-types';

const CardComponent = ({title, cover}) => {
    return (
        <div className='card' style={{backgroundImage: ` linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%), url(${cover})`}}>
            {/*<img
                className='card__cover'
                alt={title}
                src={cover} />*/}
            <p className='card__title'>{title}</p>
        </div>
    );
}
// props version destructuré
CardComponent.propTypes = {
    title: PropTypes.string.isRequired,
    cover:  PropTypes.string.isRequired,
}
export default CardComponent;
