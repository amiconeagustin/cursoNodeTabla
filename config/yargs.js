const argv = require('yargs')
    .options('b',{
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'es el numero a multiplicar'
    })
    .options('l',{
        alias: 'list',
        type: 'boolean',
        default: true,
        describe:'para mostrar la lista en consola'
    })
    .options('h',{
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe:'numero maximo de tabla'
    })
    .check( (argv, options)=>{
        if(isNaN(argv.b)){
            throw 'ERRRO: LA BASE TIENE QUE SER UN NUMERO'  
        }
        return true
    })
    .argv;

    module.exports = argv;