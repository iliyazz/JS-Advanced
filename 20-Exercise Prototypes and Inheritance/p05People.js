function solution() {
    class Employee {
        constructor(name, age) {
            if (this.constructor == Employee) {
                return;
            }
            this.name = name;
            this.age = age;
            this.salary = 0;
            this.tasks = [];
            this.bonuses = 0;
        }
        work() {
            console.log(this.tasks[0]);
            this.tasks.push(this.tasks.shift());
        }
        collectSalary() {
            console.log(`${this.name} received ${this.salary + this.bonuses} this month.`);
        }
    }
    class Junior extends Employee {
        constructor(name, age) {
            super(name, age);
            let taskList = [`${this.name} is working on a simple task.`];
            super.tasks = taskList;
        }
    }
    class Senior extends Employee {
        constructor(name, age) {
            super(name, age);
            let taskList = [`${this.name} is working on a complicated task.`,
            `${this.name} is taking time off work.`,
            `${this.name} is supervising junior workers.`];
            super.tasks = taskList;



        }
    }
    class Manager extends Employee {
        constructor(name, age, dividend = 0) {
            super(name, age)
            this.dividend = dividend;
            let taskList = [`${this.name} scheduled a meeting.`, `${this.name} is preparing a quarterly report.`]
            super.tasks = taskList;
        }
        collectSalary() {
            this.debugger
            console.log(`${this.name} received ${this.salary + this.dividend} this month.`);
        }
    }
    return {
        Employee,
        Junior,
        Senior,
        Manager
    }
}

const classes = solution();
const junior = new classes.Junior('Ivan', 25);

junior.work();
junior.work();

junior.salary = 5811;
junior.collectSalary();

const sinior = new classes.Senior('Alex', 31);
sinior.work();
sinior.work();
sinior.work();
sinior.work();

sinior.salary = 12050;
sinior.collectSalary();

const manager = new classes.Manager('Tom', 55);
debugger

manager.salary = 15000;
manager.collectSalary();
manager.dividend = 2500;
manager.collectSalary();