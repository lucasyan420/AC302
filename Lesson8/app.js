var game = new Phaser.Game(800, 600, Phaser.AUTO, '', {preload:preload, create:create, update:update});

var score = 0;
var life = 3;

function preload(){
	// static image
	// sprite sheet (animations or different image)
	game.load.image('sky','sky.png');
	game.load.spritesheet('dude', 'dude.png', 32, 48);
	game.load.image('ground', 'platform1.png');
	game.load.image ('star', 'star.png')
	game.load.spritesheet('baddie', 'baddie.png', 32, 32);

}

function create(){
	game.physics.startSystem(Phaser.Physics.ARCADE);

	//create the sky
	game.add.sprite(0,0, 'sky');
	//create group of platforms
	platforms = game.add.physicsGroup();
	platforms.enableBody = true;

	var ground = platforms.create(0, 550, 'ground');
	//mutliples the height & width of ground image by 2
	ground.scale.setTo(2,2);
	//set ground to immovable
	ground.body.immovable = true;

	var platform1 = platforms.create(100,150, 'ground');
	platform1.scale.setTo(1/2,1);
	platform1.body.immovable = true;

	var platform2 = platforms.create(400, 250, 'ground');
	platform2.scale.setTo(1/2,1);
	platform2.body.immovable = true;

	var platform3 = platforms.create(-225,350, 'ground');
	platform3.body.immovable = true;

	var platform4 = platforms.create(600, 450, 'ground');
	platform4.body.immovable = true;


	//set text style
	var style = {font: "bold 32px Arial", fill:"#fff"};

	//positioning the score
	scorelabel = game.add.text(300,560, "Score:", style);
	scoretext = game.add.text(420,560, score, style);
	scorelabel.setShadow(3,3, 'rgba(0,0,0,0.5)', 2);
	scoretext.setShadow(3,3, 'rgba(0,0,0,0.5)', 2);

	//positioning the lives
	lifelabel = game.add.text(10,5, "Life:", style);
	lifetext = game.add.text(80,5, life, style)
	lifelabel.setShadow(3,3, 'rgba(0,0,0,0.5)', 2);
	lifetext.setShadow(3,3, 'rgba(0,0,0,0.5)', 2);


	player = game.add.sprite(50, 400, 'dude');
		
		player.animations.add('left',[0,1,2,3],10,true);
		player.animations.add('right',[5,6,7,8],10,true);
		game.physics.arcade.enable(player);
		player.body.bounce.y = 0.2;
		player.body.gravity.y = 300;
		player.body.collideWorldBounds = true;

	enemy = game.add.sprite(450, 0, 'baddie');
		
		enemy.animations.add('left',[0,1],10,true);
		enemy.animations.add('right',[2,3],10,true);
		game.physics.arcade.enable(enemy);
		enemy.body.bounce.y = 0.2;
		enemy.body.gravity.y = 300;
		enemy.body.collideWorldBounds = true;

	stars = game.add.physicsGroup();
	stars.enableBody = true;

	var star1 = stars.create(0,0, 'star');
	star1.body.gravity.y =200;
	star1.body.bounce.y = 0.7 + Math.random() * 0.2;
	var star2 = stars.create(80,0, 'star');
	star2.body.gravity.y =200;
	star2.body.bounce.y = 0.7 + Math.random() * 0.2;
	var star3 = stars.create(160,0, 'star');
	star3.body.gravity.y =200;
	star3.body.bounce.y = 0.7 + Math.random() * 0.2;
	var star4 = stars.create(240,0, 'star');
	star4.body.gravity.y =200;
	star4.body.bounce.y = 0.7 + Math.random() * 0.2;
	var star5 = stars.create(320,0, 'star');
	star5.body.gravity.y =200;
	star5.body.bounce.y = 0.7 + Math.random() * 0.2;
	var star6 = stars.create(400,0, 'star');
	star6.body.gravity.y =200;
	star6.body.bounce.y = 0.7 + Math.random() * 0.2;
	var star7 = stars.create(480,0, 'star');
	star7.body.gravity.y =200;
	star7.body.bounce.y = 0.7 + Math.random() * 0.2;
	var star8 = stars.create(560,0, 'star');
	star8.body.gravity.y =200;
	star8.body.bounce.y = 0.7 + Math.random() * 0.2;
	var star9 = stars.create(640,0, 'star');
	star9.body.gravity.y =200;
	star9.body.bounce.y = 0.7 + Math.random() * 0.2;
	var star10 = stars.create(720,0, 'star');
	star10.body.gravity.y =200;
	star10.body.bounce.y = 0.7 + Math.random() * 0.2;
	var star11 = stars.create(800,0, 'star');
	star11.body.gravity.y =200;
	star11.body.bounce.y = 0.7 + Math.random() * 0.2;

	cursors = game.input.keyboard.createCursorKeys();
}

function update(){
	 game.physics.arcade.collide(player, platforms);
	 game.physics.arcade.collide(stars, platforms);
	 game.physics.arcade.collide(enemy, platforms);

	 //reset the player's velocity if no events
 	 player.body.velocity.x = 0;

 	 //player movements
 	 if(cursors.left.isDown) {
 	 	player.body.velocity.x = -150;
 	 	player.animations.play('left');
 	} else if(cursors.right.isDown) {
 		player.body.velocity.x = 150;
 		player.animations.play('right');
 	} else if(cursors.up.isDown) {
 		player.body.velocity.y = -150;
 		player.animations.play('up');
 	} else if(cursors.down.isDown) {
 		player.body.velocity.y = 150;
 		player.animations.play('down');
 	} else {
 		player.animations.stop();
		player.frame = 4;
	}
 	if(cursors.up.isDown && player.body.touching.down) {
 		player.body.velocity.y = -300;
  	}

  	game.physics.arcade.overlap(player, stars, collectStar);
  	game.physics.arcade.overlap(player, enemy, loseLife);
  	moveEnemy();

  	if(life < 0 ){
  		endGame();
  	}

  	function collectStar(player, star){
  		//update score variable
  		score = score +1;
  		//reflect in text
  		scoretext.setText(score);
  		//remove the star and reset the top
  		star.kill();
  		star.reset(Math.floor(Math.random()*800),0);

  	}

  	function loseLife(player, enemy){
  		//update score variable
  		life -= 1;
  		//reflect in text
  		lifetext.setText(life);
  		//reset the enemy
  		enemy.kill();
  		enemy.reset(10,20)
  	}

  	function moveEnemy(){
  		//Enemy AI
  		if(enemy.x > 759){
  			enemy.animations.play('left');
  			enemy.body.velocity.x = -120;
  		} else if(enemy.x < 405 ){
  			enemy.animations.play('right');
  			enemy.body.velocity.x = 120;
  		}
  	}

  	function endGame() {
  		player.kill();
  		enemy.kill();
  		platform1.kill();
  		platform2.kill();
  		platform3.kill();
  		platform4.kill();
  		scorelabel.text = "GAME OVER! YOUR SCORE IS " + score;
  		scoretext.visible = false;
  		lifelabel.visible = false;
  		lifetext.visible = false;
  	}
}