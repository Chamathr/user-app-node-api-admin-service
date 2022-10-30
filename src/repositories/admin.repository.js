const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authConfig = require('../config/auth.config')

const getAllAdmins = async () => {
    try {
        const response = await prisma.admin.findMany()
        const responseBody = {
            status: 200,
            message: 'success',
            body: response
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
    finally {
        await prisma.$disconnect()
    }
}

const signupAdmin = async (adminData) => {
    try {
        adminData.password = bcrypt.hashSync(adminData?.password, 8)
        let responseBody = null
        const adminExists = await prisma.admin.findUnique({
            where: {
                email: adminData?.email
            }
        })
        if (adminExists) {
            responseBody = {
                status: 409,
                message: 'admin already exits',
                body: 'admin already exits'
            }
        } else {
            const response = await prisma.admin.create(
                {
                    data: adminData
                }
            )
            responseBody = {
                status: 201,
                message: 'success',
                body: response
            }
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
    finally {
        await prisma.$disconnect()
    }
}

const deleteAdmin = async (adminEmail) => {
    try {
        let responseBody = null
        const adminExists = await prisma.admin.findUnique({
            where: {
                email: adminEmail
            }
        })
        if (!adminExists) {
            responseBody = {
                status: 404,
                message: 'admin not found',
                body: 'admin not found'
            }
        } else {
            const response = await prisma.admin.delete(
                {
                    where: {
                        email: adminEmail
                    }
                }
            )
            responseBody = {
                status: 200,
                message: 'success',
                body: response
            }
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
    finally {
        await prisma.$disconnect()
    }
}

const updateAdmin = async (adminEmail, adminData) => {
    try {
        adminData.password = bcrypt.hashSync(adminData?.password, 8)
        let responseBody = null
        const adminExists = await prisma.admin.findUnique({
            where: {
                email: adminEmail
            }
        })
        if (!adminExists) {
            responseBody = {
                status: 404,
                message: 'admin not found',
                body: 'admin not found'
            }
        } else {
            const response = await prisma.admin.update(
                {
                    where: {
                        email: adminEmail
                    },
                    data: {
                        name: adminData?.name,
                        password: bcrypt.hashSync(adminData?.password, 8),
                        age: adminData?.age
                    }
                }
            )
            responseBody = {
                status: 200,
                message: 'success',
                body: response
            }
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
    finally {
        await prisma.$disconnect()
    }
}

const signinAdmin = async (adminData) => {
    try {
        let responseBody = null
        const admin = await prisma.admin.findUnique({
            where: {
                email: adminData?.email
            }
        })
        if (!admin) {
            responseBody = {
                status: 404,
                message: 'invalid admin',
                body: 'invalid admin'
            }
        } else {
            const passwordIsValid = bcrypt.compareSync(
                adminData?.password,
                admin?.password
            );
            if (!passwordIsValid) {
                responseBody = {
                    status: 404,
                    message: 'invalid password',
                    body: 'invalid password'
                }
            } else {
                const token = jwt.sign({ email: admin?.email, adminRole: admin?.role }, authConfig.secret, {
                    expiresIn: authConfig.time
                });
                responseBody = {
                    status: 200,
                    message: 'succesfully logged in',
                    body: token
                }
            }
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
    finally {
        await prisma.$disconnect()
    }
}

module.exports = { getAllAdmins, signupAdmin, deleteAdmin, updateAdmin, signinAdmin }