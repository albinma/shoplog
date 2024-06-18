'use client';

import { Button } from '@mui/material';

export default function LogoutButton() {
  return (
    <Button color="inherit" href="/api/auth/logout">
      Logout
    </Button>
  );
}
