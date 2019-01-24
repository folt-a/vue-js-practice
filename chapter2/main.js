let app = new Vue({
  // el：アプリケーションを紐付ける要素のセレクタ
  el: '#app',
  // data：アプリケーションで使用するデータ
  data: {
    count: 0,
    isChild:true,
    isActive:true,
    textColor:'red',
    bgColor:'lightgray'
  },
  // computed：算出プロパティ
  // created：ライフサイクルフックの一つ
  // methods：アプリケーションで使用するメソッド
  methods: {
    increment: function(){
      this.count +=1;
    }
  }
})