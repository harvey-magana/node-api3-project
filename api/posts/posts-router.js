const express = require('express');

const Posts = require('./posts-model.js');

const router = express.Router();



router.get('/', (req, res) => {
  // do your magic!
  Posts.get(req.query)
    .then(posts => {
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
});

router.delete('/:id', (req, res) => {
  // do your magic!
  // this needs a middleware to verify post id
});

router.put('/:id', (req, res) => {
  // do your magic!
  // this needs a middleware to verify post id
});

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

// do not forget to export the router
module.exports = router;