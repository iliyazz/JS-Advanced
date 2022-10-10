function toStringExtension() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }
        toString(){
            let arr = [];
            for(let [k, v] of Object.entries(this)){
                arr.push(`${k}: ${v}`);
            }
            return `${Object.getPrototypeOf(this).constructor.name} (${arr.join(', ')})`
        }
    }
    class Teacher extends Person{
        constructor(name, email, subject){
            super(name, email);
            this.subject = subject;
        }
    }
    class Student extends Person{
        constructor(name, email, course){
            super(name, email);
            this.course = course;
        }
    }
    return {
        Person,
        Teacher,
        Student
    }
}
