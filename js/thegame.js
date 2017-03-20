var theGame = function(game) {
	this.game = game;
	this.music = null;
  this.hud = null;

}

theGame.prototype = {
  	create: function() {

      this.hud = new HUD(this.game);
      this.hud.create();

	},

	update: function() {
    	this.hud.update();

	},

	ennemyHitHero: function() {

	},

	fireHitEnnemy: function(fire,ennemy) {

	},

	lose: function() {
		this.game.state.start("GameOver");
	},

	_getScoreToDisplay : function() {

	},

	_incrementScore : function() {
		// this.score++;
	},

	_getBonus : function() {

 }
}
