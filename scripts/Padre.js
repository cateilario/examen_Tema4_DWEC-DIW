










































// Clase Padre
export class Padre {
        #brand;
        #model;
        #color;
        #creation;
        #displacement;
    
        // Constructor con parámetros
        constructor(brand, model, color, creation, displacement){
            // Encapsulamos el atributo
            this.#brand = brand;
            this.#model = model;
            this.#color = color;
            this.#creation = creation;
            this.#displacement = displacement;
        }
    
        // MÉTODOS
        showDetails(){
            const data = `
                La marca es ${this.#brand} <br/>
                El modelo es ${this.#model} <br/>
                Su color es ${this.#color} <br/>
                Se fabricó en el año ${this.#creation} <br/>
                Cilindrada de ${this.#displacement} 
            `;
    
            // Llamar a la función showResult definida en el main.js. No es un método propio de cada clase
            // Esta función si estuviéramos con back-end no estaría aqui
            showResult(data);
        }
    
        speedUp(speed){
            const message = `<br/> Se ha acelerado hasta ${speed}`;
            showResult(`<p>${message}</p>`);
        }
    
        start(){
            const message = `<br/>El coche ${this.#brand}, ${this.#model}, de color ${this.color}, ha arrancado.`;
            showResult(`<p>${message}</p>`);
        }
    
        slowDown(){
            const message = `<br/>El coche ${this.#brand}, ${this.#model}, de color ${this.color}, ha parado.`;
            showResult(`<p>${message}</p>`);
        }
    
        // GETTER Y SETTER
        get brand(){
            return this.#brand;
        }
    
        set brand(value){
            this.#brand = value;
        }
    
        get model(){
            return this.#model;
        }
    
        set model(value){
            this.#model = value;
        }
    
        get color(){
            return this.#color;
        }
    
        set color(value){
            this.#color = value;
        }
    
        get creation(){
            return this.#creation;
        }
    
        set creation(value){
            this.#creation = value;
        }
    
        get displacement(){
            return this.#displacement;
        }
    
        set displacement(value){
            this.#displacement = value;
        }


}