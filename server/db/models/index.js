const User = require('./user')
const Form = require('./form')
const Question = require('./question')
const Response = require('./response')
const Comment = require('./comment')
/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */

Question.belongsTo(Form)
Form.hasMany(Question)

Response.belongsTo(Form)
Form.hasMany(Response)

Comment.belongsTo(User)
User.hasMany(Comment)

module.exports = {
  User,
  Form,
  Question,
  Response,
  Comment
}
