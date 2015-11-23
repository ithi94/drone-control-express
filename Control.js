var communication = require('./Communication.js');

module.exports.takeOff = function(){
	console.log("calling send function with takeoff option");
	message = {"Type":"takeoff"};
	communication.sendData(message);
	//Send take off communincation
}

module.exports.land = function(){
	message = {"Type":"land"};
	console.log("calling send function with land option");
	communication.sendData(message);
}

module.exports.left = function(){
	var thrust = 2;
	var tm = 2;
	message = {"Type":"move", "Direction":"left", "Thrust":thrust, "TimeInMilliSecond":tm};
	//Send command to device 
	console.log("calling send function with move option");
	communication.sendData(message);
	
}


module.exports.right = function(){
	var thrust = 2;
	var tm = 2;
	message = {"Type":"move", "Direction":"right", "Thrust":thrust, "TimeInMilliSecond":tm};
	//Send command to device 
	console.log("calling send function with move option");
	communication.sendData(message);
	
}
module.exports.up = function(){
	var thrust = 2;
	var tm = 2;
	message = {"Type":"move", "Direction":"up", "Thrust":thrust, "TimeInMilliSecond":tm};
	//Send command to device 
	console.log("calling send function with move option");
	communication.sendData(message);
	
}
module.exports.down = function(){
	var thrust = 2;
	var tm = 2;
	message = {"Type":"move", "Direction":"down", "Thrust":thrust, "TimeInMilliSecond":tm};
	//Send command to device 
	console.log("calling send function with move option");
	communication.sendData(message);
	
}

