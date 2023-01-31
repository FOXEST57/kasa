import React, { useState, useEffect } from 'react';
import HomeComponent from './HomeComponent'
import BannersImg from '../../../assets/images/home_banners.jpg'
import LogementsData from '../../../constants/logements.json'

const HomeContainer = () => {
    const [logements, setLogement] = useState([])

    useEffect(() => {
        setLogement(LogementsData)
    }, [])
    return (
        <HomeComponent text={'Chez vous, partout et ailleurs'} img={BannersImg} logements={logements} />
    );
}

export default HomeContainer;
