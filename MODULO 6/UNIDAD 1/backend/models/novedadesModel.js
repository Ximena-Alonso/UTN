var pool=require('./bd');
const async = require('hbs/lib/async');


/*trae para listar las novedades*/
async function getNovedades(usuario) {
    console.log(usuario);
        
    try {
        var rows=await pool.query('select * from nov1 where usuario=? ',[usuario]);
        
        
        console.log(rows);
        return rows;
    } catch (error) {
        console.log(error);
    } 
}

/*llama para agregar las novedades*/
async function insertNovedades(obj) {
    try {
        var query ='insert into novedades set?';
        var rows =await pool.query (query, [obj]);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    } 
}

module.exports = { getNovedades , insertNovedades}