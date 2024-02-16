import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';  
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Provider } from 'react-redux';

import { store } from './app/store';
import Admindb from './features/dashboards/ADMINDB';
import Campaignerdb from './features/dashboards/CAMPAIGNERDB';
import Login from './features/users/Login';
import Register from './features/users/Registration';
import Home from './shared/home';
import AddNewReg from './features/dashboards/AddNewReg';
import CreateCamp from './features/dashboards/CreateCamp';
import AllCampaigns from './features/dashboards/AllCampaigns';
import AllCampaigners from './features/dashboards/AllCampaigners';
import NewCandiates from './features/dashboards/NewCandiates';
import Registers from './features/dashboards/Registers';

const router = createBrowserRouter([
  {
    path: "/",
    element:  <App />,
    children:[
      {
       path:"/",
       element:<Home></Home>
      },
    {
      path: "/admindb",
      element:  <Admindb></Admindb>
    },
    {
      path: "/campaignerdb",
      element: <Campaignerdb></Campaignerdb>
    },
    {
      path: "/register",
      element: <Register></Register>
    },
    {
      path:'/login',
      element:<Login></Login>
    },
    {
      path:'/addnewreg/:cname/:pname',
      element:<AddNewReg></AddNewReg>
    },
    {
      path:'/createcamp',
      element:<CreateCamp></CreateCamp>
    },
    {
      path:'/allcampaigns',
      element:<AllCampaigns></AllCampaigns>
    },
    {
      path:'/allcampaigners',
      element:<AllCampaigners></AllCampaigners>
    },
    {
      path:'/newcandiates',
      element:<NewCandiates></NewCandiates>
    },
    {
      path:'/regs',
      element:<Registers></Registers>
    }
  ]
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
       <RouterProvider router={router} />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
