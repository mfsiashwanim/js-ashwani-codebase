import {test as base} from '@playwright/test'
import {Parameterizedforms} from './parametrisedformslayout.spec'

export type TestOptions = {
    globalQAUrl : String
   Parameterizedforms : Parameterizedforms
}

export const test = base.extend<TestOptions>({  // Testoptions file placeholder for env 
    globalQAUrl : ['',{option:true}],
    Parameterizedforms: async({page},use) => { // use : to confiure fixture
        const pmf = new Parameterizedforms(page)
        await page.goto("http://localhost:4200/pages/iot-dashboard")
        await page.getByTitle("Forms").click()
        await page.getByTitle("Form Layouts").click()
        await use(pmf)
    }
})