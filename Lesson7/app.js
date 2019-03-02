var game = new Phaser.Game(800, 600, Phaser.AUTO, '', {preload:preload, create:create, update:update});

var score = 0;
var life = 3;

function preload(){
	// static image
	// sprite sheet (animations or different image)
	game.load.image('sky','sky.png');
	game.load.spritesheet("player", "assets/dude.png", 32, 48);
	game.load.image('platform', 'platform.png');
	game.load.image ("star", "assets/star.png")
	game.load.spritesheet("baddie", "assets/baddie.png", 32, 32);

}

function create(){
	game.physics.startSystem(Phaser.Physics.ARCADE);

	game.add.sprite(0,0, 'sky');

	platform = game.add.physicsGroup();
	platform.enableBody = true;

	var ground = platform.create(0, 550, 'platform');
	//mutliples the height & width of ground image by 2
	ground.scale.setTo(2,2);
	//set ground to immovable
	ground.body.immovable = true;

	var platform1 = platform.create(100,150, 'platform');
	platform1.scale.setTo(1/2,1);
	platform1.body.immovable = true;

	var platform2 = platform.create(400, 250, 'platform');
	platform2.scale.setTo(1/2,1);
	platform2.body.immovable = true;

	var platform3 = platform.create(-225,350, 'platform');
	platform3.body.immovable = true;

	var platform4 = platform.create(600, 450, 'platform');
	platform4.body.immovable = true;

	var style = {font: "bold 32px Arial", fill:"#fff"};

	scorelabel = game.add.text(300,560, "Score:", style);
	scoretext = game.add.text(420,560, score, style);
	scorelabel.setShadow(3,3, 'rgba(0,0,0,0.5)', 2);
	scoretext.setShadow(3,3, 'rgba(0,0,0,0.5)', 2);


	lifelabel = game.add.text(10,5, "Life:", style);
	lifetext = game.add.text(80,5, life, style)
	lifelabel.setShadow(3,3, 'rgba(0,0,0,0.5)', 2);
	lifetext.setShadow(3,3, 'rgba(0,0,0,0.5)', 2);

	player = game.add.sprite(50, 450, 'dude');
		
		player.anmations.add('left',[0,1,2,3],10,true);
		player.anmations.add('right',[5,6,7,8],10,true);
		game.physics.arcade.enable(player);
		player.body.bounce.y = 0.2;
		player.body.gravity.y = 300;
		player.body.collideWorldBounds = true;

	enemy = game.add.sprite(450, 300, 'baddie');
		
		enemy.anmations.add('left',[0,1],10,true);
		enemy.anmations.add('right',[2,3],10,true);
		game.physics.arcade.enable(enemy);
		enemy.body.bounce.y = 0.2;
		enemy.body.gravity.y = 300;
		enemy.body.collideWorldBounds = true;

	stars = game.add.physicsGroup();
	stars.enableBody = true;

	// var star1 = star.create(0,0, 'star');
	// star1.body.gravity.y =200;
	// star1.body.bounce.y = 0.7 + Math.random() * 0.2;
	// var star2 = star.create(0,0, 'star');
	// star2.body.gravity.y =200;
	// star2.body.bounce.y = 0.7 + Math.random() * 0.2;
	// var star3 = star.create(80,0, 'star');
	// star3.body.gravity.y =200;
	// star3.body.bounce.y = 0.7 + Math.random() * 0.2;
	// var star4 = star.create(160,0, 'star');
	// star4.body.gravity.y =200;
	// star4.body.bounce.y = 0.7 + Math.random() * 0.2;
	// var star5 = star.create(240,0, 'star');
	// star5.body.gravity.y =200;
	// star5.body.bounce.y = 0.7 + Math.random() * 0.2;
	// var star6 = star.create(320,0, 'star');
	// star6.body.gravity.y =200;
	// star6.body.bounce.y = 0.7 + Math.random() * 0.2;
	// var star7 = star.create(400,0, 'star');
	// star7.body.gravity.y =200;
	// star7.body.bounce.y = 0.7 + Math.random() * 0.2;
	// var star8 = star.create(480,0, 'star');
	// star8.body.gravity.y =200;
	// star8.body.bounce.y = 0.7 + Math.random() * 0.2;
	// var star9 = star.create(560,0, 'star');
	// star9.body.gravity.y =200;
	// star9.body.bounce.y = 0.7 + Math.random() * 0.2;
	// var star10 = star.create(640,0, 'star');
	// star10.body.gravity.y =200;
	// star10.body.bounce.y = 0.7 + Math.random() * 0.2;
	// var star11 = star.create(720,0, 'star');
	// star11.body.gravity.y =200;
	// star11.body.bounce.y = 0.7 + Math.random() * 0.2;
	// var star12 = star.create(800,0, 'star');
	// star12.body.gravity.y =200;
	// star12.body.bounce.y = 0.7 + Math.random() * 0.2;

	// cursors = game.input.keyboard.createCursorkeys();
}

function update(){
// 	 game.physics.arcade.collide(player, platform);
// 	 game.physics.arcade.collide(star, platform);
// 	 game.physics.arcade.collide(enemy, platform);

// 	 player.body.velocity.x = 0;

// 	 if(cursors.left.isDown) {
// 	 	player.body.velocity.x = -150;
// 	 	player.animation.play('left');
// 	} else if(cursors.right.isDown) {
// 		player.body.velocity.x = 150;
// 		player.animation.play('left');
// 	} else if(cursors.up.isDown) {
// 		player.body.velocity.y = -150;
// 		player.animation.play('up');
// 	} else if(cursors.down.isDown) {
// 		player.body.velocity.y = 150;
// 		player.animation.play('down');
// 	} else {
// 		player.animations.stop();
// 		player.frame = 4;
// 	}

// 	if(cursors.up.isDown && player.body.touching.down) {
// 		player.body.velocity.y = -300;
// 	}


}