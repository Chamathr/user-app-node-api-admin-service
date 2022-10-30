const { Joi, Segments } = require('celebrate');

const adminValidation = {
    signupAdmin: {
        [Segments.BODY]: Joi.object().keys({
            name: Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string().required(),
            age: Joi.number().integer().required(),
        })
    },

    deleteAdmin: {
        [Segments.PARAMS]: {
            email: Joi.string().email().required()
        }
    },

    updateAdmin: {
        [Segments.HEADERS]: Joi.object({
            authorization: Joi.string().required(),
        }).unknown(),
        [Segments.PARAMS]: {
            email: Joi.string().email().required()
        },
        [Segments.BODY]: Joi.object().keys({
            name: Joi.string(),
            age: Joi.number().integer(),
            password: Joi.string().required()
        })
    },

    signinAdmin: {
        [Segments.BODY]: Joi.object().keys({
            email: Joi.string().email().required(),
            password: Joi.string().required(),
        })
    },
}

module.exports = { adminValidation }