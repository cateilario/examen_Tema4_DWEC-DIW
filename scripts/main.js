import { Car } from "./Car.js";
import { SportCar } from "./SportCar.js";

const resultContainer = document.getElementById("content")

export const showResult = message => {
    resultContainer.innerHTML += `<p>${message}</p>`;
}









































// Creación de instancias de la clase ...
const fourwheel1 = new Pickup('BMW', 'X5', 'Negro', 2018, '3000', true);

const fourwheelObject = {
    brand: fourwheel1.brand,
    model: fourwheel1.model,
    color: fourwheel1.color,
    creation: fourwheel1.creation, 
    displacement: fourwheel1.displacement,
    traction: fourwheel1.traction
}

// Almacenar los datos en el localStorage mediante un bucle
for (let key in fourwheelObject) {
    if(fourwheelObject.hasOwnProperty(key)) { // va comprobando el indice
        localStorage.setItem(key, fourwheelObject[key]);
    }
}

// Almacenar datos - Guardar el JSON en el localStorage, haciendo la transformación de la variableObject a un string.
localStorage.setItem("car", JSON.stringify(carObject));

// Recuperar datos - Mostar el Object en consola del JSON que hemos guardado en el localStorage
console.log(JSON.parse(localStorage.getItem("car")));
console.log(localStorage.getItem("car")); // JSON sin transformar
