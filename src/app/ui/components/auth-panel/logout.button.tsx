'use client';

import { Button, Typography } from '@mui/material';

export default function LogoutButton() {
  return (
    <Button color="inherit" href="/api/auth/logout">
      <Typography textAlign="center">Logout</Typography>
    </Button>
  );
}
