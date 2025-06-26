import IndexLayout from "../layouts";
import { lazy } from "react";

const HomePage = lazy(() => import("../views/main/HomePage"))

export const IndexRoute = {
    path:"/",
    element: <IndexLayout/>,
    children:[
        {
            path: "/",
            element: <HomePage/>
        }
    ]
}