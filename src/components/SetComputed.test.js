import { shallow } from 'vue-test-utils'
import cmp from './setComputed'

describe('testing vue-test-utils', () => {

  it('sets computed', (done) => {
    const wrapper = shallow(cmp)
    wrapper.setComputed({b: 3})
    setTimeout(() => {
      expect(wrapper.vm.b).toEqual(3)
      done()
    },1)
  })
})
