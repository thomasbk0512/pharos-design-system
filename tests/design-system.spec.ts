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
    await expect(tocLinks).toHaveCount(23) // Should have 23 sections now (including new form and feedback sections)
    
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

async function assertNoSeriousOrCritical(page, selector: string) {
  const results = await new AxeBuilder({ page }).include(selector).analyze()
  const bad = results.violations.filter(v => v.impact === 'serious' || v.impact === 'critical')
  if (bad.length) {
    const details = bad.map(v => `• [${v.impact}] ${v.id}: ${v.help} (${v.nodes.length} nodes)`).join('\n')
    throw new Error(`A11y violations (serious/critical) in ${selector}:\n${details}`)
  }
}

// Use the existing smoke sections for a11y testing
const smokeA11y = ['foundations-layout', 'controls', 'governance']

smokeA11y.forEach(id => {
  test(`a11y (serious/critical only) @smoke: ${id}`, async ({ page }) => {
    await page.goto(base)
    const sel = `[data-testid="section-${id}"]`
    await page.waitForSelector(sel)
    await assertNoSeriousOrCritical(page, sel)
  })
})

test('snapshot @dark: theme-dark', async ({ page }) => {
  await page.goto('http://localhost:3000/design-system')
  await page.evaluate(() => document.documentElement.classList.add('dark'))
  const sel = '[data-testid="section-theme-dark"]'
  await page.waitForSelector(sel)
  const el = page.locator(sel)
  await expect(el).toBeVisible()
  await expect(el).toHaveScreenshot('theme-dark.png', { animations: 'disabled' })
})

test.describe('@search', () => {
  test('filters and jumps to Governance', async ({ page }) => {
    await page.goto('http://localhost:3000/design-system')
    const input = page.getByTestId('docs-search-input')
    await input.fill('govern')

    const results = page.getByTestId('docs-search-results').locator('a')
    await expect(results).toHaveCount(1)
    await expect(results.first()).toHaveText(/Governance/i)

    await results.first().click()
    await expect(page).toHaveURL(/#governance$/)

    const section = page.locator('[data-testid="section-governance"]')
    await expect(section).toBeVisible()
  })

  test('shows empty state for no matches', async ({ page }) => {
    await page.goto('http://localhost:3000/design-system')
    const input = page.getByTestId('docs-search-input')
    await input.fill('zzzz-not-a-real-section')
    await expect(page.getByTestId('docs-search-empty')).toBeVisible()
  })
})

test.describe('@iconography', () => {
  test('iconography section renders', async ({ page }) => {
    await page.goto('http://localhost:3000/design-system')
    const sel = '[data-testid="section-iconography"]'
    await page.waitForSelector(sel)
    await expect(page.locator(sel)).toBeVisible()
  })
})

test.describe('@forms-coverage', () => {
  const ids = ['forms-select','forms-date','feedback-skeleton','forms-inline-validation']
  ids.forEach(id => {
    test(`section renders: ${id}`, async ({ page }) => {
      await page.goto('http://localhost:3000/design-system')
      const sel = `[data-testid="section-${id}"]`
      await page.waitForSelector(sel)
      await expect(page.locator(sel)).toBeVisible()
    })
  })
})
