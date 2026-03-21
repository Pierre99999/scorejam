'use client';

import { SignupProvider, useSignup } from './SignupContext';
import { SignupModal } from './SignupModal';
import { ThemeProvider } from './ThemeProvider';
import type { ReactNode } from 'react';

function ModalRenderer() {
  const { isOpen, closeSignup } = useSignup();
  return <SignupModal isOpen={isOpen} onClose={closeSignup} />;
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
