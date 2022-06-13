import users from "../database";

const deleteUserService = (response, uuid) =>{
    const userIndex = users.findIndex((element) => element.uuid === uuid)

    if(userIndex === -1){
        return response.status(404).json({message: "User not found"}) 
    }

    users.splice(userIndex, 1)

    return response.status(200).json({message: "User deleted with success"}) 
}

export default deleteUserService