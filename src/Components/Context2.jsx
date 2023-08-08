import React, { createContext } from "react";
// import { useState } from "react";

export const ContextProvider = createContext();
export const Context2 = ({ children }) => {
  

  const hold = {
   
  };

  return (
    <div>
      <ContextProvider.Provider value={hold}>
        {children}
      </ContextProvider.Provider>
    </div>
  );
};
