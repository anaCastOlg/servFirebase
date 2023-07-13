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

//function patchUser(req, res){
//    const {auth} = req;
//    const {
//        email,
//        displayName,
//        Password,
//    }= req.body;
//    Controller.patchUserUser({
//        auth,
//        email,
//        displayName,
//        password
//    })
//    .then((result) => res.send(result))
//    .catch((error) => res.send(error))
//}

function updateUser(req, res){
    const {auth} = req;
    const {
        email,
        displayName,
        newPassword,
    }= req.body;

    Controller.updateUser({
        auth,
        email,
        displayName,
        newPassword
    })
    .then((result) => res.send(result))
    .catch((error) => res.send(error))
}

function deleteUser(req, res) {
    const {auth} = req;
    const {email} = req.body;

    Controller.deleteUser({
        auth,
        email
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
//router.patch("/", patchUser)
router.patch("/", updateUser)
router.delete("/", deleteUser)

module.export = router