import { test, expect } from '@playwright/test';

test.describe('@smoke', () => {
  test('basic app functionality', async ({ page }) => {
    // Basic smoke test to verify app loads and redirects
    await page.goto('/');
    
    // Should redirect to setup page with auth
    await expect(page).toHaveURL('/position/setup?auth=1');
    
    // Verify basic navigation works
    await page.goto('/position/setup');
    await expect(page.locator('[data-testid="screen-position-setup"]')).toBeVisible();
  });
});
