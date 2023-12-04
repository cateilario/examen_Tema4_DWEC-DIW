import { Car } from "./Car.js";
import { showResult } from "./main.js";

export class SportiveCar extends Car {
    #power;

    constructor (brand, model, color, cretion, displacement, power){
        super(brand, model, color, cretion, displacement);
        this.#power = power
    }

    sportiveMode(){
        const message = `El modo deportivo del coche ${this.brand}, modelo ${this.model} se ha activado. <br/>`
    }

    get power(){
        return this.#power;
    }

    set power(value){
        this.#power = value;
    }

    showDetails(){
        // Método showDetails de la clase padre Car
        super.showDetails();
        // Agregar la información de la clase hija SportiveCar
        const sportiveCarData = `Número de pasajeros: ${this.#power}`;
        showResult(sportiveCarData)
    }
}