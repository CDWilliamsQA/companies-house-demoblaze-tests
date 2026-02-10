import { test, expect } from '@playwright/test';

test('Cart displays correct product information', async ({ page }) => {
  await page.goto('/');

  const productName = await page.locator('.card-title a').first().innerText();
  await page.locator('.card-title a').first().click();

  page.on('dialog', dialog => dialog.accept());
  await page.getByRole('link', { name: 'Add to cart' }).click();

  await page.getByRole('link', { name: 'Cart' }).click();

  await expect(page.locator('#tbodyid')).toContainText(productName);
});
