import { shallow } from 'vue-test-utils'
import Click from './Click'
import flushPromises from 'flush-promises'

describe('test', () => {
  it('works',  async () => {
    const wrapper = shallow(Click)

    wrapper.find('input').element.value = 'Value'
    wrapper.find('input').trigger('input')
    await flushPromises()

    expect(wrapper.findAll('#changed')).toHaveLength(1)
  })
})

describe('test', () => {
  it('works',  async () => {
    const wrapper = shallow(Click)

    wrapper.find('input').element.value = 'Value'
    wrapper.find('input').trigger('input')

    expect(wrapper.find('#updated').text()).toEqual('true')
  })
})

