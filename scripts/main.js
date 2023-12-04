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












































// const fourwheelObject = {
//     brand: fourwheel1.brand,
//     model: fourwheel1.model,
//     color: fourwheel1.color,
//     creation: fourwheel1.creation, 
//     displacement: fourwheel1.displacement,
//     traction: fourwheel1.traction
// }

// // Almacenar los datos en el localStorage mediante un bucle
// for (let key in fourwheelObject) {
//     if(fourwheelObject.hasOwnProperty(key)) { // va comprobando el indice
//         localStorage.setItem(key, fourwheelObject[key]);
//     }
// }

// // Almacenar datos - Guardar el JSON en el localStorage, haciendo la transformación de la variableObject a un string.
// localStorage.setItem("car", JSON.stringify(carObject));

// // Recuperar datos - Mostar el Object en consola del JSON que hemos guardado en el localStorage
// console.log(JSON.parse(localStorage.getItem("car")));
// console.log(localStorage.getItem("car")); // JSON sin transformar
