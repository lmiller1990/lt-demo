import { shallow } from 'vue-test-utils'
import Hello from './Hello.vue'

/**
 * `shallow`メソッドでコンポーネントを隔離してレンダーします。
 * 子どもコンポーネントをモックします。
 */
describe('Hello', () => {
  it('マークアップを正しくレンダーする', () => {
    const component = shallow(Hello) //　隔離してレンダーします

    //　マークアップ確認。デバッグに便利です。
    console.log('マークアップ：', component.html()) 

    // マークアップが正しいか検証します
    expect(component.html()).toEqual('<div>Hello World!</div>')
  })
})

// yarn test --runTestsByPath src/components/Hello.test.js
