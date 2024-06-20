import { test as base } from '@playwright/test';
import { setupApp } from './setupApp';

export const test = base.extend<{}, { urlBase: string }>({
  urlBase: [
    async ({}, use, workerInfo) => {
      const hostname = 'localhost';
      const port = 3000 + workerInfo.workerIndex;

      await setupApp(port);
      await use(`http://${hostname}:${port}`);
    },
    {
      scope: 'worker',
    },
  ],
});
