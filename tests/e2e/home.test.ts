import { expect, test } from '@playwright/test';

test('should navigate home page', async ({ page, context }) => {
  // dotenv.config({
  //   path: '.env',
  //   override: true,
  // });
  // const cookieName = 'appSession';
  // const cookieSecret = process.env.AUTH0_SECRET;
  // const accessToken =
  //   'eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIiwiaXNzIjoiaHR0cHM6Ly9zaG9wbG9nLWRldi51cy5hdXRoMC5jb20vIn0..XriGDg9PA9vn0oje.2UVGv_iOqaVauBpXFmV0J43WHGy3Zvaz1kTa102xWFIQA1hka48Nlupuez1Bi0HIzIXOesY6o0evqdNLIhDUYbXaHmWxpZLp6dGEPNleQNl73MLNcrJKt0za5o9BTtnpHwEeW5V_hzl_pit7ScGN7TpK1MDQ85D-VRJ-ERCXu_rxczbYWnffFenPyIDCPQYHcy9aHXfWHmlDhuDPIlDMxPyAFe_tt8d3Tm_PH79XAXo1bdY2uhSHAWJXkFq3HBpHuwiOUmS8kzJYm1pJ4RrwYYGDt8reYmd-IY0C2XpojBNjdkLArj6uFjzojnvnBK0s-nv1YQXx93EM6m_6WrbajBwnYT3GybxXsPZuvXvP3g.K7UqPOOEfqqU1CgRM1hVUA';
  // const idToken =
  //   'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImJ5TmNoaVVnTHJFT3NBS3UzUzdTLSJ9.eyJuaWNrbmFtZSI6InRlc3QiLCJuYW1lIjoidGVzdEBzaG9wbG9nLmNvbSIsInBpY3R1cmUiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci9lNTJiMzJiNzJkMmUwMWQ0Y2MzZjhmMTQ2OTQ4ZmRjND9zPTQ4MCZyPXBnJmQ9aHR0cHMlM0ElMkYlMkZjZG4uYXV0aDAuY29tJTJGYXZhdGFycyUyRnRlLnBuZyIsInVwZGF0ZWRfYXQiOiIyMDI0LTA2LTE5VDIzOjAyOjA0LjgxN1oiLCJlbWFpbCI6InRlc3RAc2hvcGxvZy5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6Ly9zaG9wbG9nLWRldi51cy5hdXRoMC5jb20vIiwiYXVkIjoiVlNpVjRPeDZ5aW5xR0EyeVZFaFVyQXcxNnRrak1BeTIiLCJpYXQiOjE3MTg4MzgxMjQsImV4cCI6MTcxODg3NDEyNCwic3ViIjoiYXV0aDB8NjY3MGYxYzM5NGQxYmFiZWExNTkzYzM2In0.rHyvjxWolPK00-SfJWvssmZTYx7SQWEr2QvlAHV5P9Y62P7xt_H9zqJGBq5mKBYKfeEOJHx5s_GaP7fqWnX0jc_kRiYYHZytMhX2EwiwmtCJp0E9vRJubyZ6ev5c-R-pnqvAY_y3bsdjPqvnapq0N_HzSJF9gzIY65wVCkIhqqYQR8y-ecZAg1XKQY8IqqajcLDx6SXuF2hm0CKv87ONZrt-rjaVxU_ZslFx0rDLDZSskGf7rb6G-CgPGTuLOMPjqFgLjtzHx5x6PcxT3-w3jTGwdy6ABK4BRV7BMtOpKIyFrevzK5ICByDy9nLljP5TnEw3XEHgVSjaYSMnyh_AOQ';
  // const accessTokenScope = 'openid profile email address phone';
  // const cookieValue = await generateSessionCookie(
  //   {
  //     accessToken,
  //     accessTokenScope,
  //     idToken,
  //     user: {
  //       email: 'test@shoplog.com',
  //     },
  //   },
  //   {
  //     secret: cookieSecret!,
  //     domain: 'localhost',
  //     path: '/',
  //     httpOnly: true,
  //     secure: true,
  //     sameSite: 'lax',
  //     duration: 60 * 60 * 24 * 7,
  //   },
  // );
  // await context.addCookies([
  //   {
  //     name: cookieName,
  //     value: cookieValue,
  //     domain: 'localhost',
  //     path: '/',
  //     httpOnly: true,
  //     secure: true,
  //     sameSite: 'Lax',
  //     expires: DateTime.utc().plus({ days: 7 }).toUnixInteger(),
  //   },
  // ]);
  await page.goto('/');
  console.log(await context.cookies());
  await expect(page.getByTestId('header-title')).toContainText(
    'Vehicle Maintenance Log',
  );
});
