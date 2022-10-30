const UserServices = require('../services/admin.service')

const getAllUsers = async (req, res, next) => {
    try {
        const response = await UserServices.getAllUsers()
        res.status(response?.status).send(response)
    }
    catch (error) {
        const errorBody = {
            status: 500,
            message: 'failed',
            body: error
        }
        res.status(500).send(errorBody)
    }
}

const updateUser = async (req, res, next) => {
    try {
        const response = await UserServices.updateUser(req?.params?.email, req?.body)
        res.status(response?.status).send(response)
    }
    catch (error) {
        const errorBody = {
            status: 500,
            message: 'failed',
            body: error
        }
        res.status(500).send(errorBody)
    }
}

module.exports = { getAllUsers, updateUser }