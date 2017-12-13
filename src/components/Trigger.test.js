import { shallow } from 'vue-test-utils'
import Trigger from './Trigger'

// vue-test-utilsに`trigger`メソッドがあります。
// イベントをシミュレーションします。

// yarn test --runTestsByPath src/components/Trigger.test.js
test('trigger', () => {
　// レンダーします
  const component = shallow(Trigger)

  console.log('マークアップ', component.html())
   
  //　`find`でボタンを探して`trigger`でclickをシミュレーションします。
  component.find('#btn').trigger('click')
  
  console.log('マークアップ', component.html())

  // 状態が更新したことを検証します。
  expect(component.find('.greet').text()).toEqual('こんにちは') 
})