// 2. Создать декоратор класса User.
//    Он должен добавлять в данном классе:
//    поле createdDate с датой создания класса а также добавлять
//    поле type, в котором будет записана строка ‘admin’ или ‘user’,
//    данную строку нужно передать в декоратор при вызове.
//    Сам класс и имя декоратора может быть произвольным.

function addUserType(newType: string) {
    return function classDecorator<T extends {new(...args:any[]):{}}>(targetClass: T) {
        let options = {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            timezone: 'UTC',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        };
    
        const newClass = class extends targetClass {
            type = newType;
            createdDate = new Date().toLocaleString("ru", options);
            newProperty = "new property value";
            hello = "override";
        };
    
        newClass.prototype.myMethod2 = function () { console.log("newClass.MyMethod2") };
    
        return newClass;
    }
}

@addUserType("user")
class User {
    property = "property";
    hello: string;
    constructor(m: string) {
        this.hello = m;
        console.log("User.constructor.call");
    }
    myMethod1() { console.log("User.MyMethod1") }
}

const user = new User("world");
console.log(user);
