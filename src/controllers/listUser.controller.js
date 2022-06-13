import listUserService from "../services/listUser.service";

const listUserController = (request, response)=> {
    const userInfo = listUserService()
    const {isAdm} = request.user
    
    if(isAdm){
        return response.status(200).json(userInfo)
    }else{
        return response.status(401).json({message:"Unauthorized"})
    }
    
}

export default listUserController