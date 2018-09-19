const moment = require('moment');

var generateMessage = (from, text) => {
  return {
    from,
    text,
    createdAt: new Date().getTime()
  }
};
const MAPS_KEY = 'AIzaSyASD2ZN5g8OpYb7SRBnpvCRIqVZg_2SF-Y';
const MAPS_URL = `https://maps.googleapis.com/maps/api/js?key=${MAPS_KEY}&callback=initMap`;


var generateLocationMessage = (from, latitude, longitude) => {
  return {
    from,
    url: `https://www.google.com/maps?q=${latitude},${longitude}`,
    createdAt: moment().valueOf()
  };
};

module.exports = { generateMessage, generateLocationMessage };
