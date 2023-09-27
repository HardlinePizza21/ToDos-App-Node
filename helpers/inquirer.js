const inquirer = require('inquirer');
const { validate } = require('uuid');
require('colors')

const menuOpts = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Que desea hacer?',
        choices: [
            {
                value: '1',
                name: '1. Crear tarea',
            },
            {
                value: '2',
                name: '2. Listar tareas',
            },
            {
                value: '3',
                name: '3. Listar tareas completadas',
            },
            {
                value: '4',
                name: '4. Listar tareas pendientes',
            },
            {
                value: '5',
                name: '5. Completar tarea(s)',
            },
            {
                value: '6',
                name: '6. Borrar tarea',
            },
            {
                value: '0',
                name: '0. Salir',
            },
        ],
    }
]



const inquirerMenu = async() => {


    console.clear()
    console.log('====================='.green);
    console.log('Seleccione una opcion'.green);
    console.log('=====================\n'.green);

    const {opcion} = await inquirer.prompt(menuOpts);

    return opcion;
}

const pausa = async() => {

    const pregunta = [
        {
            type: 'input',
            name: 'enter',
            message: `Presiones ${ 'Enter'.green } para continuar...` 
        }
    ]

    console.log('\n')

    await inquirer.prompt(pregunta);


}

const leerInput = async(message) => {

    const pregunta = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value){
                if(value.length === 0){
                    return `Debes ingresar una descripcion`
                }
                return true
            }

        },
    ]
    const {desc} = await inquirer.prompt(pregunta); 
    return desc;


}

module.exports = {
    inquirerMenu,
    pausa,
    leerInput,
}





