import { shallow } from 'vue-test-utils'
import setComputed from './setComputed'

test('setComputed', () => {
  const component = shallow(setComputed)

  // console.log(component.html())

  component.setComputed({ greeting: 'おはよう' })

  // console.log(component.html())

  expect(component.text()).toBe('おはよう')
})
