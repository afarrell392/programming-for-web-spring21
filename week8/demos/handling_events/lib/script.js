//events with expresisons

// var xyz = new Vue ({
//     el: '#basic-events',
//     data: {
//     sad: false,
//     message: 'I am super sad'
//     }
// });

var abc = new Vue ({
  el: '#events',
  data: {
    name: ''
  },
  methods: {
    checkName: function () {
      if (this.name !== '') {
        alert ('looks good');
      } else {
        alert ('fill in the name');
      }
    }
  }
});
