import {test , expect} from '@playwright/test'

test.describe('test suite',() => {
    test.beforeEach('loggin into webUrl',async({page}) => {
        const url = page.goto("https://admin-demo.nopcommerce.com/login?returnUrl=%2Fadmin%2F")
        await expect(page).toHaveURL("https://admin-demo.nopcommerce.com/login?returnUrl=%2Fadmin%2F")
    })
    test('login into portal',async({page}) => {
        const fields = page.locator('form').filter({hasText : "Welcome, please sign in!"})
        const emailInput = fields.getByRole('textbox',{name : "Email"})
        emailInput.fill("admin@yourstore.com")
        const passwordInput = fields.getByRole('textbox',{name: "Password"})
        passwordInput.fill("admin")
        const button = fields.getByRole('button',{name : "Log in"})
        button.click()
    })

})