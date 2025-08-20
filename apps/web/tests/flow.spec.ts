import { test, expect } from '@playwright/test';

test.describe('@flow', () => {
  test('complete happy path flow', async ({ page }) => {
    // Start at position setup with auth
    await page.goto('/position/setup?auth=1');
    
    // Verify bottom nav is visible
    const bottomNav = page.locator('[data-testid="app-bottom-nav"]');
    await expect(bottomNav).toBeVisible();
    
    // Fill out the form
    await page.fill('input[name="baseAsset"]', 'ETH');
    await page.fill('input[name="quoteAsset"]', 'USDC');
    await page.fill('input[name="amount"]', '1000');
    
    // Submit form
    await page.click('button[type="submit"]');
    
    // Should navigate to performance page
    await expect(page).toHaveURL('/position/performance');
    
    // Verify performance content
    await expect(page.locator('[data-testid="screen-position-performance"]')).toBeVisible();
    
    // Click to see recommendations
    await page.click('text=See Recommendations');
    
    // Should navigate to recommendations
    await expect(page).toHaveURL('/recommendations');
    
    // Verify recommendations content
    await expect(page.locator('[data-testid="screen-recommendations"]')).toBeVisible();
    
    // Select first recommendation
    await page.click('text=Alpha Strategy');
    
    // Should navigate to optimal page
    await expect(page).toHaveURL('/recommendations/optimal');
    
    // Verify optimal content
    await expect(page.locator('[data-testid="screen-optimal"]')).toBeVisible();
    
    // Continue to execute
    await page.click('text=Continue to Execute');
    
    // Should navigate to execute page
    await expect(page).toHaveURL('/recommendations/execute');
    
    // Verify execute content
    await expect(page.locator('[data-testid="screen-execute"]')).toBeVisible();
    
    // Continue to complete
    await page.click('text=Continue');
    
    // Should navigate to complete page
    await expect(page).toHaveURL('/recommendations/complete');
    
    // Verify complete content
    await expect(page.locator('[data-testid="screen-complete"]')).toBeVisible();
    
    // View dashboard
    await page.click('text=View Dashboard');
    
    // Should navigate to dashboard with auth
    await expect(page).toHaveURL('/dashboard?auth=1');
    
    // Verify dashboard content
    await expect(page.locator('[data-testid="screen-dashboard"]')).toBeVisible();
  });
});
