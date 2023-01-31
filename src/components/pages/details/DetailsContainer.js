import React from 'react';
import {  useParams} from "react-router-dom";

import DetailsComponent from './DetailsComponent';
import LogementsData from '../../../constants/logements.json'
const DetailsContainer = () => {
    const { id } = useParams();
    console.log()
    return (
        <DetailsComponent logement={LogementsData.find(logement => logement.id === id)}/>
    );
}

export default DetailsContainer;
