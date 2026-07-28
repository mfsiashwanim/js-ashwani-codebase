import {Page} from '@playwright/test'

export class Parameterizedforms{
    readonly page : Page   
    constructor(page : Page){
        this.page = page
    }

    async submitusingridforms(name : string,password : string,optiontext : string){
        const formfill = this.page.locator('nb-card').filter({hasText : 'Using the Grid'})
        await this.page.waitForTimeout(2000)
        await formfill.getByLabel('Email').fill("test123@test.com")
        await formfill.getByLabel('Password').fill('Password123')
        await formfill.getByLabel('Option 1').check()
    }

    async submitusinlineforms(name : string,email : string,rememberMe : boolean){
        const formfill = this.page.locator('nb-card').filter({hasText : 'Inline form'})
        await this.page.waitForTimeout(2000)
        await formfill.getByPlaceholder('Jane Doe').fill(name)
        await formfill.getByPlaceholder('Email').fill(email)
        if(rememberMe) {
        await formfill.getByLabel('Remember me').check()
    }
        await formfill.getByRole('button').click()
}
}