import { test, expect } from '@playwright/test';

test.describe('@wallet', () => {
  test('wallet connect flow', async ({ page }) => {
    // Navigate to connect page with auth
    await page.goto('/execute/connect?auth=1');
    
    // Verify bottom nav is visible
    const bottomNav = page.locator('[data-testid="app-bottom-nav"]');
    await expect(bottomNav).toBeVisible();
    
    // Verify connect page content
    await expect(page.locator('[data-testid="screen-connect"]')).toBeVisible();
    
    // Click to open connect dialog
    await page.click('[data-testid="open-connect-dialog"]');
    
    // Wait for dialog to be visible and verify it
    const dialog = page.locator('.fixed.inset-0.z-50');
    await expect(dialog).toBeVisible();
    
    // Verify dialog title
    const dialogTitle = dialog.locator('h2:has-text("Connect Wallet")');
    await expect(dialogTitle).toBeVisible();
    
    // Click connect button within the dialog
    const connectButton = dialog.locator('button:has-text("Connect")');
    await expect(connectButton).toBeVisible();
    await connectButton.click();
    
    // Dialog should close and page should show "Wallet Connected"
    await expect(page.locator('text=Wallet Connected')).toBeVisible();
    
    // Click continue to go to recommendations/complete
    await page.click('text=Continue');
    
    // Should navigate to complete page
    await expect(page).toHaveURL('/recommendations/complete');
    
    // Click view dashboard
    await page.click('text=View Dashboard');
    
    // Should navigate to dashboard with auth
    await expect(page).toHaveURL('/dashboard?auth=1');
    
    // Since store.reset() is called, wallet status should show as disconnected
    const walletStatus = page.locator('text=Wallet: Disconnected');
    await expect(walletStatus).toBeVisible();
  });
});
