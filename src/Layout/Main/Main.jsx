import React from 'react';
import NavigationBar from '../../Shared/NavigationBar/NavigationBar';
import Footer from '../../Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='container mx-auto'>
            <NavigationBar></NavigationBar>
             <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;