import React, { useState, useEffect } from 'react';
import HomeComponent from './HomeComponent'
import BannersImg from '../../../assets/images/home_banners.jpg'

const HomeContainer = () => {
    const [logements, setLogement] = useState(null)

   
    useEffect(() => {
        (async () => {
                const response = await fetch('https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json', {
                    method: 'GET',
                    mode: 'no-cors',
                })
                console.log(response.status)
                if(response.ok){
                    const result = await response.json()
                    console.log(result)
                    setLogement(result)
                }
        })()
    }, []);
  
    return (
        <HomeComponent text={'Chez vous, partout et ailleurs'} img={BannersImg}/>
    );
}

export default HomeContainer;
