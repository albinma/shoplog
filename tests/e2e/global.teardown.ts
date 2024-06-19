import { test as teardown } from '@playwright/test';

teardown('global teardown', async ({}) => {
  console.log('Global tear down...');
});
