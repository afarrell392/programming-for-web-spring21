var baseURL = 'http://ghibliapi.herokuapp.com';
var vm = new Vue({
  el: '#app',
  data: {
    films: []
  },
  methods: {
    getFilms: function () {
      axios.get(baseURL + '/films').then(function (response) {
        console.log(response);
        vm.films = response.data;
      })
    }
  },
  created: function () {
    this.getFilms();
  }
});
