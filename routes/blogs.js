var express = require('express');
var router = express.Router();
const knex = require('knex')(require('../knexfile.js')['development']);

/* GET users listing. */
router.get('/', function(req, res) {
  knex
    .select('*')
    .from('blogs')
    .orderBy('id', 'desc')
    .then(data => res.status(200).json(data))
    .catch(err =>
      res.status(404).json({
        message:
          'Failed to fetch blogs'
      })
    );
});

router.post('/', function(req, res) {
  knex('blogs')
    .insert({
      author: req.body.author,
      title: req.body.title,
      text: req.body.text,
      image: req.body.image
    })
    .then(response => res.status(200).json({message: 'Success'}))
    .catch(err =>
      res.status(404).json({
        message:
          'Failed to post blog'
      })
    );
})

router.delete('/', function(req, res) {
  knex('blogs')
    .del()
    .where('id', req.body.id)
    .then(response => res.status(200).json({message: 'Success'}))
    .catch(err =>
      res.status(404).json({
        message:
          'Failed to post blog'
      })
    );
})

router.patch('/', function (req, res) {
  knex('blogs')
    .where({id: req.body.id})
    .update({
      author: req.body.author,
      title: req.body.title,
      image: req.body.image,
      text: req.body.text
    })
    .then(response => res.status(200).json({message: 'Success'}))
    .catch(err =>
      res.status(404).json({
        message:
          'Failed to post blog'
      })
    );
})

module.exports = router;
