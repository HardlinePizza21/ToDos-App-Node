require('colors');

const { inquirerMenu, pausa } = require('./helpers/inquirer');
const Tareas = require('./models/tareas');




const main = async() => {

    console.log('Hola mundo')

    let opt = ''
    const tareas = new Tareas();



    do {

        opt = await inquirerMenu();

        switch(opt){
            case '1':
                break;
            case '2':
                console.log(tareas._listado)
            default:
                break;
        }

        if( opt !== '0')await pausa();

        
    }while(opt !== '0')





}

main();





