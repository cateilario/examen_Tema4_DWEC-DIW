



































class Hijo extends Padre {
    #passengers;

    constructor (){
        super();
        this.#passengers = passengers
    }

    get passengers(){
        return this.#passengers;
    }

    set passengers(value){
        this.#passengers = value;
    }

    showDetails(){
        // Método showDetails de la 
        super.showDetails();
        // Agregar la información de la clase hija
        const vanData = `Número de pasajeros: ${this.passengers}`;
        showResult(vanData)
    }
}