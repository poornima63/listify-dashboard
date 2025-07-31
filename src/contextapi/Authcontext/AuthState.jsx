import React, { useState } from "react";
import authContext from "./Authcontext"
import { baseUrls } from "../../baseUrls"

// import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import { base } from "../../../backend/Schema/auth.model";
function AuthState({ children }) {

  const [user, setUser] = useState({});
  const [isLogin, setIsLogin] = useState(
    localStorage.getItem("token") ? true : false
  );

  const signupFun = async (myobj, navigate) => {
    try {
      const response = await fetch(`${baseUrls}/api/v2.3/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(myobj),
      });

      const data = await response.json();

  
      if(data.success){
navigate("/login");
setIsLogin(true)
        toast.success("Account created successfully");
      }
        else{
          toast.error(data.message)
        }
    
    } catch (error) {
      console.log("Internal server error", error);
    }
    
  };

  const loginFun = async (user, navigate, setLogin) => {
  
      try {
        const res = await fetch(`${baseUrls}/api/v2.3/auth/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        });
  
        const data = await res.json();
  if (data.success) {
          setLogin({
            email: "",
            password: "",
          });
          localStorage.setItem("token", data.token);
          setIsLogin(true);
          setUser(data.user)
          navigate("/");
          toast.success(data.message);
        } else {
          toast.error(data.message);
        }
      } catch (error) {
        toast.error("something went wrong");
      }
  };



  const getUserFun = async () =>{
    
    
      try{
const user = await fetch(`${baseUrls}/api/v2.3/auth/getuser`,{
 method:"GET",
  headers: {
    "Content-Type": "application/json",
    "auth-token":localStorage.getItem("token"),
  }
  
})
const data = await user.json()

if(data.success) {
  setUser(data.user)
}

    } catch (error) {
       console.log(error);
    }
  }
  const changeProfilePic = async (file)=>{
    const formData = new FormData();
  formData.append("avatar", file);
    try {
      
      const response = await fetch(`${baseUrls}/api/v2.3/auth/update-profile-pic`, {
      method: "PUT",
      headers: {
        "auth-token": localStorage.getItem("token"),
      },
      body: formData,
    });

    const data = await response.json();
   if (data.success) {
  toast.success("Profile picture updated");

  const updatedUser = { ...user, avatar: data.avatar };
  setUser(updatedUser);  // context update
  localStorage.setItem("user", JSON.stringify(updatedUser));  // persist
}
 else {
      toast.error(data.message);
    }


    } catch (error) {
      
    }
  }


  return (
    <authContext.Provider
      value={{ isLogin,setIsLogin, user, signupFun, loginFun,getUserFun , changeProfilePic}}
    >
      {children}
    </authContext.Provider>
  );
}

export default AuthState;
