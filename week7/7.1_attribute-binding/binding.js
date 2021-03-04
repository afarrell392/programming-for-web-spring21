var vm1 = new Vue({
  el: '#vm1',
  data: {
    llamaSite: 'https://en.wikipedia.org/wiki/Llama',
    llamaTitle: 'Llama facts on Wikipedia',
    alpacaSite: 'https://en.wikipedia.org/wiki/Alpaca',
    alpacaTitle: 'Alpaca facts on Wikipedia',
    container: {
      margin: '20px'
    },
    header: {
        color: 'lightgray',
    },
    table: {
      float: 'left'
    },
    currentRoute: "breeding"
  }
})
