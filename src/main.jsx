import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Element from "./Element.jsx";

import { ToastContainer } from "react-toastify";
import AuthState from "./contextapi/Authcontext/AuthState.jsx";
import ListState from "./contextapi/listcontext/ListState.jsx";
import { ThemeProvider } from "./contextapi/themeContext/theme.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
     <ThemeProvider>
<AuthState>
        <ListState> {/* ✅ wrap this here */}
        <Element />
        <ToastContainer />
      </ListState>
        
    </AuthState>
    
     </ThemeProvider>
    
 
  </StrictMode>
);
