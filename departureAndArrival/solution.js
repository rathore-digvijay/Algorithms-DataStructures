/*
 * File: solution.js
 * Project: algorithms-datastructures
 * File Created: Sunday, 14th June 2020 2:29:15 pm
 * Author: Digvijay (rathore.digvijay10@gmail.com)
 */

var map = {
    tkt1: {
        departure: 'Los Angeles',
        arrival: 'San Francisco'
    },
    tkt2: {
        departure: 'San Francisco',
        arrival: 'New York'
    },
    tkt3: {
        departure: 'Moscow',
        arrival: 'Mali'
    },
    tkt4: {
        departure: 'Barcelona',
        arrival: 'Moscow'
    },
    tkt5: {
        departure: 'New York',
        arrival: 'Barcelona'
    }
};

findDepartureArrival = function (map) {
    var hashMap = {};

    for (var tkt in map) {
        var depart = map[tkt].departure;
        var arriv = map[tkt].arrival;
        hashMap[depart] = !(depart in hashMap) ? -1 : hashMap[depart] -1;
        hashMap[arriv] = !(arriv in hashMap) ? 1 : hashMap[arriv] + 1;
    }
    return hashMap;
}

console.log(findDepartureArrival(map));