import { createContext, useContext } from 'react';

const authContext = createContext();

export default authContext;

export const useAuthContext = ()=>{
 return useContext(authContext)
}