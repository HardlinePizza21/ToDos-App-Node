
const { validate } = require('uuid');
const Tarea = require('./tarea');
const colors = require('colors');

class Tareas {

    _listado = {};

    get listadoArr() {
        const listado = [];

        Object.keys(this._listado).forEach(key => {
            const tarea = this._listado[key];
            listado.push(tarea);
        })

        return listado
    }


    constructor(){
        this._listado = {};

    }

    borraTareas = (id = '') =>  {
        if(this._listado[id]){
            delete this._listado[id];
        }
    } 


    cargarTareasFromArray( tareas = [] ){

        this._listado = tareas;
        
    }

    crearTarea( desc = '' ) {

        const tarea = new Tarea(desc);

        this._listado[tarea.id] = tarea

    }

    renderLista(){
        this.listadoArr.forEach(({id, desc, completadoEn},contador) => {

            console.log(`${completadoEn? ((contador + 1) + ".").green : ((contador + 1) + ".").red} ${desc} :: ${completadoEn? "completado".green : "pendiente".red}`)
            
            contador += 1;
        })
    }

    listarPendientesCompletadas(completado = true) {

        let contador = 1;

        this.listadoArr.forEach(({id, desc, completadoEn}) => {
            let validacion = completadoEn? true : false;
            if(completado == validacion){
                console.log(`${(contador + ".").green} ${desc} :: ${completadoEn? completadoEn : "pendiente".red}`)
                contador += 1;
            }


        })


    }



}


module.exports = Tareas

