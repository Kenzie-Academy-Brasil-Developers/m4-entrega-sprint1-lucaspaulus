import users from "../database";

const listUserProfileService = (id)=> {
    const userInfo = users.find(element=> element.uuid === id)
    return userInfo

}

export default listUserProfileService