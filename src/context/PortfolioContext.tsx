"use client";
import React, { createContext, ReactNode, useState } from "react";

type PortfolioContextProps = {
  dark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export const PortfolioContext = createContext<
  PortfolioContextProps | undefined
>(undefined);

type PortfolioProviderProps = {
  children: ReactNode;
};

export function PortfolioProvider({ children }: PortfolioProviderProps) {
  const [dark, setDark] = useState(true);
  const [showModal, setShowModal] = useState(false);

  return (
    <PortfolioContext.Provider
      value={{ dark, setDark, showModal, setShowModal }}
    >
      {children}
    </PortfolioContext.Provider>
  );
}
