import { shallow } from 'vue-test-utils'
import Mocks from './Mocks'
import Vue from  'vue'
import Vuex from 'vuex'

// yarn test --runTestsByPath src/components/Mocks.test.js


test('mocks', () => {
  // コンポーネントをモックストアを注入してレンダーします
  const component = shallow(Mocks, {
    mocks: { //　モックオブジェクトでグローバルプロペティを注入します。
      $store: {
        state: {
          color: 'red'
        }
      }
    }
  }) 

  // マークアップを確認できます
  console.log(component.html())

  // バーダーのスタイルを検証します
  expect(component.hasStyle('border', '15px solid red')).toBe(true)
})







// このテストに本当のVuexストアを使います。
Vue.use(Vuex)

test('ミューテーションをコミットします', () => {
  // ミューテーションをモックします。
  let mutations = {
    SET_COLOR: jest.fn() // Jestのモック関数
  }

  // コンポーネントにストアを注入してレンダーします。
  const component = shallow(Mocks, {
    store: new Vuex.Store({
      mutations
    })
  }) 

  // テキストボックスの入力をシミュレーションします。
  component.find('#text-box').element.value = 'yellow'
  component.find('#text-box').trigger('input')

  // ミューテーションをコミットしたこと検証します。
  // `trigger`を一回呼び出したので一回は正しいです。
  expect(mutations.SET_COLOR.mock.calls.length).toBe(1)

  // ミューテーションのペイロードが正しいことを検証します
  // `yellow`であるはずです。
  expect(mutations.SET_COLOR.mock.calls[0][1]).toBe('yellow')
})
