'use client';

import { PaletteMode } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const makeTheme = (mode: PaletteMode) =>
  createTheme({
    palette: {
      mode,
    },
    typography: {
      fontFamily: roboto.style.fontFamily,
    },
  });

const darkTheme = makeTheme('dark');
const lightTheme = makeTheme('light');

export { darkTheme, lightTheme };
