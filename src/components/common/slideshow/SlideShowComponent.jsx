import React, { useState } from 'react';
import { ReactComponent as ArrowLeft} from '../../../assets/images/svg/arrow_left.svg'
import { ReactComponent as ArrowRight} from '../../../assets/images/svg/arrow_right.svg'


// La liste des slides du carrousel.
let slides = [
    { image: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg", legend: "Frères pandas" },
    { image: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg", legend: "Yoga on the top" },
     { image: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg", legend: "Lever de soleil" },
    { image: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-4.jpg", legend: "Ciel étoilé" },
    { image: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-5.jpg", legend: "Tea time" },
];

const SlideShowComponent = ({ pictures, alt}) => {
    const [state, setState] = useState(0);
    
    const prev = (e) => {
        e.preventDefault()
         let index = state
        index--;
        if (index < 0) {
            index = slides.length - 1;
        }
        setState(index)
    }
    const next = (e) => {
        e.preventDefault()
        let index = state;
        index++
        if(index === slides.length){
            index = 0
        }
        setState(index)
    }
    return (
        <div className='slide-show'>
            <ArrowLeft onClick={(e) => prev(e)} className="slide-show__arrow-left"/>
            <img key={pictures[state]} src={pictures[state]} alt={`${alt}_${state}`} />                        
            <ArrowRight onClick={(e) => next(e)} className="slide-show__arrow-right"/>
        </div>
       
    );
}

export default SlideShowComponent;
