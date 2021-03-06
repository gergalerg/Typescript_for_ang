class Animal {
    private name: string;
    constructor(theName: string)  {this.name = theName; }
    move(meters: number = 0) {
        console.log(this.name + " moved " + meters + "m. ");
    }
}

class Snake extends Animal {
    constructor(name: string) { super(name); }
    move(meters = 5) {
        console.log("Slithering...");
        super.move(meters);
    }
}
class Horse extends Animal {
    constructor(name: string) { super(name); }
    move(meters = 45) {
        console.log("Galloping...");
        super.move(meters);
    }
}
var tom: Animal = new Horse("Tommy the Palomino");
var sam = new Snake("Sammy the Python");

sam.move();
tom.move(34);


