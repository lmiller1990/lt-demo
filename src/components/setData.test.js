import { shallow } from 'vue-test-utils'
import setData from './setData'

describe('SetData', () => {
  it('言語を表示します', () => {
    const component = shallow(setData)

    component.setData({ language: '日本語' })

    console.log(component.html())

    expect(component.text()).toEqual('Language: 日本語')
  })
})
