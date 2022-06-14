import users from "../database";
import jwt from  "jsonwebtoken"
import * as bcrypt from "bcryptjs"

const userLoginService = (response, email, password) => {
    const user = users.find((element) => element.email === email)
    
    if(!user){
        return response.status(401).json({message: "Wrong email/password"})
    }

    const passwordMatch = bcrypt.compareSync(password, user.password)

    if(!passwordMatch){
        return response.status(401).json({message: "Wrong email/password"})
    }

    const token = jwt.sign({uuid: user.uuid, isAdm: user.isAdm}, "SECRET_KEY", {expiresIn: "24h"} )

    return {token}
}

export default userLoginService