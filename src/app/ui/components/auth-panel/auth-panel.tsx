import { getSession } from '@auth0/nextjs-auth0';
import LoginButton from '~/ui/components/auth-panel/login.button';
import LogoutButton from '~/ui/components/auth-panel/logout.button';

export default async function AuthPanel() {
  const session = await getSession();

  return session ? <LogoutButton /> : <LoginButton />;
}
