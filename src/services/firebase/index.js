const {initializeApp, cert} = require("firebase-admin");

const serviceAccount = require("../../utils/constants/firebase_service_account.json");

const app = initializeApp({
  credential: cert(serviceAccount),
  databaseURL: 'https://ejemploclase-df075.firebaseio.com'
});


module.exports = app;

// const: valores inmuntables, no mutan o cambian de valor y por lo tanto el tipo de dato tampoco
// let: solo se puede leer mas que en en el archivo de origen, 
// var: esta disponible en todos lados´--------------> ya no se utiliza más.

//tiene que ver con un tema de scope -> alcance
//SCOPE: pregunta de entrevista de trabajo