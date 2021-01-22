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

  /**
   * this middleware will be used for all user endpoints that include an id parameter
   * in the url, 
   * example, /api/users/:id
   * it should check the database to make sure there is a user with that id
   */
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
