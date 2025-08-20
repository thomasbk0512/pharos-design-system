import { test, expect } from '@playwright/test';

test.describe('@smoke', () => {
  test('basic app functionality', async ({ page }) => {
    // Basic smoke test to verify app loads
    await page.goto('/');
    await expect(page.locator('h1')).toBeVisible();
    
    // Verify basic navigation works
    await page.goto('/position/setup');
    await expect(page.locator('[data-testid="screen-position-setup"]')).toBeVisible();
  });
});
