import { Car } from "./Car.js";
import { showResult } from "./main.js";

export class SportiveCar extends Car {
    #enginePower;

    constructor (brand, model, color, cretion, displacement, enginePower){
        super(brand, model, color, cretion, displacement);
        this.#enginePower = enginePower
    }

    sportiveModeOn(){
        const message = `El modo deportivo del coche ${this.brand}, modelo ${this.model} se ha activado. <br/>`
        showResult(message);
    }

    get enginePower(){
        return this.#enginePower;
    }

    set enginePower(value){
        this.#enginePower = value;
    }

    // Sobreescribimos método showDetails
    showDetails(){
        // Método showDetails de la clase padre Car
        super.showDetails();
        // Agregar la información de la clase hija SportiveCar
        const sportiveCarData = `El coche ${this.brand}, con modelo ${this.model} tiene un motor con potencia ${this.#enginePower}.`;
        showResult(sportiveCarData)
    }
}