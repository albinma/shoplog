'use client';

import { Button } from '@mui/material';
import { signOut } from '~/common/auth/auth';

export default function LogoutButton() {
  return (
    <Button color="inherit" onClick={() => signOut()}>
      Logout
    </Button>
  );
}
