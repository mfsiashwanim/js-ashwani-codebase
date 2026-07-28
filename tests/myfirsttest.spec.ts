import {test , expect} from '@playwright/test'
//import { TIMEOUT } from 'node:dns'

test.describe.configure({mode : 'parallel'})

 test.describe('suite 1',() => {
  test.beforeEach(async({page}) => {
      await page.goto("/")
      const url = "http://localhost:4200/pages/iot-dashboard"
      await page.screenshot({path : 'screenshots/formslayoutPage.png'})
      await expect(page).toHaveURL(url)
  })
   test('input fields with webpage @smoke-test',async({page}) => {
         test.describe.configure({mode : 'serial'})
         test.describe.configure({retries : 2})
         await page.getByText('Forms').click()
         await page.getByText('Form Layouts').click()
         const formfill = page.locator('nb-card').filter({hasText : 'Inline form'}).screenshot({path : 'screenshots/formslayoutPage.png'})
         await page.waitForTimeout(2000)
         await page.getByPlaceholder('Jane Doe').fill("test123")
         await page.getByPlaceholder('Email').fill('ash123@test.com')
   })

// test('test case for field validation orangeHRM',async({page}) => {
//     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
//     await page.getByRole('textbox',{name : "username"}).fill("Admin")
//     const inputfieldusername = page.getByRole('textbox',{name : "username"}).fill("Admin")
//  //   await expect(inputfieldusername).toHaveValue("Admin")
//     await page.getByRole('textbox',{name : "Password"}).fill("admin123")
//     await page.locator(".oxd-sidepanel-body .oxd-main-menu .oxd-main-menu-item-wrapper").nth(0).click()
//  })

//  test('parent class locators',async({page}) => {
//     await page.locator('nb-card',{hasText : "Using the grid"}).getByRole('textbox',{name : 'email'}).click() // nb-card is the parent of body tag having lable and input fields 
//     await page.locator('nb-card',{has : page.locator('.status-danger')}).click()
//     await page.locator('n-card')
//  }) 

  // test('reusing locators',async({page}) => {
  //   await page.goto("http://localhost:4200/")
  //   const loginform = page.locator('nb-card').filter({hasText : "Basic form"})
  //   const emailid = loginform.getByPlaceholder('Email')
  //   await emailid.fill("test123@test.com",{timeout : 3000})
  //   const inputval = await emailid.inputValue()
  //   expect(inputval).toEqual("test123@test.com")
  //   const passwordfield = loginform.getByPlaceholder('Password')
  //   passwordfield.fill("Password123")
  //   const submitbutton = loginform.getByPlaceholder('Email')
  //   await submitbutton.click()

  // })

  test('radio buttons extracting values  @smoke-test',async({page}) => {
    test.describe.configure({mode : 'serial'})
     await page.goto("/")
     await page.screenshot({path : 'screenshots/formslayoutPage.png'})
     const radiobuttons = await page.locator('nb-card').filter({hasText : 'Option 1'})
     radiobuttons.check()
  })

//  test('textfield extracting values',async({page}) => {
//     await page.goto("https://admin-demo.nopcommerce.com/login?returnUrl=%2Fadmin%2F")
//     const textfield = await page.locator('.form-fields .inputs').fill("userid@test.com")
//     await expect(textfield).toContain("userid@test.com")
//    // const loginformbutton = await page.locator('buttons').filter({name : 'Log in'})
//     // const text = loginformbutton.getByRole('button',{name : 'Log in'}).textContent()
//     // expect(text).toEqual('Log in')
//     // await expect(loginformbutton).toHaveText('Log in')

// })
/*
test('assertions',async({page}) => {
   const value = 5
   expect(value).toEqual(5)
   const loginform = page.locator('form').filter({hasText : "Welcome, please sign in!"})
   const submitbutton = loginform.getByRole('button',{name : 'Log in'})
   await expect(submitbutton).toHaveText("Log in")
})

test('lists and dropdowns',async({page}) => {
   await page.goto("https://practice.expandtesting.com/dropdown")
   const dropdowns = page.locator('#country')
   await dropdowns.click()
   await dropdowns.selectOption('IN')
})
*/
// test('validate radiobuttons select and unselect',async({page}) => {
//     await page.goto("https://www.tutorialspoint.com/selenium/practice/radio-button.php")
//     const select_radiobutton = page.locator('.form-check')
//     await select_radiobutton.getByLabel('Yes').check()
//     await page.screenshot({path : 'screenshots/formslayoutPage.png'})
//     await expect(select_radiobutton.isChecked({timeout : 3000})).toBeTruthy()
//     await select_radiobutton.getByLabel('No').check()
//     await expect(select_radiobutton.isChecked({timeout : 5000})).toBeTruthy()
    
    

// })
/*
test('dialog box',async({page}) => {
  await page.goto("url")
  page.on('dialog',dialog => {      //listener(on) for a dialog event
   expect(dialog.message()).toEqual("message")
   dialog.accept()

  })
})
*/



// test('test 1',async({page}) => {
//   const loginpage = new LoginPage(page)
//   await loginipage.performlogin()
// })

// async performLogin(){
//   await this.page.getByRole('textbox',{name : 'email'}).fill('test123@test.com')
//   await this.page.getByRole('textbox',{name : 'Password'}).fill('')
//   await this.page.getByRole('buttons',{name : 'Log in'}).click()
// }


 })
