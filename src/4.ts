// 4. Есть два класса Junior и Middle создайте класс Senior который будет имплементировать этих
//    два класса а также у него будет еще свой метод createArchitecture реализация данного метода
//    может быть произвольной.

class Junior {
    doTasks() {
        console.log('Actions!!!');
    }
}

class Middle {
    createApp() {
        console.log('Creating!!!');
    }
}

class Senior implements Junior, Middle {
    public doTasks():void {}
    public createApp():void {}
    
    public createArchitecture():void {
        console.log('Building!!!');
    }
}

function applyMixin(targetClass, baseClasses) {
    baseClasses.forEach((baseClass) => {
        Object.getOwnPropertyNames(baseClass.prototype).forEach((propName) => {
            targetClass.prototype[propName] = baseClass.prototype[propName];
        });
    });
}

applyMixin(Senior, [Junior, Middle]);

const senior = new Senior();