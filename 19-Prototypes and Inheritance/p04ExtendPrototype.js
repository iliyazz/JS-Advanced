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


function extendProrotype(classToExtend) {
    classToExtend.prototype.species = 'Human';
    classToExtend.prototype.toSpeciesString = function () {
        return `I am a ${this.species}. ${this.toString()}`;
    }
}


extendProrotype(Person);
let person = new Person('Tosho', "abv@abv.bg");
console.log(person.toSpeciesString());