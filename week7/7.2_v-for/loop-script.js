var vm = new Vue ({
  el:'#app',
  data: {
    myNumbers: [1, 4, 17, 84],
    animals: [
      { name: 'panda', color: 'black and white' },
      { name: 'squirrel', color: 'gray' },
      { name: 'fox', color: 'red' }
    ],
    myDog: {
      name: 'Yoshi',
      breed: 'chihuahua',
      color: 'merle',
      weight: 10
    }
  }
})