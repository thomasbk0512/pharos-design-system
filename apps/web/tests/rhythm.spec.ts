import { test, expect } from '@playwright/test';

test.describe('@rhythm', () => {
  test('position setup has correct spacing tokens', async ({ page }) => {
    await page.goto('/position/setup');
    
    // Check for spacing tokens - look for the form element specifically
    const form = page.locator('form[data-testid="screen-position-setup"]');
    await expect(form).toBeVisible();
    
    // Debug: log what classes are actually present
    const classes = await form.evaluate((el) => el.className);
    console.log('Found form classes:', classes);
    
    // Verify the ph-spacer-24 token class is present
    const hasSpacing = await form.evaluate((el) => {
      const classes = el.className;
      return classes.includes('ph-spacer-24');
    });
    
    expect(hasSpacing).toBeTruthy();
  });
});
