require('colors');

const { guardarDB, leerDb } = require('./helpers/guardarArchivo');
const { inquirerMenu, pausa, leerInput, listadoTareasBorrar, confirmar, mostrarListadoCheckList } = require('./helpers/inquirer');
const Tareas = require('./models/tareas');




const main = async() => {


    let opt = ''

    const tareas = new Tareas();
    
    const tareasDb = leerDb();

    
    if(tareasDb){
        tareas.cargarTareasFromArray(tareasDb);
    }

    do {


        opt = await inquirerMenu();


        switch(opt){
            
            case '1':
                const desc =  await leerInput('Ingrese la descripcion de la tarea: ')
                tareas.crearTarea(desc);
            break;
            case '2':
                tareas.renderLista();
            break;
            case '3':
                tareas.listarPendientesCompletadas(true);
            break;
            case '4': 
                tareas.listarPendientesCompletadas(false)
            break;
            case '5':
                const ids = await mostrarListadoCheckList(tareas.listadoArr)
                tareas.toggleCompletadas(ids)
            break;
            case '6': 
                const id = await listadoTareasBorrar(tareas.listadoArr);
                if(id != '0'){
                    const ok = await confirmar('¿Estas seguro?')
                    if(ok){
                        tareas.borrarTareas( id );
                        console.log('Tarea borrada')
                    }                
                }
            break;
        }
                    
            guardarDB( tareas.listadoArr );

        if( opt !== '0') await pausa();

        
    }while(opt !== '0')





}

main();





