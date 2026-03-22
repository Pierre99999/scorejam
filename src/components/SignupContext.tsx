'use client';
import { createContext, useContext, useState, type ReactNode } from 'react';

interface SignupContextType {
  isOpen: boolean;
  openSignup: () => void;
  closeSignup: () => void;
  isContactSalesOpen: boolean;
  openContactSales: () => void;
  closeContactSales: () => void;
  isLoginOpen: boolean;
  openLogin: () => void;
  closeLogin: () => void;
}

const SignupContext = createContext<SignupContextType>({
  isOpen: false,
  openSignup: () => {},
  closeSignup: () => {},
  isContactSalesOpen: false,
  openContactSales: () => {},
  closeContactSales: () => {},
  isLoginOpen: false,
  openLogin: () => {},
  closeLogin: () => {},
});

export function SignupProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isContactSalesOpen, setIsContactSalesOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  return (
    <SignupContext.Provider
      value={{
        isOpen,
        openSignup: () => setIsOpen(true),
        closeSignup: () => setIsOpen(false),
        isContactSalesOpen,
        openContactSales: () => setIsContactSalesOpen(true),
        closeContactSales: () => setIsContactSalesOpen(false),
        isLoginOpen,
        openLogin: () => setIsLoginOpen(true),
        closeLogin: () => setIsLoginOpen(false),
      }}
    >
      {children}
    </SignupContext.Provider>
  );
}

export function useSignup() {
  return useContext(SignupContext);
}
