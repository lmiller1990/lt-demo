import { shallow } from 'vue-test-utils'
import setData from './setData'

/**
 * setDataメソッドがあります。
 * コンポーネントを簡単に設定できます。
 * setMethods, setComputed, setPropsなどもあります。
 */

describe('SetData', () => {
  it('言語を表示します', () => {
    // レンダーします
    const component = shallow(setData)

     //　マークアップを確認できます。デバッグに便利です。
     console.log(component.html())

    // dataを更新します
    component.setData({ language: '日本語' })

    //　マークアップを確認できます。デバッグに便利です。
    console.log(component.html())

    // マークアップを更新することを検証します
    expect(component.text()).toEqual('Language: 日本語')
  })
})

// yarn test --runTestsByPath src/components/setData.test.js
