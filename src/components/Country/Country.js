import React from 'react';
import './Country.css'
import { Link } from 'react-router-dom';

const Country = (props) => {
     const {name,population,capital}=props.country;
    return (
        <div className="main">
            <h1>Name:{name}</h1>
            <h2>Population:{population}</h2>
            <h5>Capital:{capital}</h5>
            <Link to={`countries/${name}`}>Learn More</Link>
        </div>
    );
};

export default Country;