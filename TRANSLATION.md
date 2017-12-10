Vue js meetの台本です。Demo: https://lmiller1990.github.io/lt-demo/#/ 

Run with `yarn dev`
Test with `yarn test`

Hi, Today I'd like to talk about the official library for testing Vue components, vue-test-utils. 
こんにちは。今日は、 Vue.js向けの公式単体テストライブラリについて話させて頂きます。

Before I get started on that, let's talk a bit about what a component is, why we test components, and what to test.
それについて話す前に、コンポーネントというものは何か、なぜテストするか、テストするとき、何をテストするかについて話したいと思います。


Vue allows us to compose user interfaces from components, so we can say components the building blocks of user interfaces. Components serve two purposes:  
Vueのコンポーネントを組み合わせて、ユーザーインターフェイスを構築できます。コンポーネントは、ユーザーインタフェースの一つの部分だと言えます。コンポーネントは二つのことをします：

1. Display data for the user to view
2. Allow the user to interact with the application

データをユーザーに正しく表示します
ユーザーにアプリケーションと対話できるようにします

So when we test components, we should test those two things. 
そこで、コンポーネントをテストするときは、これら二つについてテストすべきです。

This is where vue-test-utils comes in.
これはvue-test-utilsができることです。

Slide

vue-test-utils is the official library for testing Vue components. It is much like React's Enzyme library. Like vue, vuex and vue router, there is Japanese documentation.
vue-test-utilsは、Vueコンポーネントをテストするための公式ライブラリです。Reactのreact-test-utils,Enzymeのようなライブラリです。Vue, Vuex, Vue Routerと同じように、日本語のドキュメントも提供してあります。

vue-test-utils provides tools to do the following:
vue-test-utilsは以下のようなことをするためにツールを提供します:

- Render and inspect component markup: 
コンポーネントをレンダリングし、そしてマークアップする:
    1. shallow() and mount()
    2. html(), find(), text()
- Set values(states)/functions on the component:
コンポーネントの値(状態)/関数を設定する:
    1. data() -> setData()
    2. methods: {}  -> setMethods()
    3. computed: -> setComputed
- Simulate user interaction with components:
コンポーネントのユーザーインタラクションをシュミレーションする:
    1. trigger()
プロパティをモックする:
- Mock data
    1. mocks: {}, stubs: {}

Let's see a few quick demos of these methods.
これらの方法について、いくつか簡単なデモを見ていきましょう。

This Hello component is as simple as possible. It just renders text. 
このHelloというコンポーネントは一番簡単なコンポーネントです。ただテキストを表示します。

We use use shallow to render the component in isolation, and make an assertion on the markup use html().
shallowというメソッドをそのコンポーネントを隔離してレンダリングして、マークアップを検証します。

Next, the setData component allows us to easily the data() method easily. This component renders a greeting. 
setDataというメソッドがあります。setDataでコンポーネントのdata関数を簡単に更新できます。


There is also a `setMethods`, `setComputed`, and `setProps` method, so you can easily write tests using different data values.
また、`setMethods`, `setComputed`,`setProps`などのメソッドがあるため、簡単にデータを正しく表示するのを検証できます。

How about interations? The Trigger component toggles a greeting based on a value that updates when a button is clicked.
ユーザーインタラクションはどうやってテストするのでしょうか？triggerというメソッドを使って、インタラクションをシミュレーションして、コンポーネントにイベントを発火できます。

So far all these components have been simple. How about a more interesting complex example? The Mocks component uses both the Vue Router and a Vuex store. 
これまでのところ、全てのこれらのコンポーネントは簡単でした。もう少し興味を持つ複雑な例についてはどうでしょうか？Mockコンポーネントは、Vue ルータ、Vuexストアも使っています。

Several things are happening here: 
ここでの例では、いくつかの事が起こっています:

When the user enters text in the text box, a mutation is committed
テキストボックスに入力するとき、ミューテーションはコミットされます。

The text box border changes based on $store.state.color
$store.state.color によってテキストボックスの色が変わります。

Let's test the border style is updated first. Creating a full vuex store can make our test more complex. There is a better way in vue-test-utils. 
最初にボーダーの色スタイルを更新するのをテストしましょう。Vuexストアを使うとテストはもっとややこしくなります。vue-test-utilsではもっといい方法があります。

We can simply use the mocks object, to inject global properties. Then we simply can make an assertions using hasStyle.
グローバルプロパティに注入するために、モックオブジェクトを簡単に使用できます。それから、簡単にhasStyleを使用して検証できます。

Sometimes it is good to have a real Vuex store. Let's test the interaction. 
時々、モックではなく本当のVuexストアを使用した方がいいときもあります。インタラクションをテストしましょう。

When a user enters a color, a SET_COLOR mutation should be committed with the correct payload. 
ユーザーが色を入力するとき、SET_COLORミューテーションは正しいペイロードによってコミットされるべきです。

Instead of a real mutation, we can use a mock method. Then we assert that it was called, and with the correct payload. 
本当のミューテーションの代わりに、モックメソッドを使用できます。それから、正しいペイロードによって、それが呼ばれたとき、検証します。

In this case, because are committing a mutation, it is good to test using a real Vuex store.
このケースでは、ミューテーションをコミットしているため、テストするために本当のVuexストアを使用するとよいです。

We simply find the input, enter some text, and use trigger to simulate the input.
単純にinputを探して、テキストを入力して、そしてinputをシミュレーションするためにtriggerを使用します。
