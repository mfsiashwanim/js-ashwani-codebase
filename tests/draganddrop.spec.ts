import {expect} from '@playwright/test'
import {test} from './Test-options'

test.describe('suite 1',() => {
  test.beforeEach(async({page, globalQAUrl}) => {
      await page.goto(globalQAUrl)
      const url = "http://localhost:4200/pages/iot-dashboard"
      await page.screenshot({path : 'screenshots/formslayoutPage.png'})
      await expect(page).toHaveURL(url)
  })

  test('drag n drop', async({page,}) =>{
       const frame = page.frameLocator("rel-title='Photo Manager'] iframe")
       await frame.locator('li', {hasText : "High Tatras 2"}).dragTo(frame.locator('trash'))
       await frame.locator('li', {hasText : "High Tatras 4"}).
  }
          
//          test.describe.configure({retries : 2})
//          await page.getByText('Forms').click()
//          await page.getByText('Form Layouts').click()
//          const formfill = page.locator('nb-card').filter({hasText : 'Inline form'}).screenshot({path : 'screenshots/formslayoutPage.png'})
//          await page.waitForTimeout(2000)
//          await page.getByPlaceholder('Jane Doe').fill("test123")
//          await page.getByPlaceholder('Email').fill('ash123@test.com')
//    })