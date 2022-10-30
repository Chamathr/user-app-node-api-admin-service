const { Joi, Segments } = require('celebrate');

const userValidation = {

    updateUser: {
        [Segments.PARAMS]: {
            email: Joi.string().email().required()
        },
        [Segments.BODY]: Joi.object().keys({
            status: Joi.string().required()
        })
    }
}

module.exports = { userValidation }