name: Playwright CI Pipeline

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]
  schedule:
    - cron: "0 2 * * *"

jobs:
  tests:
    runs-on: ubuntu-latest

    steps:
      # 1. Checkout code
      - name: Checkout repository
        uses: actions/checkout@v4

      # 2. Setup Node.js
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 18

      # 3. Install project dependencies
      - name: Install dependencies
        run: npm ci

      # 4. Install Chromium browser only
      - name: Install Playwright Chromium
        run: npx playwright install chromium

      # 5. Run ONLY registration test in Chromium
      - name: Run Playwright Tests
        env:
          TEST_USERNAME: ${{ secrets.TEST_USERNAME }}
          TEST_PASSWORD: ${{ secrets.TEST_PASSWORD }}
        run: npx playwright test tests/registration.spec.ts --project=chromium

      # 6. Upload HTML Report
      - name: Upload Playwright Report
        if: always()
        uses: actions/upload-artifact@v4
        with:
          name: playwright-report
          path: playwright-report