function extensibleObject() {
    return {
        extend(template) {
            for (key in template) {
                if (typeof template[key] === 'function') {
                    Object.getPrototypeOf(this)[key] = template[key];
                }
                else {
                    this[key] = template[key];
                }
            }
        }
    }
}

const myObj = extensibleObject();
console.table(myObj);

const template = {
    extensionMethod: function () { },
    extensionProperty: 'someString'
}
myObj.extend(template);
console.table(myObj);
//debugger

//----------------------

const myObj2 = extensibleObject();
debugger
const template2 = {
    extensionMethod: function (x, y) { return x + y },
    extensionProperty: 'someString'
}
debugger
myObj2.extend(template2);
console.table(myObj2);
console.log(template2.extensionMethod(2, 7));
console.log(myObj2.extensionMethod(2, 8));
console.log(myObj2.extensionMethod);
debugger


