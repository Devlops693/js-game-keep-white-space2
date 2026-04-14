import { test, expect } from '@playwright/test';

test('la page principale se charge', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('body')).toBeVisible();
});
