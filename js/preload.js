var preload = function(game){}

preload.prototype = {
	preload: function(){
        var loadingBar = this.add.sprite(200,240,"loading");
        this.load.setPreloadSprite(loadingBar);

		//Image
		this.game.load.image('logo', 'assets/logo.png');
		this.game.load.image('bullet', 'assets/bullet.png');
		this.game.load.image('earth', 'assets/scorched_earth.png');

		//sprite sheet
		this.game.load.spritesheet('kaboom', 'assets/explosion.png', 64, 64, 23);

		//Mur
		this.game.load.image('MurHBG', 'assets/img/MurHautGauche.png');

		//Sound

		//json
		this.game.load.atlas('tank', 'assets/tanks.png', 'assets/tanks.json');
		this.game.load.atlas('enemy', 'assets/enemy-tanks.png', 'assets/tanks.json');
		
	},

  	create: function(){
  		this.game.time.events.add(Phaser.Timer.SECOND * 2, this._startGame, this);
	},

	_startGame: function(){
		this.game.state.start("GameTitle");
	}
}
