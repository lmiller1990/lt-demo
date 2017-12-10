import { shallow } from 'vue-test-utils'
import Trigger from './Trigger'

// vue-test-utilsに`trigger`メソッドがあります。
// イベントをシミュレーションします。



// yarn test --runTestsByPath src/components/Trigger.test.js
test('trigger', () => {
　// レンダーします
  const component = shallow(Trigger)

  //　マークアップを確認できます。デバッグに便利です。
  console.log(component.html())
   
   // 最初の状態を検証します。
  expect(component.find('.greet').text()).toEqual('Hello')  

  //　またボタンを検索してclickをシミュレーションします。
  component.find('#btn').trigger('click')
  
  //　マークアップを確認できます。デバッグに便利です。
  console.log(component.html())

  // 状態が更新されたことを検証します。
  expect(component.find('.greet').text()).toEqual('こんにちは') 
})