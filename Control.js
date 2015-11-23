var communication = require('./Communication.js');

module.exports.takeOff = function(){
	deviceId = 123;
	console.log("calling send function with takeoff option");
	communication.sendData(deviceId, "takeOff");
	//Send take off communincation
}

module.exports.land = function(){
	deviceId = 123;
	console.log("calling send function with land option");
	communication.sendData(deviceId, "land");
}

module.exports.move = function(obj){
	deviceId = 123;
	//Send command to device 
	console.log("calling send function with move option");
	communication.sendData(deviceId, "move");
	
}