import { test, expect } from '@playwright/test';

test('User can add a product to the cart', async ({ page }) => {
  await page.goto('/');

  await page.locator('.card-title a').first().click();

  page.on('dialog', dialog => dialog.accept());

  await page.getByRole('link', { name: 'Add to cart' }).click();

  await page.getByRole('link', { name: 'Cart' }).click();

  await expect(page.locator('#tbodyid tr')).toHaveCount(1);
});
