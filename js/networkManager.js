var networkManager = function() {
	//create an instance of eureca.io client
	var networkManager = new Eureca.Client();

	networkManager.ready(function (proxy) {
		eurecaServer = proxy;
	});


	//methods defined under "exports" namespace become available in the server side

	networkManager.exports.setId = function(id)
	{
		//create() is moved here to make sure nothing is created before uniq id assignation
		myId = id;
		create();
		eurecaServer.handshake();
		ready = true;
	}

	networkManager.exports.kill = function(id)
	{
		if (tanksList[id]) {
			tanksList[id].kill();
			console.log('killing ', id, tanksList[id]);
		}
	}

	networkManager.exports.spawnEnemy = function(i, x, y)
	{

		if (i == myId) return; //this is me

		console.log('SPAWN');
		var tnk = new Vehicule(i, game, tank);
		tanksList[i] = tnk;
	}

	networkManager.exports.updateState = function(id, state)
	{
		if (tanksList[id])  {
			tanksList[id].cursor = state;
			tanksList[id].tank.x = state.x;
			tanksList[id].tank.y = state.y;
			tanksList[id].tank.angle = state.angle;
			tanksList[id].turret.rotation = state.rot;
			tanksList[id].update();
		}
	}
}
