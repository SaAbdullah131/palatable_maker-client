import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Blogs from "../Pages/Blogs/Blogs";
import Error from "../Layout/Error/Error";
import Home from "../Pages/Home/Home";
import PrivateRoute from "./PrivateRoute";
import ChefsDetails from "../Pages/Home/ChefsAll/ChefsDetails";



const router = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        errorElement:<Error></Error>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader: () => {
                    return fetch('https://chef-recipe-server-ochre.vercel.app/chefs');
                  }
            },
            {
                path:'/chefs/:id',
                element:<PrivateRoute><ChefsDetails></ChefsDetails></PrivateRoute>,
                loader:({params})=>fetch(`https://chef-recipe-server-ochre.vercel.app/chefs/${params.id}`)
            },
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
            },
           
        ]
    }

])

export default router;