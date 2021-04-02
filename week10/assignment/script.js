Vue.component('sun-time', {
template: `<div class="times"> 
<p>{{results.sunrise}}</p>
<p>{{results.sunset}}</p>
<p>{{results.day_length}}</p>
</div>`,
props: ['results']
});

const vm = new Vue ({
  el: '#sunApp',
  data: {
    results: [
    ]
  },
  mounted () {
    axios
      .get('./data/sunrise-sunset.json')
      .then(response => {
        console.log('response', response);
        vm.results = response.data;
        console.log(vm.times);
      });
  }
})
