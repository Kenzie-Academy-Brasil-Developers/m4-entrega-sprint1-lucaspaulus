import jwt from "jsonwebtoken"

const verifyAdmMiddleware = (request, response, next) => {
    let token = request.headers.authorization
    //const {id} = request.params
    //const {uuid, isAdm} = request.user

    token = token.split(" ")[1]
    const decoded = jwt.decode(token)

    if(!decoded.isAdm){

        return response.status(401).json({message: "Unauthorized"})
        
        
    }
    
    next()
}

export default verifyAdmMiddleware