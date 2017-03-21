var theGame = function(game) {
	this.game = game;
	this.music = null;

	this.myId=0;
	this.land;

	this.shadow;
	this.tank;
	this.turret;
	this.player;
	this.tanksList;
	this.explosions;

	this.logo;

	this.cursors;

	this.bullets;
	this.fireRate = 100;
	this.nextFire = 0;

	this.ready = false;
	this.eurecaServer;
}

theGame.prototype = {

  create: function() {

				this.eurecaServer = new networkManager();
		    //  Resize our game world to be a 2000 x 2000 square
		    this.game.world.setBounds(-1000, -1000, 2000, 2000);
			  this.game.stage.disableVisibilityChange  = true;

		    //  Our tiled scrolling background
		    this.land = this.game.add.tileSprite(0, 0, 800, 600, 'earth');
		    this.land.fixedToCamera = true;

		    this.tanksList = {};
				this.player = new Vehicule(this.myId, this.game, this.tank);
				this.tanksList[this.myId] = this.player;
				this.tank = this.player.tank;
				this.turret = this.player.turret;
				this.tank.x=0;
				this.tank.y=0;
				this.bullets = this.player.bullets;
				this.shadow = this.player.shadow;

		    //  Explosion pool
		    this.explosions = game.add.group();

		    for (var i = 0; i < 10; i++)
		    {
		        var explosionAnimation = this.explosions.create(0, 0, 'kaboom', [0], false);
		        explosionAnimation.anchor.setTo(0.5, 0.5);
		        explosionAnimation.animations.add('kaboom');
		    }

		    this.tank.bringToTop();
		    this.turret.bringToTop();

		    //this.logo = this.game.add.sprite(0, 200, 'logo');
		    //this.logo.fixedToCamera = true;

		    //this.game.input.onDown.add(this.removeLogo, this);

		    this.game.camera.follow(this.tank);
		    this.game.camera.deadzone = new Phaser.Rectangle(150, 150, 500, 300);
		    this.game.camera.focusOnXY(0, 0);

		    this.cursors = this.game.input.keyboard.createCursorKeys();

			//setTimeout(this.removeLogo, 1000);

	},

	update: function() {
		this.player.update();
		//do not update if client not ready
		if (!this.ready) return;

			this.player.input.left = this.cursors.left.isDown;
			this.player.input.right = this.cursors.right.isDown;
			this.player.input.up = this.cursors.up.isDown;
			this.player.input.fire = game.input.activePointer.isDown;
			this.player.input.tx = game.input.x+ game.camera.x;
			this.player.input.ty = game.input.y+ game.camera.y;


			this.turret.rotation = game.physics.arcade.angleToPointer(this.turret);
			this.land.tilePosition.x = -game.camera.x;
			this.land.tilePosition.y = -game.camera.y;

/*
			for (var i in this.tanksList)
			{
				if (!this.tanksList[i]) continue;
				var curBullets = this.tanksList[i].bullets;
				var curTank = this.tanksList[i].tank;
				for (var j inthis.tanksList)
				{
					if (!this.tanksList[j]) continue;
					if (j!=i)
					{
						var targetTank = this.tanksList[j].tank;
						this.game.physics.arcade.overlap(curBullets, targetTank, bulletHitPlayer, null, this);
					}
					if (this.tanksList[j].alive)
					{
						this.tanksList[j].update();
					}
				}
			}
*/
	},

/*
	removeLogo: function() {
	    //this.game.input.onDown.remove(this.removeLogo, this);
	    //this.logo.kill();
	},
*/
	lose: function() {
		this.game.state.start("GameOver");
	}

}
