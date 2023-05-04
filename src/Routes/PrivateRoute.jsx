import React, { useContext} from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';


const PrivateRoute = ({ children }) => {

    const { user, loader } = useContext(AuthContext);
    const location = useLocation();

    if (loader) {
        return <button className=" mx-auto my-16 btn loading">loading</button>;
    }
    if (user) {
        return children;
    }

    return <Navigate state={{ from: location }} to={`/login`} replace></Navigate>
};

export default PrivateRoute;