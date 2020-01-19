var express = require('express');
var router = express.Router();
var helpers = require('../helpers/victim')

router.route('/')
    .get(helpers.getVictims)
    .post(helpers.createVictim)

// router.route('/:todoId')
//     .get(helpers.getVictim)
//     .put(helpers.updateVictim)
//     .delete(helpers.deleteVictim)


module.exports = router;