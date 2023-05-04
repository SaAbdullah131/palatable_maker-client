import React from 'react';
import Header from './Header/Header';

import { useLoaderData } from 'react-router-dom';
import Featured from './Featured/Featured';
import AboutInfo from './AboutInfo/AboutInfo';
import ChefsAll from './ChefsAll/ChefsAll';


const Home = () => {
    const chefs = useLoaderData();
    return (
        <div>
            <Header></Header>
            <ChefsAll
            key={chefs._id}
            chefs={chefs}
            >
            </ChefsAll>
            <Featured></Featured>
            <AboutInfo></AboutInfo>
        </div>
    );
};

export default Home;