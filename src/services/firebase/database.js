//se encarga de la conexion a la base de datos de firebase
const{getFirestore} = require("firebase-admin/firestore")

const conexion = require("./");

function db(req, res, next){
    req.db = getFirestore(conexion);
    next();
}


module.exports =  db;
