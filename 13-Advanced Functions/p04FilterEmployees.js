function filterEmployees(input, criteria) {

    let data = JSON.parse(input);
    let mappedData = [];
    if (criteria === 'all') {
        mappedData = mapData(data);
    }
    else {
        let [property, value] = criteria.split('-');
        let filteredData = data.filter(x => x[property] === value);
        mappedData = mapData(filteredData);
    }
    return mappedData.forEach(element => {
        console.log(element)
    });
    /*return data.filter(x => x[property] === value)
    .map((x, i) => `${i}. ${x.first_name} ${x.last_name} - ${x.email}`)
    .forEach(element => {console.log(element);});*/
    function mapData(current) {
        return current.map((x, i) => `${i}. ${x.first_name} ${x.last_name} - ${x.email}`);
    }
}

filterEmployees(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
    'gender-Female')
console.log('------------------------')
filterEmployees(
    `[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
    'last_name-Johnson')

