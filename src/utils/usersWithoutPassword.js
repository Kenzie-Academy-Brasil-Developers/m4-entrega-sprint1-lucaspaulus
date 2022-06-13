export default function usersWithoutPassword(userInfo){

    const usersWithoutPassword = Object.keys(userInfo)
                                .filter((key)=> key !== "password")
                                .reduce((previousValue, atualValue)=>{
                                    return Object.assign(previousValue, {
                                        [atualValue]: userInfo[atualValue]
                                    })
                                },{})
    console.log(usersWithoutPassword)
    return usersWithoutPassword
}
