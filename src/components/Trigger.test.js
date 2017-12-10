import { shallow } from 'vue-test-utils'
import Trigger from './Trigger'

test('trigger', () => {
　// レンダーします
  const component = shallow(Trigger)

  //　ボタンを検索してclickをシミュレーションします
  component.find('button').trigger('click')

  // マークアップを確認できます
  console.log(component.html())

  //　またボタンを検索してclickをシミュレーションします
  component.find('button').trigger('click')
  
  // マークアップを確認できます
  console.log(component.html())
})
