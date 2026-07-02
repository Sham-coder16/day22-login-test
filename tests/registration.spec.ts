import { test, expect } from '@playwright/test';

test('Registration', async ({ page }) => {
    await page.goto('https://practicetestautomation.com/practice-test-login/');

    await page.locator('#username').fill('student');
    await page.locator('#password').fill('Password123');
    await page.locator('#submit').click();

    await expect(page).toHaveURL(
        'https://practicetestautomation.com/logged-in-successfully/'
    );

    // Verify successful login
    await expect(page.locator('h1')).toHaveText('Logged In Successfully');
});