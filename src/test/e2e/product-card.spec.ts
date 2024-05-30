import { test, expect } from '@playwright/test';

test('ProductCard should display product details correctly', async ({ page }) => {
  // Navigate to the page where the ProductCard component is located
  await page.goto('http://localhost:5173');

  // Wait for the search input to be visible
  await page.waitForSelector('input[type="text"]', { state: 'visible' });

  // Enter text in the search field
  await page.fill('input[type="text"]', 'Fjallraven', { timeout: 90000 });

  // Wait for suggestions to appear
  await page.waitForSelector('.suggestions', { state: 'visible' });

  // Click on the first suggested product
  await page.click('.suggestions li:first-child', { timeout: 90000 });

  // Wait for the product card to be displayed
  await page.waitForSelector('.product-card', { state: 'visible' });

  // Verify that the details of the selected product are displayed
  const title = await page.textContent('.product-card h2');
  expect(title).toContain('Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops');

  // Other assertions to verify price, image, description, etc.
});