const Joi = require('joi');

//user validation schema
const createUserSchema = Joi.object({
  username: Joi.string().min(3).max(30).required(),
  password: Joi.string().min(6).required(),
  email: Joi.string().email().required(),
  role_id: Joi.number().integer().required(),
  parent_id: Joi.string().uuid().required(), 
  permissionIds: Joi.array().items(Joi.string().uuid()), 
});

module.exports = {
  createUserSchema,
};
