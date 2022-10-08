class Company {
    constructor() {
        this.departments = {};
    }
    addEmployee(name, salary, position, department) {
        if (!name || !salary || salary < 0 || !position || !department) {
            throw new Error("Invalid input!");
        }
        if (!this.departments[department]) {
            this.departments[department] = {
                averageSalary: 0,
                sumOfSalary: 0,
                employees: []
            }
        }
        this.departments[department].sumOfSalary += salary;
        this.departments[department].employees.push({ name: name, salary: salary, position: position });
        this.departments[department].averageSalary = this.departments[department].sumOfSalary / this.departments[department].employees.length;
        //console.log(`New employee is hired. Name: ${name}. Position: ${position}`);
        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }
    bestDepartment() {
        let currentBestDepartment = Object.entries(this.departments)
        .sort(([depName1, depInfo1], [depName2, depInfo2]) => depInfo2.averageSalary - depInfo1.averageSalary)[0];
        let sortedEmployees = currentBestDepartment[1].employees
        .sort((a, b) => { return b.salary - a.salary || a.name.localeCompare(b.name) });

        let result = [];
        result.push(`Best Department is: ${currentBestDepartment[0]}`);
        result.push(`Average salary: ${currentBestDepartment[1].averageSalary.toFixed(2)}`);
        for (let employee of sortedEmployees) {
            result.push(`${employee.name} ${employee.salary} ${employee.position}`)
        }
        return result.join('\n');
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());