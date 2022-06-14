import updateUserService from "../services/updateUser.service";
const updateUserController = (request, response) =>{
    const date = new Date().toLocaleString()
    const {id} = request.params
    const {name, email} = request.body
    
    const updatedUser = updateUserService({response, id, name, email, updatedOn: date})
    return response.status(200).json(updatedUser)
    
  
}

export default updateUserController