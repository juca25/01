const sum = (a,b,c) =>{
    return a+b+c
}

class Coche {
    constructor(){
        this.door = 4
    }
    increaseDoor(){
        this.door++
    }
}

const miCoche = new Coche()

miCoche.increaseDoor()

console.log(miCoche.door)