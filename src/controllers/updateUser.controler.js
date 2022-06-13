import updateUserService from "../services/updateUser.service";

const updateUserController = (request, response) =>{
    const {id} = request.params
    const {name, email} = request.body

    const updateUser = updateUserService(id, name, email)
    return response.status(200).json(updateUser)
    
  
}

export default updateUserController