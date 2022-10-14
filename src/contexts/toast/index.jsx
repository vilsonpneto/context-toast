import { createContext, useContext, useState } from "react";
import { v4 as uuid } from "uuid";

export const ContextToast = createContext();

export const ToastProvider = ({ children }) => {
  const [listToast, setListToast] = useState([
    { id: uuid(), message: "Deu bom!", mode: "success", ms: 2000 },
  ]);

  const toast = (message, mode, ms) => {
    const newToast = { id: uuid(), message, mode, ms };
    setListToast([...listToast, newToast]);
  };

  const removeToast = (id) => {
    const filteredList = listToast.filter((toast) => toast.id !== id);
    setListToast(filteredList);
  };

  return (
    <ContextToast.Provider value={{ listToast, toast, removeToast }}>
      {children}
    </ContextToast.Provider>
  );
};

export const useToast = () => useContext(ContextToast);
