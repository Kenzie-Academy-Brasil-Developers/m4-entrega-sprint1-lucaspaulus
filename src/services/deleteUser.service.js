import users from "../database";

const deleteUserService = (uuid) =>{
    const userIndex = users.findIndex(element => element.uuid === uuid)

    if(userIndex === -1){
        return "User deleted with success";
    }

    users.splice(userIndex, 1)

    return "User deleted with success"
}

export default deleteUserService