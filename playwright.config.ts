import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30_000,
  expect: {
    timeout: 5_000
  },
  use: {
    baseURL: 'https://www.demoblaze.com',
    headless: true,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 5_000,
    ignoreHTTPSErrors: true
  },
  reporter: [['list']]
});
