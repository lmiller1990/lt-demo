import { shallow } from 'vue-test-utils'
import Hello from './Hello.vue'

/**
 * `shallow`メソッドでコンポーネントを隔離してレンダーします。
 * 子どもコンポーネントをモックします。
 */
describe('Hello', () => {
  it('マークアップを正しくレンダーする', () => {
    //　隔離してレンダーします
    const component = shallow(Hello)

    //　マークアップを確認できます。デバッグに便利です。
    console.log(component.html())

    // マークアップが正しいか検証します
    expect(component.html()).toEqual('<div>Hello</div>')
  })
})

// yarn test --runTestsByPath src/components/Hello.test.js
