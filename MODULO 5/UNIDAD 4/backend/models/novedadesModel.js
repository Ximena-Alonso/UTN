var pool=require('./bd');
const async = require('hbs/lib/async');

/*llama para listar las novedades*/
async function getNovedades() {
    try {
        var query ='select * from novedades';
        var rows =await pool.query (query);
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