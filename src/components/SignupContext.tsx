'use client';
import { createContext, useContext, useState, type ReactNode } from 'react';

interface SignupContextType {
  isOpen: boolean;
  openSignup: () => void;
  closeSignup: () => void;
}

const SignupContext = createContext<SignupContextType>({
  isOpen: false,
  openSignup: () => {},
  closeSignup: () => {},
});

export function SignupProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <SignupContext.Provider
      value={{
        isOpen,
        openSignup: () => setIsOpen(true),
        closeSignup: () => setIsOpen(false),
      }}
    >
      {children}
    </SignupContext.Provider>
  );
}

export function useSignup() {
  return useContext(SignupContext);
}
