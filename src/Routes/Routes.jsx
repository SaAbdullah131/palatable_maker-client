import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Blogs from "../Shared/Blogs/Blogs";
import Error from "../Layout/Error/Error";


const router = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        errorElement:<Error></Error>,
        children:[
            {
                
                path:"/login",
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register> 
            },
            {
                path:'/blogs',
                element:<Blogs></Blogs>
            }
        ]
    }

])

export default router;