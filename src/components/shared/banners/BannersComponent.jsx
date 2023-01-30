import React from 'react';

const BannersComponent = (props) => {
    return (
        <section className="banners">
            <img src={props.img} alt="home-banners" className='banners__heroes'/>
            <p className='banners__title'>{props.text}</p>
        </section>
    );
}

export default BannersComponent;
