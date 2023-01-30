import React from 'react';
import { Link } from "react-router-dom";

// import ROUTES
import { ROUTES } from '../../../constants/routesConst.js'
const NotFoundComponent = () => {
    return (
        <div className='not-found'>
            <p className='not-found__title'>404</p>
            <p className='not-found__text'>Oups! La page que vous demandez n'existe pas</p>
            <Link to={ROUTES.HOME.PATH}>Retourner sur la page d'accueil</Link>
        </div>
    );
}

export default NotFoundComponent;
