import React from 'react';
import NavigationBar from '../../Shared/NavigationBar/NavigationBar';
import Footer from '../../Shared/Footer/Footer';
import ErrorImage from '../../../src/assets/Error/404 Error Page not Found with people connecting a plug.gif'
const Error = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <div className='flex justify-center items-center'>
                <img src={ErrorImage} alt="" />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Error;