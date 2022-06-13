import users from "../database";
import {v4 as uuid} from "uuid";
import * as bcrypt from "bcryptjs"

const createUserService = async (name, email, password, isAdm = false)=>{
    const hashPassword = await bcrypt.hash(password, 12)
    const date = new Date().toLocaleString()

    const newUser = {
        name,
        email,
        password: hashPassword,
        isAdm,
        createdOn: date,
        updatedOn: date,
        uuid: uuid()
    }

    users.push(newUser)
    return newUser
}

export default createUserService