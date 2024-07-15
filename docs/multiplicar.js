
const fs=require('fs');

require('colors');

const crearTabla = async(base=1, list, hasta) => {

    try{
        let consola=
        `
############
TABLA del ${base}
############
`.red;
        let salida=`
############
TABLA del ${base}
############
`;

        for (let index = 1; index <= hasta; index++) {
            
            salida += `${base} X ${index} = ${index*base}\n`;
            consola += `${base} X ${index} = ${index*base}\n`;
            
        }

        if(list){
            console.log(consola);
        }

        fs.writeFileSync('./salida/table-'+base+'.txt', salida);

        return `tabla del ${base}`;

    }catch (err){
        throw err;
    }

}

module.exports ={
    crearTabla
};