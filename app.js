
const {crearTabla}=require('./docs/multiplicar.js');
const argv = require('./config/yargs.js');

require('colors');

crearTabla(argv.b, argv.l, argv.h)
    .then( nombreArchivo=> console.log(nombreArchivo.rainbow))
    .catch(err=> console.log(err))