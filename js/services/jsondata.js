/**
* @Author: luongtd
* @Date:   2016-07-26T23:18:31-07:00
* @Last modified by:   luongtd
* @Last modified time: 2017-03-01T21:45:07-08:00
*/



'use strict';

const API_URL = 'https://www.dropbox.com/s/up20ydi46crr3jw/galaxy.json?dl=1';



function fetchData() {
  fetch(API_URL)
    .then((response) => response.json())
    .then((responseData) => {
      console.log("=======" + responseData);
      return responseData;
    })
    .done();
}

module.exports = {
  fetchData
};
