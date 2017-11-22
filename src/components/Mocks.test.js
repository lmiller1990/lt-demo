import { shallow } from 'vue-test-utils'
import Mocks from './Mocks'
import Vue from  'vue'
import Vuex from 'vuex'

test('mocks', () => {
  const component = shallow(Mocks, {
    mocks: {
      $store: {
        state: {
          color: 'red'
        }
      }
    }
  }) 

  expect(component.hasStyle('border', '15px solid red')).toBe(true)
})

Vue.use(Vuex)

test('ミューテーションをコミットします', () => {
  let mutations = {
    SET_COLOR: jest.fn() // Jestのモック関数
  }

  const component = shallow(Mocks, {
    store: new Vuex.Store({
      mutations
    })
  }) 

  component.find('input').element.value = 'yellow'
  component.find('input').trigger('input')

  expect(mutations.SET_COLOR.mock.calls.length).toBe(1)
  expect(mutations.SET_COLOR.mock.calls[0][1]).toBe('yellow')
})
