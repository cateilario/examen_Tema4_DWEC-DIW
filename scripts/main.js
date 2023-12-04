import { Car } from "./Car.js";
import { SportiveCar } from "./SportiveCar.js";

const resultContainer = document.getElementById("content")

// Mostrar resultados
export const showResult = message => {
    resultContainer.innerHTML += `<p>${message}</p>`;
}

// Creación de instancias de la clase Car
// constructor(brand, model, color, creation, displacement) 
const car1 = new Car('BMW', 'CLK', 'rojo', 1992, '2400');

car1.showDetails();
car1.start();
car1.speedUp(140);
car1.slowDown();

// Almacenamiento en localStorage

const carObject = {
    brand: 'BMW',
    model: 'CLK',
    color: 'rojo',
    creation: 1992, 
    displacement: '2400'
}

localStorage.setItem("vehiculo", JSON.stringify(carObject));

console.log(JSON.parse(localStorage.getItem("vehiculo")));

// Creación instancia de Coche Deportivo:


const sportiveCar1 = new SportiveCar('Ferrari', 'Spider', 'amarillo', 2020, '4000', '500');

sportiveCar1.showDetails();
sportiveCar1.start();
sportiveCar1.speedUp(140);
sportiveCar1.slowDown();

// Almacenamiento en localStorage:

const sportiveCarObject = {
    brand: sportiveCar1.brand,
    model: sportiveCar1.model,
    color: sportiveCar1.color,
    creation: sportiveCar1.creation, 
    displacement: sportiveCar1.displacement,
    enginePower: sportiveCar1.enginePower
}

for (let key in sportiveCarObject) {
    if(sportiveCarObject.hasOwnProperty(key)) { 
        localStorage.setItem(key, sportiveCarObject[key]);
    }
}

// Eliminación propiedades del localStorage:
localStorage.removeItem(sportiveCar1.creation);
localStorage.removeItem(sportiveCarObject.color)

// Limpiar localStorage
//localStorage.clear()
