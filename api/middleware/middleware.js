function logger(req, res, next) {
  // do your magic!

  /**
   * logs to the console the following information about each request:
   * request method
   * request url
   * timestamp
   * this middleware runs on every request made to the API
   */
}

function validateUserId(req, res, next) {
  // do your magic!
  return (req, res, next) => {
    users.getById(req.params.id)
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
}

function validatePostId(req, res, next) {
  // do your magic!
}

function validatePost(req, res, next) {
  // do your magic!
}

// do not forget to expose these functions to other modules
