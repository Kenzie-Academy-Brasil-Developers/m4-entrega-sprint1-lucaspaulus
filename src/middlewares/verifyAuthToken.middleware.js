import jwt from "jsonwebtoken"

const verifyAuthTokenMiddleware = (request, response, next)=> {
    let token = request.headers.authorization

    if(!token){
        return response.status(401).json({message: "Missing authorization headers"})
    }

    token = token.split(" ")[1]

    jwt.verify(token, "5a8d2d734a1352f8d113d22eabf2d1cb", (error, decoded)=>{
        if(error){
            return response.status(401).json({message: "Unauthorized"})
        }
        
        next()
    }) 
    
   
}

export default verifyAuthTokenMiddleware