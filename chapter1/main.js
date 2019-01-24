let app = new Vue({
  // el：アプリケーションを紐付ける要素のセレクタ
  el: '#app',
  // data：アプリケーションで使用するデータ
  data: {
    message: 'Hello Vue',
    messageNum: 7538315,
    flutes: ['apple', 'banana', 'strowberry'],
    show:true,
    count: 0
  },
  // computed：算出プロパティ
  // created：ライフサイクルフックの一つ
  // methods：アプリケーションで使用するメソッド
  methods: {
    handleClick: function (event) {
      alert(event.target);
    },
    increment: function(){
      this.count +=1;
    }
  }
})