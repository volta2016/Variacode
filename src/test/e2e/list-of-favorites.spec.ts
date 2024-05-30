import { test, expect } from '@playwright/test';

test('ListOfFavorites should display favorite products correctly', async ({ page }) => {
  // Navigate to the page where the ListOfFavorites component is located
  await page.goto('http://localhost:5173');

  // Wait for favorite products to be displayed
  await page.waitForSelector('.favorites-grid', { state: 'visible' });

  // Verify that the expected favorite products are displayed
  const favorites = await page.$$eval('.favorite-item span', (elements) =>
    elements.map((el) => el.textContent)
  );
  expect(favorites).toContain('Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops');
});