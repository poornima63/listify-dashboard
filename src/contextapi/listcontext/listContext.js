import { createContext, useContext } from 'react';

const listContext = createContext();

export default listContext;

export const useListContext = ()=>{
 return useContext(listContext)
}