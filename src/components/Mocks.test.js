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
  console.log('マークアップ', component.html())

  // バーダーのスタイルを検証します
  expect(component.hasStyle('border', '15px solid red')).toBe(true)
})



// このテストに本当のVuexストアを使います。
Vue.use(Vuex)

test('ミューテーションをコミットします', () => {
  // ミューテーションをモックします。
  // モックしても良いです。
  // テストしたいのが、ミューテーションのロジックではなく、ちゃんとコミッタしたことだけです。
  let mutations = {
    SET_COLOR: jest.fn() 
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


  console.log('呼び出した数：', mutations.SET_COLOR.mock.calls.length)
  console.log('ペイロード', mutations.SET_COLOR.mock.calls)
  
  // ミューテーションをコミットしたこと検証します。
  // `trigger`を一回呼び出したので一回は正しいです。
  expect(mutations.SET_COLOR.mock.calls.length).toBe(1)

  // ミューテーションのペイロードが正しいことを検証します
  // `yellow`であるはずです。
  expect(mutations.SET_COLOR.mock.calls[0][1]).toBe('yellow')
})
