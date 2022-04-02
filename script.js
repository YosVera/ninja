//YosVera
//---------Parte_1 Ninja
class Ninja { //creo clase
    constructor(nombre) { //llamo al parametro dentro del constructor
        this.nombre = nombre;
        this.salud = 0;
        this.velocidad = 3;
        this.fuerza = 3;
    }
    sayName() {
        console.log("Ninja");
    }

    showStats() {
        this.drinkSake();
        console.log("Nombre = ", this.nombre, " , Salud =", this.salud,
            " , Velocidad = ", this.velocidad,
            " , Fuerza = ", this.fuerza);
    }

    drinkSake() {
        this.salud += 10;
    }
}
console.log("\n---- Parte I - Ninja----")
const ninja_1 = new Ninja("Hyabusa");
ninja_1.sayName(); // Ninja
ninja_1.showStats(); // Nombre = Hyabusa , Fuerza =  3 , Velocidad =  3 ,Salud = 10
console.log(ninja_1); // Ninja {nombre: 'Hyabusa', salud: 10, velocidad: 3, fuerza: 3}


//---------Parte_2 SuperNinja
class Sensei extends Ninja {
    constructor(nombre, salud, velocidad, fuerza, sabiduria) {
        super(nombre, salud, velocidad, fuerza);
        this.sabiduria = 10;
        this.salud = 200;
        this.velocidad = 10;
        this.fuerza = 10;
    }
    speakWisdom() {
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.");
    }
}

console.log("\n---- Parte II - SuperNinja----")
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom(); // "Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses."
superSensei.showStats(); // -> "Nombre: Master Splinter, Salud: 210, Velocidad: 10, Fuerza: 10"
console.log(superSensei); //Sensei {nombre: 'Master Splinter', salud: 200, velocidad: 10, fuerza: 10, sabiduria: 10}