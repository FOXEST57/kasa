import React from 'react';
import {  useParams, Navigate  } from "react-router-dom";
import { ROUTES } from '../../../constants/routesConst.js'

import DetailsComponent from './DetailsComponent';
import LogementsData from '../../../constants/logements.json'
const DetailsContainer = () => {
    const { id } = useParams();
    
    return (
        !LogementsData.find(logement => logement.id === id) ?
             <Navigate to={ROUTES.NOT_FOUND.PATH} replace={true} />
                :
            <DetailsComponent logement={LogementsData.find(logement => logement.id === id)}/>
    );
}

export default DetailsContainer;
