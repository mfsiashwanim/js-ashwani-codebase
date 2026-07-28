import {test} from './Test-options'
import {faker} from '@faker-js/faker'
import {Parameterizedforms} from './parametrisedformslayout.spec'


    test('parametreized methods' , async({page,Parameterizedforms}) => {
       const empname = faker.person.fullName()
       const num = faker.number.int(3000)
       const email = `${empname}${num}@test.com`
       const password = faker.number.int(280)
       Parameterizedforms.submitusingridforms(empname,email,'Option 1')
       Parameterizedforms.submitusinlineforms(empname,email,true)
    }
)   