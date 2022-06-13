import deleteUserService from "../services/deleteUser.service";

const deleteUserController = (request, response) =>{
    const {id} = request.params

    const deleteUser = deleteUserService(id)
    return response.status(200).json({message: deleteUser})
   
}

export default deleteUserController