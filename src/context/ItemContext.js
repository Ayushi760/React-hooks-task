import React, { createContext, useReducer, useContext } from 'react';
import { ItemReducer, initialState } from './ItemReducer';

const ItemContext = createContext();

export const ItemProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ItemReducer, initialState);
  
  return (
    <ItemContext.Provider value={{ state, dispatch }}>
      {children}
    </ItemContext.Provider>
  );
};

export const useItems = () => useContext(ItemContext);