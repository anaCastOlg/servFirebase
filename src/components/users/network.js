const express = require("express");
const Controlle = require("./controller")

const router = express.Router();

function addUser(req, res){
    const {auth} = req;
    const {
        email,
        password,
        displayName
    } = req.body;

    Controller.addUser({
        auth
    })
    .then((result) => res.send(result))
    .catch((error) => res.send(error))
}

function getUser(req, res){
    const {auth} = req;
    const { email } = req.body;

    Controller.getUser({
        auth,
        email
    })
    .then((result) => res.send(result))
    .catch((error) => res.send(error))


}

function patchUser(req, res){
    Controller.patchUserUser({
        auth,
        displayName,
        password
    })
    .then((result) => res.send(result))
    .catch((error) => res.send(error))
}



// /users post agregar
// /users patch actualizar
// /users delete eliminar
// /users get obtener

router.post("/", addUser)
router.get("/", getUser)
router.patch("/")

module.export = router