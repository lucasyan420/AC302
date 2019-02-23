var game = new Phaser.Game(800, 600, Phaser.AUTO, '', {preload:preload, create:create, update:update});

var score = 0;
var life = 3;

function preload(){
	//static image
	//sprite sheet (animations or different image)
	game.load.image ("sky", "assets/sky.png");
	game.load.spritesheet("player", "assets/dude.png", 32, 48);
	game.load.image ("platform", "assets/platform.png");
	game.load.image ("star", "assets/star.png")
	game.load.spritesheet("baddie", "assets/baddie.png", 32, 32);

}

function create(){
	game.physics.startSystem(Phaser.Physics.ARCADE);

	game.add.sprite(0,0, "sky");

	platform = game.add.physicsGroup();
	platform.enableBody = true;

	var ground = platform.create(0, 550, "platform");
	//mutliples the height & width of ground image by 2
	ground.scale.setTo(2,2);
	//set ground to immovable
	ground.body.immovable = true;

	var platform1 = platform.create(-100,250, "platform");
	platform1.body.immovable = true;

	var platform2 = platform.create(400, 400, "platform");
	platform2.body.immovable = true;

	var style = {font: "bold 32px Arial", fill:"#fff"};
	scorelabel = game.add.text(300,560, "Score:", style);
	scoretext = game.add.text(420,560, score, style);

	lifelabel = game.add.text(10,5, "Life:", style);
	lifetext = game.add.text(120,5, life, style);

}

function update(){

}