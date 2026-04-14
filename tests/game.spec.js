import { test, expect } from '@playwright/test';

test('la page principale se charge', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Keep white space/i);
});

test('le conteneur du jeu existe', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('#gamepanel')).toBeVisible();
});

test('le jeu crée ses canvases', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('canvas')).toHaveCount(5);
});