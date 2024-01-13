let animal = {
    eats: true
};

let rabbit = {
    jumps: true
};

rabbit.__proto__ = animal; // sets rabbit.[[Prototype]] = animal
// we can find both properties in rabbit now: __proto__ is used only for reading properties

class Animal{
    constructor(name){
        this.name = name;
        console.log("Object created")
    }
    eats(){
        console.log("Animal eats")
    }
    jumps(){
        console.log("Animal jumps")
    }
}

class Lion extends Animal{
    constructor(name){
        super(name);
        console.log("Lion created")
    }
    
}

let a = new Animal("Bunny");
console.log(a.eats());
let l = new Lion("Simba");
console.log(l);