import listUserProfileService from "../services/listUserProfile.service";

const listUserProfileController = (request, response) =>{
    let token = request.headers.authorization
    token = token.split(" ")[1]

    const profile = listUserProfileService(token)
    return response.json(profile)
}

export default listUserProfileController