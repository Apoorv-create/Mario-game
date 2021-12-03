// function preload() {
// 	world_start = loadSound("world_start.wav");
// 	setSprites();
// 	MarioAnimation();
// }

// function setup() {
// 	canvas = createCanvas(1240,336);
// 	instializeInSetup(mario);
// }

// function draw() {
// 	game()
// }

img = "";
noseX = 0;
noseY = 0;
marioX = 325;
marioY = 325;

function preload(){
	img = loadImage("imgs/mario/mario05.png");
}
function setup(){
	createCanvas(523, 390);
	video = createCapture(VIDEO);
    video.size(600, 450)

	poseNet = ml5.poseNet(video, ModalLoaded());
	poseNet.on('pose', getPoses);
}

function draw(){
	background("#D3D3D3");

	if(noseX > 300){
		marioX = marioX + 1
	}
	if(noseX < 300){
		marioX = marioX - 1
	}
	if(noseY < 150){
		marioY = marioY - 1
	}

	image(img, marioX, marioY, 40, 70);
}

function ModalLoaded(){
	console.log("Modal has been loaded")
}

function getPoses(results){
	if(results.length > 0){
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
		console.log("noseX : " + noseX + "noseY : " + noseY);
	}
}