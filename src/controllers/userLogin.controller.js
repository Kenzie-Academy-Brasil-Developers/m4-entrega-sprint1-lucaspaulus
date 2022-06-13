import users from "../database";
import userLoginService from "../services/userLogin.service";

const userLoginController = (request, response)=> {

    try{
        const {email, password} = request.body
        const token = userLoginService(email, password)

        return response.status(200).json({token})
    }catch(error){
        return response.status(401).json({message: error.message})
    }
    
}

export default userLoginController