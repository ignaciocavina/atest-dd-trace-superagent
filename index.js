
const tracer = require('dd-trace').init({
    debug: true,
    logger: {
        debug: console.log,
        error: console.error
    },
    experimental: {
      thenables: true
    }
})

var express = require('express');
var app = express();
const request = require('superagent');

app.get('/asyncawait', async function (req, res) {
  const response = await request.get('http://www.mocky.io/v2/5d49a3383200005e00600e41');
  return res.json(response);
});

app.get('/promise', async function (req, res) {
  request.get('http://www.mocky.io/v2/5d49a3383200005e00600e41')
    .then(function(r) {
      res.json(r);
    }).catch(function(e) {
      res.json(e);
    });
});

app.get('/callback', async function (req, res) {
  request.get('http://www.mocky.io/v2/5d49a3383200005e00600e41', function(err, response) {
    res.json(response);
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

