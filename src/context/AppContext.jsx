import { createContext, useState } from "react";
import { useLocation } from "react-router-dom";
import allData from "../allData";

export const AppContext = createContext(null);

export const AppContextProvider = ({ children }) => {
  const { pathname } = useLocation();
  const { contactListData } = allData;
  const [active, setActive] = useState(contactListData[0]);

  const handleActiveContact = (contact) => {
    setActive(contact);
  };

  return (
    <AppContext.Provider
      value={{ active, handleActiveContact, pathname, contactListData }}
    >
      {children}
    </AppContext.Provider>
  );
};
