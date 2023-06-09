const axios = require('axios')
const UserServiceConfig = require('../config/userService.config')

const userServiceBaseUrl = UserServiceConfig?.USER_SERVICE_BASE_URL
const userServicePrefix = UserServiceConfig?.USER_SERVICE_PREFIX

const getAllUsers = async () => {
    try {
        const response = await axios.get(`${userServiceBaseUrl}/${userServicePrefix}/admin/users`)
        const responseBody = {
            status: 200,
            message: 'success',
            body: response?.data?.body
        }
        return responseBody
    }
    catch (error) {
        const errorBody = {
            status: 500,
            message: 'failed',
            body: error
        }
        return errorBody
    }
}

const updateUser = async (userEmail, userData) => {
    try {
        const response = await axios.put(`${userServiceBaseUrl}/${userServicePrefix}/admin/update-user/${userEmail}`, userData)
        const responseBody = {
            status: 200,
            message: 'success',
            body: response?.data?.body
        }
        return responseBody
    }
    catch (error) {
        const errorBody = {
            status: 500,
            message: 'failed',
            body: error
        }
        return errorBody
    }
}

const deleteUser = async (userEmail) => {
    try {
        const response = await axios.delete(`${userServiceBaseUrl}/${userServicePrefix}/admin/delete-user/${userEmail}`)
        const responseBody = {
            status: 200,
            message: 'success',
            body: response?.data?.body
        }
        return responseBody
    }
    catch (error) {
        const errorBody = {
            status: 500,
            message: 'failed',
            body: error
        }
        return errorBody
    }
}

const deleteUserPermanent = async (userEmail) => {
    try {
        const response = await axios.delete(`${userServiceBaseUrl}/${userServicePrefix}/admin/delete-user-permanent/${userEmail}`)
        const responseBody = {
            status: 200,
            message: 'success',
            body: response?.data?.body
        }
        return responseBody
    }
    catch (error) {
        const errorBody = {
            status: 500,
            message: 'failed',
            body: error
        }
        return errorBody
    }
}

module.exports = { getAllUsers, updateUser, deleteUser, deleteUserPermanent }