import {test} from '@playwright/test'

test.describe('google text',() => {
    test.describe.configure({retries : 2})
    test.describe.configure({mode : "serial"})

    test.beforeEach(async({page}) => {
        await page.goto("https://www.google.com/")
    })

    test('input fields',async({page}) => {
        await page.getByText('.RNNXgb').fill('crayons')
    })

})

