import { test, expect } from '@playwright/test';

test.describe('Practice Login Tests', () => {

    // Runs before every test
    test.beforeEach(async ({ page }) => {
        await page.goto('https://practicetestautomation.com/practice-test-login/');
    });

    // Test Case 1 - Successful Login
    test('Successful Login', async ({ page }) => {

        await page.locator('#username').fill('student');
        await page.locator('#password').fill('Password123');
        await page.locator('#submit').click();

        // Verify successful login
        await expect(page.locator('h1')).toHaveText('Logged In Successfully');

        // Verify URL
        await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/');

    });

    // Test Case 2 - Wrong Username
    test('Wrong Username', async ({ page }) => {

        await page.locator('#username').fill('wronguser');
        await page.locator('#password').fill('Password123');
        await page.locator('#submit').click();

        // Verify error message
        await expect(page.locator('#error'))
            .toHaveText('Your username is invalid!');

    });

    // Test Case 3 - Empty Fields
    test('Empty Fields', async ({ page }) => {

        // Click Submit without entering username/password
        await page.locator('#submit').click();

        // Verify user is still on login page
        await expect(page).toHaveURL('https://practicetestautomation.com/practice-test-login/');

        // Verify login form is still visible
        await expect(page.locator('#username')).toBeVisible();
        await expect(page.locator('#password')).toBeVisible();
        await expect(page.locator('#submit')).toBeVisible();

    });

});