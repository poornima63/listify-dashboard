import React, { useState } from "react";
import { toast } from "react-toastify";
// import { baseUrls } from "../baseUrls";
import { baseUrls} from "../baseUrls"


function Contact() {


 const [data,setData] = useState({
  name:"",
  email:"",
  subject:"",
  message:"",
})
const onchangeHandler = (e)=>{
  setData({...data,[e.target.name]:e.target.value})
}
const onSubmitHandler = async (e)=>{
   e.preventDefault(); // 
  try {
    
    // const token = localStorage.getItem("token");

    const res = await fetch(`${baseUrls}/api/contact/send`,{
       method:"POST",
        headers:{
            "Content-Type":"application/json",
             "auth-token": localStorage.getItem("token"),

        },
        body:JSON.stringify(data)
    })
     const mess = await res.json();
      //  console.log(mess)
     if (mess.success) {
      toast.success(mess.message);
      // Clear form
      setData({ name: "", email: "", subject: "", message: "" });
    } else {
      toast.error(mess.message || "Failed to send message.");
    }

  } catch (error) {
    toast.error("Something went wrong! Please try again later.");
    console.log("Error:", error);
  }



}
  
  return (
    <div className="relative flex items-top justify-center min-h-[500px] bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 sm:items-center sm:pt-0">
      <div className="w-5/6 py-16 sm:px-6 lg:px-8">
        <div className="mt-8 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-6 mr-2 bg-gray-300 dark:bg-gray-800 text-gray-900 dark:text-gray-100 sm:rounded-lg">
              <h1 className="text-3xl sm:text-4xl text-orange-600 font-extrabold tracking-tight">
                Get in touch:
              </h1>
              <p className="text-normal text-lg sm:text-xl font-medium text-gray-900 dark:text-gray-100  mt-2">
                Fill in the form to start a conversation
              </p>
              <div className="flex items-center mt-8 text-gray-600">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div className="ml-4 text-md tracking-wide text-gray-900 dark:text-gray-100 font-semibold w-40">
                  Acme Inc, Street, State, Postal Code
                </div>
              </div>
              <div className="flex items-center mt-4 text-gray-600">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <div className="ml-4 text-md tracking-wide font-semibold text-gray-900 dark:text-gray-100 w-40">
                  +91 84680xxxxx
                </div>
              </div>
              <div className="flex items-center mt-2 text-gray-600">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <div className="ml-4 text-md tracking-wide text-gray-900 dark:text-gray-100 font-semibold w-40">
                  poornima63061@gmail.com
                </div>
              </div>
            </div>
            <form className="p-6 flex flex-col justify-center" onSubmit={onSubmitHandler}  >
              <div className="flex flex-col">
                <label htmlFor="name" className="hidden">
                  Full Name
                </label>
                <input
                  type="name"
                  name="name"
                  id="name"
                  value={data.name}
                  onChange={onchangeHandler}
                  placeholder="Full Name"
                  className="w-full mt-2 py-4 px-4 rounded-lg bg-gray-300 dark:bg-gray-800 text-gray-900 dark:text-gray-100 font-semibold focus:border-orange-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col mt-2">
                <label htmlFor="email" className="hidden">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={data.email}
                  onChange={onchangeHandler}
                  id="email"
                  placeholder="Email"
                  className="w-full mt-2 py-4 px-4 rounded-lg bg-gray-300 dark:bg-gray-800 text-gray-800 dark:text-gray-100 font-semibold focus:border-orange-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col mt-2">
                <label htmlFor="subject" className="hidden">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={data.subject}
                  onChange={onchangeHandler}
                  id="subject"
                  placeholder="Your Subject"
                  className="w-full mt-2 py-4 px-4 rounded-lg bg-gray-300 dark:bg-gray-800 text-gray-800 dark:text-gray-100 font-semibold focus:border-orange-500 focus:outline-none"
                />
              </div>
              <div className="flex flex-col mt-2">
                <label htmlFor="message" className="hidden">
                  Message
                </label>
                <textarea
                  name="message"
                  value={data.message}
                  onChange={onchangeHandler}
                  id="message"
                  rows={4}
                  placeholder="Your Message"
                  className="w-full mt-2 py-4 px-4 rounded-lg bg-gray-300 dark:bg-gray-800 text-gray-800 dark:text-gray-100 font-semibold focus:border-orange-500 focus:outline-none"
                />
              </div>
              <button
             
                type="submit"
                className="md:w-32 bg-orange-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-5 hover:bg-orange-600 transition ease-in-out duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
