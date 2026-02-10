import { test, expect } from '@playwright/test';

test('User can view product details', async ({ page }) => {
  await page.goto('/');

  await page.locator('.card-title a').first().click();

  await expect(page.locator('.name')).toBeVisible();
  await expect(page.locator('.price-container')).toBeVisible();
  await expect(page.locator('#more-information')).toBeVisible();
});
