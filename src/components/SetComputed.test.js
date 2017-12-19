import { shallow } from 'vue-test-utils'
import cmp from './setComputed'

describe('testing vue-test-utils', () => {

  it('sets computed', () => {
    const wrapper = shallow(cmp)
    wrapper.setComputed({c: 'a'})
    expect(wrapper.vm.c).toEqual(1)
  })

  it('sets computed', () => {
    const wrapper = shallow(cmp)
    wrapper.setComputed({b: 3})
    expect(wrapper.vm.b).toEqual(3)
  })
})
