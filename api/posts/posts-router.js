const express = require('express');

const Posts = require('./posts-model.js');
const { validatePostId, validatePost } = require('../middleware/middleware.js');
const router = express.Router();

/**
 *   get, *
  getById,
  insert,
  update,
  remove,
 */

router.get('/', (req, res) => {
  // do your magic!
  console.log(req)
  Posts.get(req.query)
    .then(posts => {
      console.log(res)
      res.status(200).json(posts)
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: "Error retrieving the posts."
      })
    })
});

router.get('/:id', (req, res) => {
  // do your magic!
  // this needs a middleware to verify post id
  Posts.getById(req.params.id)
    .then(post => {
      if(post) {
        res.status(200).json(post)
      } else {
        res.status(400).json({
          message: "Post id not found."
        })
      }
    })
    .catch(error => {
      res.status(500).json({
        message: "Error retrieving the post id."
      })
    })
  
});

router.delete('/:id', (req, res) => {
  // do your magic!
  // this needs a middleware to verify post id
});

router.put('/:id', (req, res) => {
  // do your magic!
  // this needs a middleware to verify post id
});

/*
function validatePostId(req, res, next) {
  // do your magic!
  return (req, res, next) => {
    posts.getById(req.params.id)
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
*/

// do not forget to export the router
module.exports = router;