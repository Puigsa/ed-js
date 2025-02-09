class Autobus {
    constructor (capacidad, pasajeros, matricula, listadoConductores){
        this.capacidad = capacidad
        this.pasajeros = pasajeros
        this.matricula = matricula
        this.listadoConductores = listadoConductores
    }

    getCapacidad(){
        return this.capacidad;
    }
    setCapacidad(capacidad){
        this.capacidad=capacidad;
    }
    getPasajeros(){
        return this.pasajeros;
    }
    setPasajeros (pasajeros){
        this.pasajeros = pasajeros;
    }
    getMatricula() {
        return this.matricula;
    }
    setMatricula (matricula) {
        this.matricula = matricula;
    }
    getListadoConductores(){
        return this.listadoConductores;
    }
    setListadoConductores (listadoConductores) {
        this.listadoConductores = listadoConductores;
    }

    mostrarDatosAutobus() {
        console.log ("Información del autobus: Capacidad = " + this.capacidad + ", pasajeros: " + this.pasajeros + ", matricula; " + this.matricula + ", listado de conductores: " + this.listadoConductores);

    }
    subir (numPasajeros){
        this.pasajeros += numPasajeros;
        if (this.pasajeros>this.capacidad){
           this.pasajeros=this.capacidad;
        }
    }
    bajar (numPasajeros){
        this.pasajeros -= numPasajeros;
        if (this.pasajeros<0){
            this.pasajeros=0;
        }
    }
    buscarConductor(licencia){
        for (var i = 0; i<this.listadoConductores.length; i++){
            if (licencia==listadoConductores[i].getLicencia){
                return true;
            }else{
                return false;
            }
        }
    }
}

class Conductor { 
    constructor(nombre, licencia){
        this.nombre = nombre;
        this.licencia = licencia;
    }
    getNombre(){
        return this.nombre;
    }
    setNombre(nombre){
        this.nombre=nombre;
    }

    getLicencia(){
        return this.licencia;
    }

    setLicencia (licencia){
        this.licencia = licencia;
    }

    mostrarDatosConductor () {
        console.log ("Datos del conductor: Nombre = " + this.nombre + "y licencia = " + this.licencia);
    }
}

function main(){

    let listadoConductores = new Array();
    listadoConductores[0] = new Conductor(Paco, 1234);
    listadoConductores[1] = new Conductor(Manolo, 5678);
    listadoConductores[2] = new Conductor(Pepe, 9123);

    console.log(mostrarDatosConductor(listadoConductores));



}