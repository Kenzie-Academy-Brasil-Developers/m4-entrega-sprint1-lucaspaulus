import createUserService from "../services/createUser.service";

const createUserController = async (request, response)=> {
    const body = request.body
    const user = await createUserService(body.name, body.email, body.password, body.isAdm)

    const {password, ...userData} = user
    return response.status(201).json(userData)
}

export default createUserController