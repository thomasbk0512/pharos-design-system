import { test, expect } from '@playwright/test';

test.describe('@templates', () => {
  test('bottom nav height is ~104px when ?auth=1', async ({ page }) => {
    await page.goto('/dashboard?auth=1');
    
    const bottomNav = page.locator('[data-testid="app-bottom-nav"]');
    await expect(bottomNav).toBeVisible();
    
    const box = await bottomNav.boundingBox();
    expect(box?.height).toBeCloseTo(104, 0);
  });
});
