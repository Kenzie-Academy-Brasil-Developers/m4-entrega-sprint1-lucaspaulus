import jwt from "jsonwebtoken"

const verifyUser = (request, response, next) =>{
    let token = request.headers.authorization

    const {id} = request.params

    token = token.split(" ")[1]
    const decoded = jwt.decode(token)

    if(!decoded.isAdm && id !== decoded.uuid){
        return response.status(401).json({message: "Missing admin permissions"})
    }

    next()
}


export default verifyUser;