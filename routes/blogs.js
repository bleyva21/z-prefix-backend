var express = require('express');
var router = express.Router();
const knex = require('knex')(require('../knexfile.js')['development']);

/* GET users listing. */
router.get('/', function(req, res, next) {
  knex
    .select('*')
    .from('blogs')
    .orderBy('id', 'desc')
    .then(data => res.status(200).json(data).end())
    .catch(err =>
      res.status(404).json({
        message:
          'Failed to fetch blogs'
      })
    );
});

module.exports = router;
