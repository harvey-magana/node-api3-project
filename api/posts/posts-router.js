const express = require('express');

const router = express.Router();

const Posts = require('./posts-model.js');

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

// do not forget to export the router
