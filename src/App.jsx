import React, { useState, useEffect } from 'react';

import './app.css';

import Images from './components/Images';
import Search from './components/Search';

import ImageAPI from './api/img';

const App = () => {

    const [data, setData] = useState([]);
    
    useEffect(() => {
        getImageAPI('dog');
    }, []);

    const getImageAPI = (searchTerm) => {
        ImageAPI.get(`search/photos?page=1&query=${searchTerm}`)
            .then(response => setData(response.data.results))
            .catch(err => console.log(`Error: ${err}`));
    }

    console.log(data);

    return (
        <>
            <Search onSearch={ getImageAPI }/>
            <Images data={ data }/>
        </>
    )
}

export default App