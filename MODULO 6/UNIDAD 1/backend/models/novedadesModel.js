var pool=require('./bd');
const async = require('hbs/lib/async');


/*trae para listar las novedades*/
async function getNovedades(usuario) {       
    try {
        var rows=await pool.query('select * from nov1 where usuario=? ',[usuario]);   
        console.log(rows);
        return rows;
    } catch (error) {
        console.log(error);
    } 
}

/*llama para agregar las novedades*/
async function insertNovedades(obj, usuario) {
    try {
        var rows =await pool.query ('insert into nov1 set?  ',[ obj, usuario]);
        console.log(rows);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    } 
}

/*llama para eliminar las novedades*/
async function deleteNovedades(item) {
        var query ='delete from nov1 where item=? ';
        var rows =await pool.query (query, [item]);
        return rows;
    } 


/*para modificar--> traer noveades por item*/
async function getNovedadesById(item) {
    var query ='select * from nov1 where item=? ';
    var rows =await pool.query (query, [item]);
    console.log( rows);
    return rows[0];
} 

/* para modificar UPDATE las novedades*/
async function modificarNovedades(obj, item) {
    try {
        var query ='update nov1 set? where item=? ';
        var rows =await pool.query (query, [obj, item]);
        return rows;
    } catch (error) {
        throw error;
    } 
}

module.exports = { getNovedades , insertNovedades, deleteNovedades, getNovedadesById, modificarNovedades}