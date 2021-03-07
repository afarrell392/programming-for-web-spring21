let vm = new Vue({
  el: '#npsApp',
  data: {
    parks: [
      {
        image: 'img/acad.jpg',
        name: 'Acadia National Park',
        state: 'Maine',
        isOfficialPark: 'true',
        established: '1916',
        yearVisited: '2021'
      },
      {
        image: 'img/arches.jpg',
        name: 'Arches National Park',
        state: 'Utah',
        isOfficialPark: 'true',
        established: '1929',
        yearVisited: '2018'
      },
      {
        image: 'img/glacier.jpg',
        name: 'Glacier National Park',
        state: 'Montana',
        isOfficialPark: 'true',
        established: '1910',
        yearVisited: '2016'
      },
      {
        image: 'img/grandteton.jpg',
        name: 'Grand Teton National Park',
        state: 'Wyoming',
        isOfficialPark: 'true',
        established: '1929',
        yearVisited: '2016'
      },
      {
        image: 'img/slbe.jpg',
        name: 'Sleeping Bear Dunes National Lakeshore',
        state: 'Michigan',
        isOfficialPark: 'false',
        established: '1970',
        yearVisited: '2017'
      }]
  }
})
