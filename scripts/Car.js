import { showResult } from "./main.js";

export class Car {
    #brand;
    #model;
    #color;
    #creation;
    #displacement;

    constructor(brand, model, color, creation, displacement) {
        this.#brand = brand;
        this.#model = model;
        this.#color = color;
        this.#creation = creation;
        this.#displacement = displacement;
    }

    showDetails (){
        const data = ` 
            Marca: ${this.#brand} <br/>
            Modelo: ${this.#model} <br/>
            Color: ${this.#color} <br/>
            Año de abricación: ${this.#creation} <br/>
            Cilindrada: ${this.#displacement} <br/>
        `
        showResult(data);
    }

    speedUp(speed){
        const message = `El vehículo ha acelerado hasta ${speed} km/h.<br/>`
        showResult(message);
    }

    start() {
        const message = `El vehículo con marca ${this.#brand}, ha arrancado. <br/>`
        showResult(message);
    }

    slowDown(){
        const message = `El vehículo con marca ${this.#brand}, ha frenado. <br/>`;
        showResult(message);
    }

    // Getters y Setters

    get brand() {
        return this.#brand;
    }

    set brand(value){
        this.#brand = value;
    }

    get model() {
        return this.#model;
    }

    set model(value){
        this.#model = value;
    }

    get color() {
        return this.#color;
    }

    set color(value){
        this.#color = value;
    }

    get creation() {
        return this.#creation;
    }

    set creation(value){
        this.#creation = value;
    }

    get displacement() {
        return this.#displacement;
    }

    set displacement(value){
        this.#displacement = value;
    }

}


































    