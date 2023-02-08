import React from 'react';
import PropTypes from 'prop-types';
import { Link} from "react-router-dom";
import { ROUTES } from '../../../constants/routesConst';

import BannersComponent from '../../shared/banners/BannersComponent';
import CardComponent from '../../shared/card/CardComponent';

const HomeComponent = ({text, img, logements}) => {
    return (
        <div className='home'>
            <div className='home__banners'>
                <BannersComponent text={text} img={img}/>
            </div>
            <div className='home__card'>
                {
                    logements?.length <= 0 ?
                        <p>Nous n'avons aucun logement disponible pour l'instant.</p>
                        :
                        logements.map(logement =>
                            <Link key={logement.id} to={`${ROUTES.DETAIL.PATH}/${logement.id}`}>
                                <CardComponent title={logement.title} cover={logement.cover} />
                            </Link>
                        )
                }
            </div>
        </div>
    );
}

HomeComponent.propTypes = {
    text: PropTypes.string,
    img:  PropTypes.string.isRequired,
    logements: PropTypes.array
}
export default HomeComponent;
