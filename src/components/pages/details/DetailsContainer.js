import React, { useState } from 'react';
import DetailsComponent from './DetailsComponent';
 
const DetailsContainer = () => {
    const [collapse, setCollapse] = useState(false);
    return (
        <DetailsComponent setCollapse={setCollapse} collapse={collapse} />
    );
}

export default DetailsContainer;
