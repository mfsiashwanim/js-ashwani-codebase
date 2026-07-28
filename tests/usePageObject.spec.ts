import {test , expect } from '@playwright/test'
import {NavigationPage} from '../src/pageObjects/navigationpage'
import {parameterizedforms} from '../src/pageObjects/parameterizedforms'
import {faker} from '@faker-js/faker'


test.beforeEach(async({page}) => {
     
    page.goto("https://www.saucedemo.com")

})

test('navigate to the page',async({page}) => {
    const navigationpage = new NavigationPage(page)
    navigationpage.loginpage(page)
    navigationpage.addTocartswaglabs(page)
})

test('navigate to parameterizedforms',async({page}) => {
    var name = faker.person.fullName()
    
    const paramforms = new parameterizedforms(page)
    paramforms.navigatetodemoQApage(page)
    paramforms.parameterizedforms("ashwani","ashwani.mishra938@gmail.com")
})

