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
	game.load.image('diamond', 'diamond.png');
	game.load.image('health', 'firstaid.png');

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

	var platform5 = platforms.create(650,120, 'ground');
	platform5.body.immovable = true;



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

	endlabel = game.add.text(150, 300, "Game Over! Your Score is ", style);
	endlabel.setShadow(3,3, 'rgba(0,0,0,0.5)', 2);
	endlabel.visible = false;


	player = game.add.sprite(50, 400, 'dude');
		
		player.animations.add('left',[0,1,2,3],10,true);
		player.animations.add('right',[5,6,7,8],10,true);
		game.physics.arcade.enable(player);
		player.body.bounce.y = 0.2;
		player.body.gravity.y = 300;
		player.body.collideWorldBounds = true;

	enemy = game.add.sprite(20, 0, 'baddie');
		
		enemy.animations.add('left',[0,1],10,true);
		enemy.animations.add('right',[2,3],10,true);
		game.physics.arcade.enable(enemy);
		enemy.body.bounce.y = 0.2;
		enemy.body.gravity.y = 300;
		enemy.body.collideWorldBounds = true;

	enemy2 = game.add.sprite(150, 0, 'baddie');
		
		enemy2.animations.add('left',[0,1],10,true);
		enemy2.animations.add('right',[2,3],10,true);
		game.physics.arcade.enable(enemy2);
		enemy2.body.bounce.y = 0.2;
		enemy2.body.gravity.y = 300;
		enemy2.body.collideWorldBounds = true;

	enemy3 = game.add.sprite(360, 500, 'baddie');
		
		enemy3.animations.add('left',[0,1],10,true);
		enemy3.animations.add('right',[2,3],10,true);
		game.physics.arcade.enable(enemy3);
		enemy3.body.bounce.y = 0.2;
		enemy3.body.gravity.y = 300;
		enemy3.body.collideWorldBounds = true;

	enemy4 = game.add.sprite(450, 0, 'baddie');
		
		enemy4.animations.add('left',[0,1],10,true);
		enemy4.animations.add('right',[2,3],10,true);
		game.physics.arcade.enable(enemy4);
		enemy4.body.bounce.y = 0.2;
		enemy4.body.gravity.y = 300;
		enemy4.body.collideWorldBounds = true

	enemy5 = game.add.sprite(700, 180, 'baddie');
		
		enemy5.animations.add('left',[0,1],10,true);
		enemy5.animations.add('right',[2,3],10,true);
		game.physics.arcade.enable(enemy5);
		enemy5.body.bounce.y = 0.2;
		enemy5.body.gravity.y = 300;
		enemy5.body.collideWorldBounds = true;

	diamonds = game.add.physicsGroup();
	diamonds.enableBody = true;
	var diamond = diamonds.create(750, 50, 'diamond');
	diamond.body.gravity.y = 200;
	diamond.body.bounce.y = 0.7 + Math.random()* 0.2;


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
	var star12 = stars.create(100,380, 'star');
	star12.body.gravity.y =200;
	star12.body.bounce.y = 0.7 + Math.random() * 0.2;
	var star13 = stars.create(200,380, 'star');
	star13.body.gravity.y =200;
	star13.body.bounce.y = 0.7 + Math.random() * 0.2;
	var star13 = stars.create(300,380, 'star');
	star13.body.gravity.y =200;
	star13.body.bounce.y = 0.7 + Math.random() * 0.2;
	var star14 = stars.create(400,380, 'star');
	star14.body.gravity.y =200;
	star14.body.bounce.y = 0.7 + Math.random() * 0.2;
	var star15 = stars.create(500,380, 'star');
	star15.body.gravity.y =200;
	star15.body.bounce.y = 0.7 + Math.random() * 0.2;
	var star16 = stars.create(600,480, 'star');
	star16.body.gravity.y =200;
	star16.body.bounce.y = 0.7 + Math.random() * 0.2;
	var star17 = stars.create(700,480, 'star');
	star17.body.gravity.y =200;
	star17.body.bounce.y = 0.7 + Math.random() * 0.2;
	var star18 = stars.create(10,380, 'star');
	star18.body.gravity.y =200;
	star18.body.bounce.y = 0.7 + Math.random() * 0.2;

	cursors = game.input.keyboard.createCursorKeys();
	enemy.body.velocity.x = +80;
	enemy2.body.velocity.x = +80;
	enemy3.body.velocity.x = +80;
	enemy3.animations.play('right');
	enemy4.body.velocity.x = +80;
	enemy5.body.velocity.x = -20;
	enemy5.animations.play('left');


}

function update(){
	 game.physics.arcade.collide(player, platforms);
	 game.physics.arcade.collide(stars, platforms);
	 game.physics.arcade.collide(enemy, platforms);
	 game.physics.arcade.collide(enemy2, platforms);
	 game.physics.arcade.collide(enemy3, platforms);
	 game.physics.arcade.collide(enemy4, platforms);
	 game.physics.arcade.collide(enemy5, platforms);
	 game.physics.arcade.collide(diamonds, platforms);

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
  	game.physics.arcade.overlap(player, enemy2, loseLife);
  	game.physics.arcade.overlap(player, enemy3, loseLife);
  	game.physics.arcade.overlap(player, enemy4, loseLife);
  	game.physics.arcade.overlap(player, enemy5, loseLife);
  	game.physics.arcade.overlap(player, diamonds, collectDiamond);
  	moveEnemy();
  	moveEnemy2();
  	moveEnemy3();
  	moveEnemy4();
  	moveEnemy5();

  	if(life <= 0 ){
  		endGame();
  	}

  	function collectStar(player, star){
  		//update score variable
  		score = score +1;
  		//reflect in text
  		scoretext.setText(score);
  		//remove the star and reset the top
  		star.kill();
  		star.reset(Math.floor(Math.random()*800),(Math.floor(Math.random()*550)));

  	}

  	function loseLife(player, enemy){
  		//update score variable
  		life -= 1;
  		//reflect in text
  		lifetext.setText(life);
  		//reset the enemy
  		enemy.kill();
  		enemy.reset(0,0);
  		enemy2.kill();
  		enemy2.reset(225,0);
  		enemy2.body.velocity.x = +80;
  		enemy3.kill();
  		enemy3.reset(365,0);
  		enemy3.body.velocity.x = +80;
  		enemy4.kill();
  		enemy4.reset(425,0);
  		enemy4.body.velocity.x = +80;
  		enemy5.kill();
  		enemy5.reset(675,0);
  		enemy5.body.velocity.x = +80;
  	}

  	function moveEnemy(){
  		//Enemy AI
  		if(enemy.x > 160){
  			enemy.animations.play('left');
  			enemy.body.velocity.x = -120;
  		} else if(enemy.x < 5 ){
  			enemy.animations.play('right');
  			enemy.body.velocity.x = 120;
  		}
  	}

  	function moveEnemy2(){
  		//Enemy AI
  		if(enemy2.x > 280){
  			enemy2.animations.play('left');
  			enemy2.body.velocity.x = -120;
  		} else if(enemy2.x < 75 ){
  			enemy2.animations.play('right');
  			enemy2.body.velocity.x = 120;
  		}
  	}

  	function moveEnemy3(){
  		//Enemy AI
  		if(enemy3.x > 750){
  			enemy3.animations.play('left');
  			enemy3.body.velocity.x = -250;
  		} else if(enemy3.x < 20 ){
  			enemy3.animations.play('right');
  			enemy3.body.velocity.x = 250;
  		}
  	}

  	function moveEnemy4(){
  		//Enemy AI
  		if(enemy4.x > 590){
  			enemy4.animations.play('left');
  			enemy4.body.velocity.x = -120;
  		} else if(enemy4.x < 400 ){
  			enemy4.animations.play('right');
  			enemy4.body.velocity.x = 120;
  		}
  	}

  	function moveEnemy5(){
  		//Enemy AI
  		if(enemy5.x > 760){
  			enemy5.animations.play('left');
  			enemy5.body.velocity.x = -120;
  		} else if(enemy5.x < 600 ){
  			enemy5.animations.play('right');
  			enemy5.body.velocity.x = 120;
  		}
  	}

  	function collectDiamond(player, diamonds){
  		score += 10;
  		scoretext.setText(score);
  		diamonds.kill();
  		diamonds.reset(780,100);

  	}
  	}

  	function endGame() {
  		player.kill();
  		enemy.kill();
  		enemy2.kill();
  		enemy3.kill();
  		enemy4.kill();
  		enemy5.kill();
  		platforms.kill();
  		scorelabel.text = "GAME OVER! YOUR SCORE IS " + score;
  		scorelabel.visible = false;
  		endlabel.visible = true;
  		endlabel.text = "Game Over! Your Score Is " + score;
  		scoretext.visible = false;
  		lifelabel.visible = false;
  		lifetext.visible = false;
  	}
