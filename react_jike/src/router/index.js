//路由配置

import Layout from "@/pages/Layout"
import Login from "@/pages/Login"

import { createBrowserRouter } from 'react-router-dom'
import { AuthRoute } from '@/components/AuthRoute'
import Home from "@/pages/Home"
import Article from "@/pages/Article"
import Publish from "@/pages/Publish/inedx"
//配置路由实例
const router = createBrowserRouter([
    {
        path: "/",
        element: <AuthRoute><Layout /></AuthRoute>,
        children:[{
            path:'/',
            element: <AuthRoute><Home /></AuthRoute>
        },
        {
            path:'/article',
            element:<Article />
        },
        {
            path:'publish',
            element:<Publish />
        }]
    },
    {
        path: "/login",
        element: <Login />
    },
])
export default router