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

    const token = jwt.sign({uuid: uuid, isAdm: isAdm}, "5a8d2d734a1352f8d113d22eabf2d1cb", {expiresIn: "24h", subject: uuid} )

    return {token}
}

export default userLoginService