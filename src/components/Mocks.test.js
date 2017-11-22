import { shallow } from 'vue-test-utils'
import Mocks from './Mocks'

test('$route and $mocks', () => {
  const wrapper = shallow(Mocks, {
    mocks: {
      $store: {
        state: {
          color: 'red'
        }
      },

      $route: {
        params: {
          username: 'Tanaka'
        }
      }
    }
  }) 
})
