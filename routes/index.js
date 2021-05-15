const express = require('express');
const router = express.Router();
const axios = require('axios');

/* GET home page. */
router.get('/', function(req, res, next) {
  axios.get(`https://eonet.sci.gsfc.nasa.gov/api/v2.1/categories`)
      .then(function (response) {
        console.log(`response ${response}`)
        res.render('index', { title: 'Express' });
      })
});

router.get('/2', function(req, res, next) {
    console.log('call: /2');
    call(res);
});

function call(res) {
    axios.get(`https://eonet.sci.gsfc.nasa.gov/api/v2.1/categories`)
        .then(function (response) {
            console.log(`response ${response}`)
            res.render('index', {title: 'Express'});
        })
}


module.exports = router;
