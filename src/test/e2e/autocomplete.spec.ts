import { test, expect } from '@playwright/test';

test('Autocomplete should display suggestions when typing', async ({ page }) => {
  // Navigate to the page where the Autocomplete component is located
  await page.goto('http://localhost:5173');

  // Wait for the search input to be visible
  await page.waitForSelector('input[type="text"]', { state: 'visible' });

  // Enter text in the search field
  await page.fill('input[type="text"]', 'Fjallraven', { timeout: 90000 });

  // Wait for suggestions to appear
  await page.waitForSelector('.suggestions', { state: 'visible' });

  // Verify that the expected suggestions are displayed
  const suggestions = await page.$$eval('.suggestions li', (elements) =>
    elements.map((el) => el.textContent)
  );
  expect(suggestions).toContain('Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops');
});