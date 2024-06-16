import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import type { Metadata } from 'next';
import Header from '~/ui/components/Header';
import { darkTheme } from '~/ui/themes';

export const metadata: Metadata = {
  title: 'shoplog',
  description: 'Vehicle Maintenance Log Application',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={darkTheme}>
            <Header />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
