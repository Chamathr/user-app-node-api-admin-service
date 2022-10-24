const UserRepository = require('../repositories/userHandle.repository')

const getAllUsers = async () => {
    try{
        const response = await UserRepository.getAllUsers()
        return response
    }
    catch(error){
        return error
    }
}

const approveUser = async (userEmail, userData) => {
    try{
        const response = await UserRepository.approveUser(userEmail, userData)
        return response
    }
    catch(error){
        return error
    }
}

const deleteUser = async (userEmail) => {
    try{
        const response = await UserRepository.deleteUser(userEmail)
        return response
    }
    catch(error){
        return error
    }
}

module.exports = { getAllUsers, approveUser, deleteUser }