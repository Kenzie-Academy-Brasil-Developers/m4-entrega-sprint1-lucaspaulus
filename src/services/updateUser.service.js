import users from "../database";
import usersWithoutPassword from "../utils/usersWithoutPassword";

const updateUserService = async (id, name, email) =>{
    const date = new Date().toLocaleString()

    const updatedUser = {
        id,
        name,
        email,
        updatedOn: date
    }

    const userIndex = users.findIndex(element => element.uuid === id)

    if(userIndex === -1){
        return "User not found"
    }

    users[userIndex] = {...users[userIndex], ...updatedUser}

    const usersWithoutPasswordReturn = usersWithoutPassword(users[userIndex])
    return usersWithoutPasswordReturn

}

export default updateUserService