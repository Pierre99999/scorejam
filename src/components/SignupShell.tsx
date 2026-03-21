'use client';

import { SignupProvider, useSignup } from './SignupContext';
import { SignupModal } from './SignupModal';
import type { ReactNode } from 'react';

function ModalRenderer() {
  const { isOpen, closeSignup } = useSignup();
  return <SignupModal isOpen={isOpen} onClose={closeSignup} />;
}

export function SignupShell({ children }: { children: ReactNode }) {
  return (
    <SignupProvider>
      {children}
      <ModalRenderer />
    </SignupProvider>
  );
}
