async function addUser(params) {
    const {
        auth,
        email,
        password,
        displayName
    } = params;

    const user = await auth.createUser({
        email,
        password,
        displaName
    });
    
    return user;
}

async function getUser(params) {
    const {auth, email} = params;
    const user = await auth.getUserByEmail(email);
    return user;
}

//async function patchUser(params){
 //   const{auth, email, displayName = "", password = ""} = params;

//    const user = await auth.patchUser(email, {
//        displayName,
//        password
//    });
//}

async function updateUser(params) {
    const{auth, email, displayName = "", newPassword = ""} = params;
    const dataToUpdate = {};

    if (displayName) {
        dataToUpdate.displaName = displayName;
    }

    if (newPassword) {
        dataToUpdate.password = newPassword;
    }

    const user = await getUser({auth, email});
    const {uid} = user;

    await auth.updateUser(uid, dataToUpdate);

    const newDataUser = await getUser({auth, email});

    return newDataUser;
}

async function deleteUser(params) {
    const {auth, email} = params;
    const user = await getUser({auth, email});

    const {uid} = user;
    await auth.deleteUser(uid);
    return true;
}

module.exports = {
    addUser,
    getUser,
    //patchUser, 
    updateUser,
    deleteUser
}