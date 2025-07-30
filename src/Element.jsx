import React, { useEffect } from "react";

import App from "./App.jsx";
import Home from "./components/Home.jsx";
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Listing from './components/Listing.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import AddListing from './components/AddListing.jsx';
import ListDetails from './components/ListDetails.jsx';
import Yourpost from "./components/Yourpost.jsx"
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { useAuthContext } from "./contextapi/Authcontext/Authcontext.jsx";
import UserProfile from "./components/UserProfile.jsx";
function Elements() {
const { isLogin, getUserFun } = useAuthContext();

  useEffect(() => {
    if (isLogin) {
      getUserFun();
    }
  }, [isLogin]);



  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route path="" element={<Home />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/profile" element= {<UserProfile/>} ></Route>
          <Route path="/yourpost" element={<Yourpost/>}/>
        <Route path="/addlisting" element={ isLogin ? <AddListing /> : <Login/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/listdetails/:listId" element={<ListDetails />} />
       
      </Route>
    )
  );

  return  <RouterProvider router={router} />;
}

export default Elements;
