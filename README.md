Vue js meetの台本です。Demo: https://lmiller1990.github.io/lt-demo/#/ 

Run with `yarn dev`
Test with `yarn test`

Hi, Today I'd like to talk about the official library for testing Vue components, vue-test-utils. 
こんにちは。今夜は、vue-test-utilsは Vue.js向けの公式単体テストライブラリです。

Before I get started on that, let's talk a bit about what a component is, why we test components, and what to test.
それについて話す前に、コンポーネントというものは何か、なぜテストするか、テストすると、何をテストするかについて話しいと思います。


Vue allows us to compose interfaces from components, so we can say components the building blocks of user interfaces. Components serve two purposes:  
Vueのコンポーネントを組み合わせて、インターフェイスを構築できます。コンポーネントは、インタフェースの一つの部分だと言えます。コンポーネントは二つのことをします：

1. Display data for the user to view
2. Allow the user to interact with the application

データをユーザーに正しく表示します
ユーザー対応に合わせて行動します

So when we test components, we should test those two things. 
それで、コンポーネントをテストすると、その二つのことはポイントです。

This is where vue-test-utils comes in.
これはvue-test-utilsができることです。

Slide

Vue test utils is the official library for testing Vue components. It is much like React's Enzyme library. Like vue, vuex and vue router, there is Japanese documentation.

Vue test utilsは、Vueコンポーネントをテストするためのオフィシャルライブラリーです。Reactのreact-test-utils,Enzymeのようなライブラリーです。Vue, Vuex, Vue-routerと同じように、日本語のドキュメントも提供してあります。

Vue-test-utils provides tools to do the following:
このようなメソッドがあります：

- Render and inspect component markup: 
コンポーネントを隔離してレンダーして、マークアップを観察する：
    1. shallow() and mount()
    2. html(), find(), text()
- Set values on the component:
コンポーネントの変数、関数を設定する：
    1. data() -> setData()
    2. methods: {}  -> setMethods()
    3. computed: -> setComputed
- Interact with components:
ユーザーのインタラクションをシムレーションする：
    1. trigger()
プロポティをもっくをモックする：
- Mock data
    1. mocks: {}, stubs: {}

Let's see a few quick demos of these methods.
簡単な例をあげます。

This Hello component is as simple as possible. It just renders text. 
このHelloというコンポーネントは一番簡単なコンポーネントです。ただテキストを表示します。

We use use shallow to render the component in isolation, and make an assertion on the markup use html().
shallowというメソッドをそのコンポーネントを隔離してレンダーして、マークアップを検証します。

Next, the setData component allows us to easily the data() method easily. This component renders a greeting. 
setDataというメソッドがあります。setDataでコンポーネントのdata関数を簡単に更新できます。


There is also a `setMethods`, `setComputed`, and `setProps` method, so you can easily write tests using different data values.
そのように、`setMethods`, `setComputed`,`setProps`などがあります。簡単にデータを正しく表示するのを検証できます。

How about interations? The Trigger component toggles a greeting based on a value that updates when a button is clicked.
ユーザーインタラクションはどうしますか？triggerというメソッドを使って、インタラクションをシミュレーションして、コンポーネントにイベントを発火できます。

So far all these components have been simple. How about a more interesting complex example? The Mocks component uses both the router and a Vuex store. 
今までのコンポーネントは全部簡単でしがた、もう少し複雑な例は？Mockコンポーネントには、ルーター、ストアも使っています。

Several things are happening here: 
いくつかのことがあります。

When the user enters text in the text box, a mutation is committed
テキストボックスに入力すると、ミューテーションをコミットします。

The text box border changes based on $store.state.color
$store.state.colorによってテキストボックスの色が変わります。

Let's test the border style is updated first. Creating a full vuex store can make our test more complex. There is a better way in vue test utils. 

最初にボーダーの色スタイルを更新するのをテストします。ストアを使うとテストはもっとややこしくなります。もっといい方法があります。

We can simply use the mocks object, to inject global properties. Then we simply make an assertions using hasStyle.

それは、vue test utilsのモックオブジェクトで、インスタンスに追加のプロパティを追加します。そして、hasStyleで検証します。

Sometimes it is good to have a real store. Let's test the interaction. 
モックではなく本当のストアを使ってテストするときもあります。インタラクションをテストします。

When a user enters a color, a SET_COLOR mutation should be committed with the correct payload. 
ユーザーは色を入力すると正しいペイロードがあるSET_COLORミューテーションをコミットするはずです。


Instead of a real mutation, we can use a mock method. Then we assert that it was called, and with the correct payload. 
本当のミューテーションの代わりに、モックメソッドを使って、呼び出されることと、ペイロードを検証します。

In this case, because are committing a mutation, it is good to test using a real store.
ミューテーションをコミットするので、本当のストアを使います。

We simply find the input, enter some text, and use trigger to simulate the input.
インプットを選択してテキストを入力して、triggerでシミュレーションをします。


