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

async function patchUser(params){
    const{auth, email, displayName, password} = params;

    const user = await auth.patchUser(email, {
        displayName,
        password
    });
}

module.exports = {
    addUser,
    getUser,
    patchUser
}