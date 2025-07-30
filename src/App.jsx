import { Outlet } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="mt-[88px] bg-white text-black dark:bg-gray-900 dark:text-white min-h-screen transition-colors duration-300">
        <Outlet />
       
      </div>
      <Footer />
    </>
  );
}


export default App;
