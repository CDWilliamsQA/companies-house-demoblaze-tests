import { test, expect } from '@playwright/test';

test('User can place an order from the cart', async ({ page }) => {
  await page.goto('/');

  await page.locator('.card-title a').first().click();

  page.on('dialog', dialog => dialog.accept());
  await page.getByRole('link', { name: 'Add to cart' }).click();

  await page.getByRole('link', { name: 'Cart' }).click();
  await page.getByRole('button', { name: 'Place Order' }).click();

  await page.fill('#name', 'Test User');
  await page.fill('#country', 'UK');
  await page.fill('#city', 'London');
  await page.fill('#card', '4111111111111111');
  await page.fill('#month', '01');
  await page.fill('#year', '2026');

  await page.getByRole('button', { name: 'Purchase' }).click();

  await expect(page.locator('.sweet-alert')).toBeVisible();
});
