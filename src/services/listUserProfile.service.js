import users from "../database";
import jwt from "jsonwebtoken"

const listUserProfileService = (token)=> {
    const decoded = jwt.decode(token)
    const user = users.find((element) => element.uuid === decoded.uuid)
    
    const {password, ...userData} = user
    return userData

}

export default listUserProfileService