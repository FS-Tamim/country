import React, { useState, useEffect } from 'react';
import Country from '../Country/Country';


const Home = () => {

    const [countries,setCountries]=useState([]);

    useEffect(()=>{
        fetch("https://restcountries.eu/rest/v2/all")
        .then(res=>res.json())
        .then(data=>setCountries(data))
    },[]);
    return (
        <div>
                <h2>Length:{countries.length}</h2>
                {
                    countries.map(dp=><Country country={dp} ></Country>)
                } 

            
            
        </div>
    );
};

export default Home;