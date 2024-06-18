'use client';

import { Button } from '@mui/material';
import { signIn } from 'next-auth/react';

export default function LoginButton() {
  return (
    <Button color="inherit" onClick={() => signIn()}>
      Login
    </Button>
  );
}
