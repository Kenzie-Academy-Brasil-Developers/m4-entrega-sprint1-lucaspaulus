import listUserProfileService from "../services/listUserProfile.service";
import usersWithoutPassword from "../utils/usersWithoutPassword";
const listUserProfileController = (request, response) =>{
    const {uuid} = request.user
    const userInfo = listUserProfileService(uuid)

    const usersWithoutPasswordToResponse = usersWithoutPassword(userInfo)

    return response.status(200).json(usersWithoutPasswordToResponse)
}

export default listUserProfileController