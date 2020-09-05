import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';

const Countrydetail = () => {
    const {name}=useParams();
    const [country, setCountry] = useState({});

    useEffect(()=>{
        const url=`https://restcountries.eu/rest/v2/name/${name}`;

        fetch(url)
        .then(res=>res.json())
        .then(data=>setCountry(data[0]))
    },[])

   
    return (
        <div>
            <h1>Name:{country.name}</h1>
           <h4>Population:{country.population}</h4>
            <h6>capital:{country.capital}</h6>

            
        </div>
    );
};

export default Countrydetail;