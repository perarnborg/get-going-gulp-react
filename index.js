'use strict';
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static('build'));

var server = app.listen(app.get('port'));
