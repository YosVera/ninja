//YosVera
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
        console.log("Fuerza = ", this.fuerza,
            " , Velocidad = ", this.velocidad, " , Salud =", this.salud);
    }

    drinkSake() {
        this.salud += 10;
    }
}

const ninja_1 = new Ninja("Hyabusa");
ninja_1.sayName(); // Ninja
ninja_1.showStats(); // Fuerza =  3 , Velocidad =  3 ,Salud = 0
ninja_1.drinkSake(); //en este método agrega 10 de salud al Ninja

console.log(ninja_1); // Ninja {nombre: 'Hyabusa', salud: 10, velocidad: 3, fuerza: 3}