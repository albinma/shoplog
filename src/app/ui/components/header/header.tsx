import { AppBar, Box, CssBaseline, Toolbar, Typography } from '@mui/material';
import { auth } from '~/common/auth/auth';
import { LoginButton, LogoutButton } from '~/ui/components';

export default async function Header() {
  const session = await auth();

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Vehicle Maintenance Log
          </Typography>
          <>{session ? <LogoutButton /> : <LoginButton />}</>
        </Toolbar>
      </AppBar>
      {/**
       * When you render the app bar position fixed, the dimension of the element doesn't impact the rest of the page.
       * This can cause some part of your content to be invisible, behind the app bar.
       * Rendering an extra Toolbar is one of the recommended ways to get around this.  */}
      <Toolbar />
    </Box>
  );
}
