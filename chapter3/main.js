let app = new Vue({
  // el：アプリケーションを紐付ける要素のセレクタ
  el: '#app',
  // data：アプリケーションで使用するデータ
  data() {
    return {
      count:0,
      message:'Hello Vue!'
    }
  },
  methods: {
    clickHandle:function () {
      alert('Clicked!');
    },
    inputHandle:function (event) {
      this.message = event.target.value;
    },
    keydownHandle:function (event) {
      alert('you keydown enter.');
    },
    doDelete:function (event) {
      alert('Deleted.');
    }
  },
})