import users from "../database";
const updateUserService = async ({response, id, ...toUpdate}) =>{
    const date = new Date().toLocaleString()
/* 
    const updatedUser = {
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
 */

    for(let prop in toUpdate){
        if(toUpdate[prop] === undefined){
            delete toUpdate[prop]
        }
    }

    const userIndex = users.findIndex((element)=> element.uuid === id)

    if(userIndex === -1){
        return response.status(404).json({message: "User not found"})
    }

    users[userIndex] = {...users[userIndex], ...toUpdate}

    const {password, ...user} = users[userIndex]

    return response.status(200).json(user)
}

export default updateUserService