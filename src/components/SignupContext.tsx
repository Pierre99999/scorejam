'use client';
import { createContext, useContext, useState, type ReactNode } from 'react';

interface SignupContextType {
  isOpen: boolean;
  openSignup: () => void;
  closeSignup: () => void;
  isContactSalesOpen: boolean;
  openContactSales: () => void;
  closeContactSales: () => void;
}

const SignupContext = createContext<SignupContextType>({
  isOpen: false,
  openSignup: () => {},
  closeSignup: () => {},
  isContactSalesOpen: false,
  openContactSales: () => {},
  closeContactSales: () => {},
});

export function SignupProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isContactSalesOpen, setIsContactSalesOpen] = useState(false);
  return (
    <SignupContext.Provider
      value={{
        isOpen,
        openSignup: () => setIsOpen(true),
        closeSignup: () => setIsOpen(false),
        isContactSalesOpen,
        openContactSales: () => setIsContactSalesOpen(true),
        closeContactSales: () => setIsContactSalesOpen(false),
      }}
    >
      {children}
    </SignupContext.Provider>
  );
}

export function useSignup() {
  return useContext(SignupContext);
}
