const express = require('express');

const Users = require('./users-model.js');
const { validateUserId, validateUser } = require('../middleware/middleware.js');
const router = express.Router();

/**
 *   get, *
  getById, *
  getUserPosts, *
  insert, *
  update,
  remove,
 */


router.post('/', (req, res) => {
  // do your magic!
  // this needs a middleware to check that the request body is valid
  Users.insert(req.body)
    .then(user => {
      res.status(201).json(user)
    })
    .catch(error => {
      res.status(500).json({
        message: "Error posting user."
      })
    })
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
  Users.getById(req.params.id)
    .then(user => {
      if(user) {
        res.status(200).json(user);
      } else {
        res.status(400).json({
          message: "User id not found."
        })
      }
    })
    .catch(error => {
      res.status(500).json({
        message: "Error retrieving the User."
      })
    })
});

router.delete('/:id', validateUserId(), (req, res) => {
  // do your magic!
  // this needs a middleware to verify user id
  Users.remove(req.params.id)
    .then(user => {
      if(user > 0) {
        res.status(200).json({
          message: "The user has been deleted."
        })
      }
    })
});

router.put('/:id', [validateUserId(), validateUser()], (req, res) => {
  // do your magic!
  // this needs a middleware to verify user id
  // and another middleware to check that the request body is valid
  const changes = req.body;
  Users.update(req.params.id, changes)
    .then(user => {
      res.status(200).json(user);
    })
});

router.post('/:id/posts', (req, res) => {
  // do your magic!
  // this needs a middleware to verify user id
  // and another middleware to check that the request body is valid
  const id = req.params.id;
  const { text } = req.body;

});

router.get('/:id/posts', validateUserId(), (req, res) => {
  // do your magic!
  // this needs a middleware to verify user id
  Users.getUserPosts(req.params.id)
    .then(posts => {
      if(posts.length > 0) {
        res.status(200).json(posts)
      } else {
        res.status(400).json({
          message: "No posts for this User found."
        })
      }
    })
    .catch(error => {
      res.status(500).json({
        message: "Error retreiving posts for user."
      })
    })
});

/*
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
*/
// do not forget to export the router
module.exports = router;