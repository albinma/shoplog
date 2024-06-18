'use client';

import { Button } from '@mui/material';

export default function LoginButton() {
  return (
    <Button color="inherit" href="/api/auth/login">
      Login
    </Button>
  );
}
