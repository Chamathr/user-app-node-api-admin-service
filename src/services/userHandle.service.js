const axios = require('axios')
const UserServiceConfig = require('../config/userService.config')

const userServiceBaseUrl = UserServiceConfig?.USER_SERVICE_BASE_URL
const userServicePrefix = UserServiceConfig?.USER_SERVICE_PREFIX

const getAllUsers = async () => {
    try{
        const response = await axios.get(`${userServiceBaseUrl}/${userServicePrefix}/users`)
        const responseBody = {
            status: 200,
            message: 'success',
            body: response?.data?.body
        }
        return responseBody
    }
    catch(error){
        const errorBody = {
            status: 500,
            message: 'failed',
            body: error
        }
        return errorBody
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

const permanentDeleteUser = async (userEmail) => {
    try{
        const response = await UserRepository.permanentDeleteUser(userEmail)
        return response
    }
    catch(error){
        return error
    }
}

module.exports = { getAllUsers, approveUser, deleteUser, permanentDeleteUser }