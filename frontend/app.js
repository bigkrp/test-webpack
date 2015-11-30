'use strict';

let moment = require('moment');

let today = moment(new Date()).locale('en');

alert(today.format('DD MMM YYYY'))