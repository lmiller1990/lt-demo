import { shallow } from 'vue-test-utils'
import setComputed from './setComputed'

test('setComputed', () => {
  const wrapper = shallow(setComputed)

  console.log(wrapper.html())

  wrapper.setComputed({ greeting: 'こんにちは' })

  console.log(wrapper.html())
})
