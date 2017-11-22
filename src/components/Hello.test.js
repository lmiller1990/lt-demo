import { shallow } from 'vue-test-utils'
import Hello from './Hello.vue'

describe('Hello', () => {
  it('マークアップを正しくレンダーする', () => {
    const component = shallow(Hello)

    // console.log(component.html())

    expect(component.html()).toEqual('<div>Hello</div>')
  })
})
