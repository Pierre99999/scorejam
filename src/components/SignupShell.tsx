'use client';

import { SignupProvider, useSignup } from './SignupContext';
import { SignupModal } from './SignupModal';
import { ContactSalesModal } from './ContactSalesModal';
import { ThemeProvider } from './ThemeProvider';
import type { ReactNode } from 'react';

function ModalRenderer() {
  const { isOpen, closeSignup, isContactSalesOpen, closeContactSales } = useSignup();
  return (
    <>
      <SignupModal isOpen={isOpen} onClose={closeSignup} />
      <ContactSalesModal isOpen={isContactSalesOpen} onClose={closeContactSales} />
    </>
  );
}

export function SignupShell({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <SignupProvider>
        {children}
        <ModalRenderer />
      </SignupProvider>
    </ThemeProvider>
  );
}
