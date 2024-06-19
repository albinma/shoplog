import { test as setup } from '@playwright/test';

setup('global setup', async ({}) => {
  console.log('Global setup...');
});
