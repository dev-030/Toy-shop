import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './body/App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from './body/Navbar/Navbar.jsx';
import AuthProviders from './authentication/AuthProviders.jsx';
import AddToys from './body/AddToys.jsx';
import MyToys from './body/MyToys.jsx';
import AllToys from './body/folder/AllToys.jsx';
import Blog from './body/Blog.jsx';
import Login from './body/Login.jsx';
import Register from './body/Register.jsx';
import ViewDetails from './body/folder/ViewDetails.jsx';
import PrivateRoute from './authentication/PrivateRoute.jsx';






const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar/>,
    children : [
      {
        path:'/',
        element :<App/>
      },{
        path:'/all-toys',
        element :<AllToys/>,
        children : [
          {
            path:'/all-toys/:id',
            element :<PrivateRoute><ViewDetails path={'/login'} data={true}/></PrivateRoute>,
            loader : ({params}) => fetch(`https://cute-gold-lemming-sari.cyclic.app/all-toys/${params.id}`)
          }
        ]
      },
      {
        path:'/my-toys',
        element :<PrivateRoute><MyToys path={'/login'} data={true} /></PrivateRoute>
      },{
        path:'/add-toy',
        element : <PrivateRoute><AddToys path={'/login'} data={true} /></PrivateRoute>
      },{
        path:'/blog',
        element :<Blog/>
      },{
        path:'/login',
        element :<PrivateRoute><Login path={'/'} data={false}/></PrivateRoute>
      },{
        path:'/register',
        element :<PrivateRoute><Register path={'/'} data={false}/></PrivateRoute>
      },
    ]
  },{
    path:'*',
    element : <h1>Not found page</h1>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <div className='bg-[#e9f8ff]'>
      <RouterProvider router={router} /></div>
    </AuthProviders>
  </React.StrictMode>
)
