const Users = require('../users/users-model.js');
const Posts = require('../posts/posts-model.js');

function logger(req, res, next) {
  // do your magic!
  console.log(`[${new Date().toISOString()} ${req.method} to ${req.url}]`);
  next();
}

function validateUserId(req, res, next) {
  // do your magic!
  return (req, res, next) => {
    Users.getById(req.params.id)
      .then(user => {
        if(user) {
          req.user = user;
          next();
        } else {
          res.status(404).json({
            message: "User not found."
          })
        }
      })
      .catch(error => {
        next(error);
      })
  }
}

function validateUser(req, res, next) {
  // do your magic!
  return (req, res, next) => {
    if(!req.body) {
      return res.status(400).json({
        message: "Missing user data."
      })
    } else if (!req.body.name) {
      return res.status(400).json({
        message: "Missing rquired name field."
      })
    }
    next();
  }
}

function validatePostId(req, res, next) {
  // do your magic!
  return (req, res, next) => {
    Posts.getById(req.params.id)
      .then(post => {
        if(user) {
          req.post = post;
          next();
        } else {
          res.status(404).json({
            message: "Post not found."
          })
        }
      })
      .catch(error => {
        next(error);
      })
  }
}

function validatePost(req, res, next) {
  // do your magic!
  return (req, res, next) => {
    if(!req.body) {
      return res.status(400).json({
        message: "Missing post data."
      })
    } else if (!req.body.text) {
      return res.status(400).json({
        message: "Missing rquired text field."
      })
    }
    next();
  }
}

// do not forget to expose these functions to other modules

module.exports = {
  logger : logger,
  validateUserId : validateUserId,
  validateUser : validateUser, 
  validatePostId: validatePostId, 
  validatePost: validatePost
}