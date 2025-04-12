import { createBrowserRouter } from "react-router";
import App from "../App";
import About from "../components/About";
import ContactUs from "../components/ContactUs";
import Body from "../components/Body";
import ErrorPage from "../components/ErrorPage";
import Menu from "../components/Menu";
import {lazy} from 'react'
const Cart = lazy(()=>import('../components/Cart'))

const appRouter = createBrowserRouter([
    {
        path : "/",
        Component : App,
        children : [
            {
                path:"",
                Component : Body
            },
            {
                path:"about",
                Component: About
            },
            {
                path:"contact",
                Component : ContactUs
            },
            {
                path : "/menu/:title/:id",
                Component : Menu
            },
            {
                path : '/cart',
                Component : Cart
            }
        ],
        errorElement: <ErrorPage/>
    }
])

export default appRouter