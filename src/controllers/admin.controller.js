const AdminService = require('../services/admin.service')

const getAllAdmins = async (req, res, next) => {
    try {
        const response = await AdminService.getAllAdmins()
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

const signupAdmin = async (req, res, next) => {
    try {
        const response = await AdminService.signupAdmin(req?.body)
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

const deleteAdmin = async (req, res, next) => {
    try {
        const response = await AdminService.deleteAdmin(req?.params?.email)
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

const updateAdmin = async (req, res, next) => {
    try {
        const response = await AdminService.updateAdmin(req?.params?.email, req?.body)
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

const signinAdmin = async (req, res, next) => {
    try {
        const response = await AdminService.signinAdmin(req?.body)
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

module.exports = { getAllAdmins, signupAdmin, deleteAdmin, updateAdmin, signinAdmin }