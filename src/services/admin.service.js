const UserRepository = require('../repositories/admin.repository')

const getAllUsers = async () => {
    try{
        const response = await UserRepository.getAllUsers()
        return response
    }
    catch(error){
        return error
    }
}

const updateUser = async (userEmail, userData) => {
    try{
        const response = await UserRepository.updateUser(userEmail, userData)
        return response
    }
    catch(error){
        return error
    }
}

module.exports = { getAllUsers, updateUser }