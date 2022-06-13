import users from "../database";
import jwt from  "jsonwebtoken"
import * as bcrypt from "bcryptjs"

const userLoginService = (email, password) => {
    const userInfo = users.find(element => element.email === email)
    
    if(!userInfo){
        throw new Error("Wrong email/password")
    }

    const passwordMatch = bcrypt.compareSync(password, userInfo.password)

    if(!passwordMatch){
       
        throw new Error("Wrong email/password")
    }

    const {uuid, isAdm} = userInfo
    const token = jwt.sign({uuid: uuid, isAdm: isAdm}, "5a8d2d734a1352f8d113d22eabf2d1cb", {expiresIn: "24h", subject: uuid} )

    return token
}

export default userLoginService