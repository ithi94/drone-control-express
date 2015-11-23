var settings = require('./Settings.js');
module.exports.sendData = function(message){
	
	var device = require('azure-iot-device');
    var configData = settings.getConfigData();
	connectionString = configData.deviceConnectionString;
    var client = new device.Client(connectionString, new device.Https());
    var data = JSON.stringify({ 'deviceId': 'myFirstDevice', 'data': 'mydata' });
    var message = new device.Message(data);
    message.properties.add('myproperty', 'myvalue');
    client.sendEvent(message, function(err, res){
    if (err) console.log('SendEvent error: ' + err.toString());
    if (res) console.log('SendEvent status: ' + res.statusCode + ' ' + res.statusMessage);
    });
	console.log("sending data");
}

module.exports.recieve = function(deviceId, callback){
	//Recieve from Device
	callback({data:""});
}