const express = require('express');

const Users = require('./users-model.js');

const router = express.Router();



router.post('/', (req, res) => {
  // do your magic!
  // this needs a middleware to check that the request body is valid
});

router.get('/', (req, res) => {
  // do your magic!
  Users.get(req.query)
  .then(users => {
    res.status(200).json(users)
  })
  .catch(error => {
    console.log(error);
    res.status(500).json({
      message: "Error retreiving user."
    })
  })
});

router.get('/:id', validateUserId(), (req, res) => {
  // do your magic!
  // this needs a middleware to verify user id
  res.status(200).json(req.user)

});

router.delete('/:id', (req, res) => {
  // do your magic!
  // this needs a middleware to verify user id
});

router.put('/:id', (req, res) => {
  // do your magic!
  // this needs a middleware to verify user id
  // and another middleware to check that the request body is valid
});

router.post('/:id/posts', (req, res) => {
  // do your magic!
  // this needs a middleware to verify user id
  // and another middleware to check that the request body is valid
});

router.get('/:id/posts', validateUserId(), (req, res) => {
  // do your magic!
  // this needs a middleware to verify user id
  Users.findUserPosts(req.params.id)
    .then(posts => {
      res.status(200).json(posts)
    })
    .catch(error => {
      next(error)
    })
});

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

// do not forget to export the router
module.exports = router;