'use strict';
const weekday = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
];
const today = new Date();
const day = 'Today is: ' + weekday[today.getDay()];
let hours = today.getHours();
const minutes = today.getMinutes();
const seconds = today.getSeconds();
const amPm = hours >= 12 ? 'pm' : 'am';
hours = hours % 12;
hours = hours ? hours : 12;
const time =
	'Current time is: ' + hours + amPm + ' ' + ':' + minutes + ':' + seconds;

document.getElementById('display').innerHTML = day + '<br>' + time;
