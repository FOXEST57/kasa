import React, { useState } from 'react';
import { ReactComponent as ArrowLeft} from '../../../assets/images/svg/arrow_left.svg'
import { ReactComponent as ArrowRight} from '../../../assets/images/svg/arrow_right.svg'



const SlideShowComponent = ({ pictures, alt}) => {
    const [state, setState] = useState(0);
    
    const prev = (e) => {
        e.preventDefault()
         let index = state
        index--;
        if (index < 0) {
            index = pictures.length - 1;
        }
        setState(index)
    }
    const next = (e) => {
        e.preventDefault()
        let index = state;
        index++
        if(index === pictures.length){
            index = 0
        }
        setState(index)
    }
    return (
        <div className='slide-show'>
            {
                pictures.length <= 1 ? '' : 
                <ArrowLeft onClick={(e) => prev(e)} className="slide-show__arrow-left"/>
            }
            <img key={pictures[state]} src={pictures[state]} alt={`${alt}_${state}`} />                        
            {
                pictures.length <= 1 ? '' : 
                <ArrowRight onClick={(e) => next(e)} className="slide-show__arrow-right"/>
            }
        </div>
       
    );
}

export default SlideShowComponent;
