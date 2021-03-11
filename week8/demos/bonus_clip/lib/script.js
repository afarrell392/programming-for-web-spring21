var vm = new Vue({
  el: '#bonus',
  data: {
    typeInput: '',
    locationInput: '',
    dateInput: '',
    idInput: '',
    lights: [
      { type: 'CF', location: 'bedroom', dataInstalled: '01/01/19', id: 124 },
      { type: 'halogen', location: 'study', dataInstalled: '01/01/18', id: 9828 },
      { type: 'incandescent', location: 'deck', dataInstalled: '01/01/17', id: 32 },
      { type: 'LED', location: 'kitchen', dataInstalled: '01/01/16', id: 455 }
    ]
  },
  methods: {
    deleteLight: function (lightObject) {
      this.lights = this.lights.filter(function (light) {
        if (light.id !== lightObject.id) {
          return true;
        } else {
          return false;
        }
      })
    },
    addLight: function () {
      const newLight = {
        type: this.typeInput,
        location: this.locationInput,
        dateInstalled: this.dateInput,
        id: this.idInput
      };
      this.lights.push(newLight);
      this.typeInput = this.locatinInput = this.dateInput = this.idInput = '';
    }
  }
});
