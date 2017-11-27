import { shallow } from 'vue-test-utils'
import Trigger from './Trigger'

test('trigger', () => {
  const component = shallow(Trigger)

  component.find('button').trigger('click')
  console.log(component.html())

  component.find('button').trigger('click')
  console.log(component.html())
})
