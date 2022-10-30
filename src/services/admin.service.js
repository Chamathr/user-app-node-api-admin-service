const AdminRepository = require('../repositories/admin.repository')

const getAllAdmins = async () => {
    try{
        const response = await AdminRepository.getAllAdmins()
        return response
    }
    catch(error){
        return error
    }
}

const signupAdmin = async (adminData) => {
    try{
        const response = await AdminRepository.signupAdmin(adminData)
        return response
    }
    catch(error){
        return error
    }
}

const deleteAdmin = async (adminEmail) => {
    try{
        const response = await AdminRepository.deleteAdmin(adminEmail)
        return response
    }
    catch(error){
        return error
    }
}

const updateAdmin = async (adminEmail, adminData) => {
    try{
        const response = await AdminRepository.updateAdmin(adminEmail, adminData)
        return response
    }
    catch(error){
        return error
    }
}

const signinAdmin = async (adminData) => {
    try{
        const response = await AdminRepository.signinAdmin(adminData)
        return response
    }
    catch(error){
        return error
    }
}

module.exports = { getAllAdmins, signupAdmin, deleteAdmin, updateAdmin, signinAdmin }