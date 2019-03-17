// 1. Создать декоратор метода addItemInfoDecorator он должен
//    добавлять поле date в возвращаемом объекте с датой когда был вызван метод а также
//    добавлять поле info, в котором будет записан текст состоящий из названия товара и его цены например: ‘Apple iPhone - $100’;
//    Для того что бы функция была вызвана в правильном контексте внутри декоратора ее нужно вызывать через apply:
//    let origResult = originalFunc.apply(this);

function addItemInfoDecorator(target: Object, method: string, descriptor: PropertyDescriptor) {
    let originalFunc = descriptor.value;
    
    descriptor.value = function () {
        let origResult = originalFunc.apply(this);
        let options = {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            timezone: 'UTC',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        };
        
        let newObj = {
            date: new Date().toLocaleString("ru", options),
            info: `${this.name} - \$${this.price}`
        };
        
        return Object.assign(origResult, newObj);
    }
}

class Item {
    public price: number;
    public name: string;
    
    constructor(name: string ,price: number) {
        this.name = name;
        this.price = price;
    }
    
    @addItemInfoDecorator
    public getItemInfo() {
        return {
            name: this.name,
            price: this.price
        };
    }
}

let item = new Item('Apple', 100);
console.log(item.getItemInfo());
