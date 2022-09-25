function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   let result = [];
   function onClick() {
      let inputs = JSON.parse(document.querySelector("#inputs textarea").value);
      let bestRestaurantInfo = document.querySelector('#bestRestaurant p');
      let bestRestWorker = document.querySelector('#workers p');

      for (let element of inputs) {
         let [name, workerList] = element.split(' - ');
         if (!result.find(el => el.name === name)) {
            result.push({
               name,
               averageSalary: 0,
               bestSalary: 0,
               sumOfSalary: 0,
               workerList: []
            })
         }
         let currentRestaurant = result.find(el => el.name === name);
         workerList = workerList && workerList.split(', ');

         for (let worker of workerList) {
            updateRestaurant(currentRestaurant, worker);
         }
      }
      let bestRestaurant = result.sort((a, b) => b.averageSalary - a.averageSalary)[0];
      bestRestaurantInfo.textContent = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.averageSalary.toFixed(2)} Best Salary: ${bestRestaurant.bestSalary.toFixed(2)}`;
      let sortedListOfWorkers = bestRestaurant.workerList.sort((a, b) => b.salary - a.salary);
      let buffer = '';
      for (let worker of sortedListOfWorkers) {
         buffer += `Name: ${worker.name} With Salary: ${worker.salary} `;
      }
      bestRestWorker.textContent += buffer;

   }
   function updateRestaurant(currentRestaurant, worker) {
      let [name, salary] = worker.split(' ');
      salary = Number(salary);
      currentRestaurant.sumOfSalary += salary;
      if (currentRestaurant.bestSalary < salary) {
         currentRestaurant.bestSalary = salary;
      }
      currentRestaurant.workerList.push({
         name,
         salary
      });
      currentRestaurant.averageSalary = currentRestaurant.sumOfSalary / currentRestaurant.workerList.length;
   }
}