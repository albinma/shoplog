import { expect, test } from '@playwright/test';

test('should navigate home page', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByTestId('header-title')).toContainText(
    'Vehicle Maintenance Log',
  );
});
