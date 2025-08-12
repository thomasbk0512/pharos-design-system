import { test, expect } from '@playwright/test'
import { AxeBuilder } from '@axe-core/playwright'

const base = 'http://localhost:3000/design-system'

const sections = [
  'brand-status',
  'typography',
  'buttons',
  'inputs',
  'metric-stepper',
  'cards-elevation',
  'spacing-radius',
  'foundations-layout',
  'foundations-motion',
  'foundations-density',
  'foundations-zindex',
  'foundations-dataviz',
  'controls',
  'tabs',
  'feedback',
  'table-pagination',
  'empty-tags',
  'governance'
]

// Helper to capture a section by data-testid
async function snapSection(page, id) {
  const sel = `[data-testid="section-${id}"]`
  await page.waitForSelector(sel)
  const el = await page.locator(sel)
  await expect(el).toBeVisible()
  await expect(el).toHaveScreenshot(`${id}.png`, { animations: 'disabled', fullPage: false })
}

// Full test suite for CI
test.describe('Full Suite', () => {
  sections.forEach(id => {
    test(`snapshot: ${id}`, async ({ page }) => {
      await page.goto(base)
      await page.setViewportSize({ width: 1280, height: 900 })
      await snapSection(page, id)
    })
  })

  test.beforeEach(async ({ page }) => {
    await page.goto(base)
  })

  sections.forEach(id => {
    test(`a11y: ${id}`, async ({ page }) => {
      const sel = `[data-testid="section-${id}"]`
      await page.waitForSelector(sel)
      const results = await new AxeBuilder({ page }).include(sel).analyze()
      expect(results.violations).toEqual([])
    })
  })
})

// Smoke tests for fast pre-commit
test.describe('@smoke', () => {
  const smoke = ['foundations-layout', 'controls', 'governance']
  
  // Test ToC navigation
  test('ToC navigation works correctly', async ({ page }) => {
    await page.goto(base)
    await page.setViewportSize({ width: 1280, height: 900 })
    
    // Check that all ToC links point to valid sections
    const tocLinks = page.locator('nav a')
    await expect(tocLinks).toHaveCount(16) // Should have 16 sections now
    
    // Test a few key navigation links
    await page.click('nav a[href="#foundations-layout"]')
    await expect(page.locator('#foundations-layout')).toBeVisible()
    
    await page.click('nav a[href="#controls"]')
    await expect(page.locator('#controls')).toBeVisible()
    
    await page.click('nav a[href="#governance"]')
    await expect(page.locator('#governance')).toBeVisible()
  })
  
  smoke.forEach(id => {
    test(`snapshot @smoke: ${id}`, async ({ page }) => {
      await page.goto(base)
      await page.setViewportSize({ width: 1280, height: 900 })
      await snapSection(page, id)
    })
  })

  test.beforeEach(async ({ page }) => {
    await page.goto(base)
  })

  smoke.forEach(id => {
    test(`a11y @smoke: ${id}`, async ({ page }) => {
      const sel = `[data-testid="section-${id}"]`
      await page.waitForSelector(sel)
      const results = await new AxeBuilder({ page }).include(sel).analyze()
      expect(results.violations).toEqual([])
    })
  })
})
