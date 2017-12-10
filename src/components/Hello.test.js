import { shallow } from 'vue-test-utils'
import Hello from './Hello.vue'

// yarn test --runTestsByPath src/components/Hello.test.js
describe('Hello', () => {
  it('マークアップを正しくレンダーする', () => {
    //　隔離してレンダーします
    const component = shallow(Hello)

    //　マークアップを確認できます
    console.log(component.html())

    // マークアップが正しいか検証します
    expect(component.html()).toEqual('<div>Hello</div>')
  })
})

