var preload = function(game){}

preload.prototype = {
	preload: function(){
        var loadingBar = this.add.sprite(200,240,"loading");
        this.load.setPreloadSprite(loadingBar);

		//Image//
			//background
			this.game.load.image('gametitle', 'assets/image/background/game_start.png');
			this.game.load.image('background', 'assets/image/background/game_bg.jpg');
			this.game.load.image('gameover', 'assets/image/background/gameover.png');
			this.game.load.image('earth', 'assets/image/background/scorched_earth.png');

			//logo
			this.game.load.image('logo', 'assets/image/logo/logo.png');

			//weapon
			this.game.load.image('bullet', 'assets/image/weapon/bullet.png');


		//sprite sheet//
		this.game.load.spritesheet('kaboom', 'assets/spritesheet/explosion.png', 64, 64, 23);

		//Sound//

		//atlas//
		this.game.load.atlas('tank', 'assets/image/vehicule/tanks.png', 'assets/atlas/vehicule/tanks.json');
		this.game.load.atlas('enemy', 'assets/image/vehicule/enemy-tanks.png', 'assets/atlas/vehicule/tanks.json');

	},

  	create: function(){
  		this.game.time.events.add(Phaser.Timer.SECOND * 2, this._startGame, this);
	},

	_startGame: function(){
		this.game.state.start("GameTitle");
	}
}
