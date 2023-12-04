/**
 * author: Caterina Ilario Paz
 * GitHub: 
 */

import { Car } from "./Car.js";
import { SportiveCar } from "./SportiveCar.js";

const resultContainer = document.getElementById("content")

// Mostrar resultados
export const showResult = message => {
    resultContainer.innerHTML += `<p>${message}</p>`;
}

// Creación de instancias de la clase Car
// constructor(brand, model, color, creation, displacement) 
resultContainer.innerHTML = `<h2>Nuestro coche base</h2>`;
const car1 = new Car('BMW', 'CLK', 'rojo', 1992, '2400');

car1.showDetails();
car1.start();
car1.speedUp(140);
car1.slowDown();

// Creación imagen coche deportivo
const carImg = document.createElement('img')
carImg.src = '/assets/coche.png';
carImg.classList.add('car');
document.body.appendChild(carImg);

// Almacenamiento en localStorage
const carObject = {
    brand: 'BMW',
    model: 'CLK',
    color: 'rojo',
    creation: 1992, 
    displacement: '2400'
}

// Guardar objeto, convirtiéndolo a string
localStorage.setItem("vehiculo", JSON.stringify(carObject));

// Recuperación objeto, convirtiéndolo otra vez a Objeto
console.log(JSON.parse(localStorage.getItem("vehiculo")));

// Creación instancia de Coche Deportivo:
resultContainer.innerHTML += `<h2>Nuestro coche deportivo</h2>`;

const sportiveCar1 = new SportiveCar('Ferrari', 'Spider', 'amarillo', 2020, '4000', '500');

sportiveCar1.showDetails();
sportiveCar1.start();
sportiveCar1.speedUp(140);
sportiveCar1.slowDown();

// Creación imagen coche deportivo
const sportiveCarImg = document.createElement('img')
sportiveCarImg.src = '/assets/cochesport.png';
sportiveCarImg.classList.add('sportive-car');
document.body.appendChild(sportiveCarImg);


// Almacenamiento en localStorage:
const sportiveCarObject = {
    brand: sportiveCar1.brand,
    model: sportiveCar1.model,
    color: sportiveCar1.color,
    creation: sportiveCar1.creation, 
    displacement: sportiveCar1.displacement,
    enginePower: sportiveCar1.enginePower
}

// Bucle para recorrer el objeto sportiveCarObject
for (let key in sportiveCarObject) {
    if(sportiveCarObject.hasOwnProperty(key)) { 
        // Guardamos en el localStorage cada par clave-valor
        localStorage.setItem(key, JSON.stringify(sportiveCarObject[key]));
    }
}

// Eliminación propiedades del localStorage:
localStorage.removeItem('color');
localStorage.removeItem('creation');

// Limpiar localStorage
// localStorage.clear()
