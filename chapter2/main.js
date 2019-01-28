let app = new Vue({
  // el：アプリケーションを紐付ける要素のセレクタ
  el: '#app',
  // data：アプリケーションで使用するデータ
  data: {
    count: 0,
    // class用変数
    isChild: true,
    isActive: true,

    // style用変数
    textColor: 'red',
    bgColor: 'lightgray',

    // Objectにするとわかりやすい、そうしよう
    // オブジェクトの変数名はxxxClassとかがよいのかな？
    classObject: {
      child: true,
      active: true
    },

    // × Style直書きはいまいち　CSSはCSSファイルに書きたい
    styleObject: {
      color: 'red',
      backgroundColor: 'lightgray'
    },

    // 複数の属性オブジェクト
    item: {
      id: '1',
      src: 'https://placehold.jp/120x60.png',
      alt: '商品サムネイル',
      width: '120px',
      height: '60px'
    },

    // for SVG
    // SVG自体をコンポーネント化して扱うことができるぞ！
    radius: 50,

    // 条件分岐 v-if と v-show の違い
    ok: false,

    type: 'A',

    // リスト
    list: [
      // jsonから読み込みした
      // { id: 1, name: 'Slime', hp: 100 },
      // { id: 2, name: 'Goblin', hp: 200 },
      // { id: 3, name: 'Dragon', hp: 300 }
    ],
    name: '',
    hp: ''

  },
  // computed：算出プロパティ
  // created：ライフサイクルフックの一つ
  created: function () {
    axios.get('list.json').then(function (response) {
      this.list = response.data;
    }.bind(this)).catch(function (e) {
      console.error(e);
    })
  },
  // methods：アプリケーションで使用するメソッド
  methods: {
    increment: function () {
      this.count += 1;
    },
    vclickHandle: function (event) {
      this.type = event.target.innerHTML;
    },
    doAdd: function () {
      let maxId = this.list.reduce((a, b) => a > b.id ? a : b.id, 0);
      this.list.push({ id: maxId + 1, name: this.name, hp: this.hp });
    },
    doRemove: function (index) {
      this.list.splice(index, 1);
    },
    doChange: function (index) {
      console.log(index);
      this.list[index].name = this.name;
      this.list[index].hp = this.hp;
    }
  },
  mounted() {
    console.log(this.$el);
    console.log(this.$refs.reference);
  },
})