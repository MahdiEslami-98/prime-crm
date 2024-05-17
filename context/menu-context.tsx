"use client";
import { useState } from "react";
import { createContext } from "vm";

export const MenubarStatus = createContext({
  isOpen: false,
  setIsOpen: (value: boolean) => {},
});

const MenubarStatusProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <MenubarStatus.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </MenubarStatus.Provider>
  );
};

export default MenubarStatusProvider;
