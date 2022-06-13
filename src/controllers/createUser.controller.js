import createUserService from "../services/createUser.service";

const createUserController = async (request, response)=> {
    const {name, email, password, isAdm} = request.body
    const userInfo = await createUserService(name, email, password, isAdm)
    return response.status(201).json(userInfo)
}

export default createUserController