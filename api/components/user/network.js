const express = require('express');

const secure = require('./secure');
const response = require('../../../network/response');
const controller = require('./index');

const router = express.Router();

router.get('/', list);
router.get('/:id', get);
router.post('/', upsert);
router.put('/', secure('update'), upsert);

function list (req, res) {
  controller.list()
    .then(lista => {
      response.success(req, res, lista, 200);
    })
    .catch(err => {
      response.error(req, res, 'Internal Error', 500, err);
    });
}

function get(req, res) {
  controller.get(req.params.id)
  .then(user => {
    response.success(req, res, user, 200);
  })
  .catch(err => {
    response.error(req, res, 'Internal Error', 500, err);
  });
}

function upsert (req, res) {
  controller.upsert(req.body)
    .then((user) => {
      response.success(req, res, user, 201);
    })
    .catch(err => {
      response.error(req, res, 'Internal Error', 500, err);
    });
}

module.exports = router;