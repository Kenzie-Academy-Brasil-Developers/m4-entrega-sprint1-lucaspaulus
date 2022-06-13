import deleteUserService from "../services/deleteUser.service";

const deleteUserController = (request, response) =>{
    const {id} = request.params

    const deleteUser = deleteUserService(response, id)
    return response.status(200).json(deleteUser)
   
}

export default deleteUserController