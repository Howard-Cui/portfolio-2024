import { useContext, useEffect, useState } from "react";
import { createContext } from "react";

interface DropDownNavContextValue {
  openNav: boolean;
  setOpenNav: React.Dispatch<React.SetStateAction<boolean>>
}

const DropDownNavContext = createContext<DropDownNavContextValue>({
  openNav: false,
  setOpenNav: () => {}
});
DropDownNavContext.displayName = "DropDownNavContext"

const DropDownNavProvider = ({ children } : { children: React.ReactNode }) => {
  const [ openNav, setOpenNav ] = useState(false);

  return (
    <DropDownNavContext.Provider 
      value={{ 
        openNav, 
        setOpenNav 
      }}
    >
      {children}
    </DropDownNavContext.Provider>
  )
}

const useDropDownNav = () => {
  return useContext(DropDownNavContext);
}

export {
  DropDownNavProvider,
  useDropDownNav
}