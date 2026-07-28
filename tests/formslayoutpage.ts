import {test,TestOptions} from './Test-options'
import {expect} from '@playwright/test'
//import { TIMEOUT } from 'node:dns'

test.describe.configure({mode : 'parallel'})

 test.describe('suite 1',() => {
  test.beforeEach(async({page}) => {
      await page.goto("/")
      const url = "http://localhost:4200/pages/iot-dashboard"
      await page.screenshot({path : 'screenshots/formslayoutPage.png'})
      await expect(page).toHaveURL(url)
  })
   test('input fields with webpage',async({page}) => {
         test.describe.configure({mode : 'serial'})
         test.describe.configure({retries : 2})
        //  await page.getByText('Forms').click()
        //  await page.getByText('Form Layouts').click()
         const formfill = page.locator('nb-card').filter({hasText : 'Inline form'}).screenshot({path : 'screenshots/formslayoutPage.png'})
         await page.waitForTimeout(2000)
         await page.getByPlaceholder('Jane Doe').fill("test123")
         await page.getByPlaceholder('Email').fill('ash123@test.com')
   })
 })