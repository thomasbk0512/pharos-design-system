import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './tests',
  snapshotPathTemplate: '{testDir}/__screenshots__/{arg}{ext}',
  use: {
    viewport: { width: 1280, height: 900 },
    colorScheme: 'light',
    ignoreHTTPSErrors: true,
  },
  webServer: {
    command: 'npm run build && npm run start',
    url: 'http://localhost:3000/design-system',
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
})
