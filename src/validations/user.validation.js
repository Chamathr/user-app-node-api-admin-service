const { Joi, Segments } = require('celebrate');

const userValidation = {

    approveUser: {
        [Segments.PARAMS]: {
            email: Joi.string().email().required()
        },
        [Segments.BODY]: Joi.object().keys({
            status: Joi.string().required()
        })
    },

    deleteUser: {
        [Segments.PARAMS]: {
            email: Joi.string().email().required()
        }
    }
}

module.exports = { userValidation }