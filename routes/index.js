const express = require('express');
const router = express.Router();
const axios = require('axios');

/* GET home page. */
router.get('/', function (req, res, next) {
    axios.get(`https://eonet.sci.gsfc.nasa.gov/api/v2.1/categories`)
        .then(function (response) {
            console.log(`response ${response}`)
            res.render('index', {title: 'Express'});
        })
});

router.get('/2', function (req, res, next) {
    console.log('call: /2');
    call2(res);
});

function call2(res) {
    axios.get(`https://eonet.sci.gsfc.nasa.gov/api/v2.1/categories`)
        .then(function (response) {
            console.log(`response ${response}`)
            res.render('index', {title: 'Express'});
        })
}

router.get('/3', async (req, res, next) => {
    console.log('call: /3');
    await call3(res);
});

async function call3(res) {
    const response = await axios.get(`https://eonet.sci.gsfc.nasa.gov/api/v2.1/categories`);
    console.log(`response ${response}`)
    res.render('index', {title: 'Express'});
}

router.get('/4', async (req, res, next) => {
    console.log('call: /4');
    await stop(2000);
    await call3(res);
});

function stop(sec) {
    return new Promise((resolve, reject) => {
        setTimeout( function(){
            resolve(`${sec} ms 동안 멈춥니다.`);
        }, sec);
    });
}

router.get('/5',  () => {
    console.log('call: /5');
    throw 'Exception만 던진다';
});

router.get('/6', (req, res, next) => {
    console.log('call: /6');
    res.status(500).send('throw 없이 status만 500으로 보낸다');
});

router.get('/7', (req, res, next) => {
    console.log('call: /7');
    res.status(400).send('throw 없이 status만 400으로 보낸다');
});

module.exports = router;
