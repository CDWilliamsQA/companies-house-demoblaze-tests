import { test, expect } from '@playwright/test';

test('User can navigate to a product category', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('link', { name: 'Phones' }).click();

  // Validate that product cards are visible
  const products = page.locator('.card');
  await expect(products.first()).toBeVisible();
});
