const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authConfig = require('../config/auth.config')

const getAllUsers = async () => {
    try {
        const response = await prisma.user.findMany()
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

const approveUser = async (userEmail, userData) => {
    try {
        let responseBody = null
        const userExists = await prisma.user.findUnique({
            where: {
                email: userEmail
            }
        })
        if (!userExists) {
            responseBody = {
                status: 404,
                message: 'user not found',
                body: 'user not found'
            }
        } else {
            const response = await prisma.user.update({
                where: {
                    email: userEmail
                },
                data: {
                    status: userData?.status
                }
            })
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

module.exports = { getAllUsers, approveUser }