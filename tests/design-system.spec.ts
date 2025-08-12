import { test, expect } from '@playwright/test'

const base = 'file:///Users/thomaskurth/design-system/test-toc.html'

test('PHAROS Design System - Basic Structure', async ({ page }) => {
  await page.goto(base)
  await page.setViewportSize({ width: 1280, height: 900 })
  
  // Check that the page loads
  await expect(page).toHaveTitle(/PHAROS Table of Contents/)
  
  // Check that the ToC exists
  const toc = page.locator('nav')
  await expect(toc).toBeVisible()
  
  // Check that some navigation links exist
  const links = page.locator('nav a')
  await expect(links).toHaveCount(18)
  
  // Check that the main content area exists
  const content = page.locator('main, .max-w-7xl')
  await expect(content).toBeVisible()
  
  // Basic visual verification - page should render without errors
  await expect(page.locator('body')).toBeVisible()
})
