import { test, expect } from '@playwright/test';

test('Registration', async ({ page }) => {

    const username = process.env.TEST_USERNAME as string;
    const password = process.env.TEST_PASSWORD as string;

    await page.goto('https://practicetestautomation.com/practice-test-login/');

    await page.locator('#username').fill(username);
    await page.locator('#password').fill(password);
    await page.locator('#submit').click();

    await expect(page).toHaveURL(
        'https://practicetestautomation.com/logged-in-successfully/'
    );

    // Verify successful login
    await expect(page.locator('h1')).toHaveText('Logged In Successfully');
});