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
import NotFound from './body/Notfound.jsx';
import ViewDetails from './body/folder/ViewDetails.jsx';


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
            path:'/all-toys/view-details',
            element :<ViewDetails/>
          }
        ]
      },{
        path:'/my-toys',
        element :<MyToys/>
      },{
        path:'/add-toy',
        element :<AddToys/>
      },{
        path:'/blog',
        element :<Blog/>
      },{
        path:'/login',
        element :<Login/>
      },{
        path:'/register',
        element :<Register/>
      },
    ]
  },{
    path:'*',
    element : <NotFound/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>
)
