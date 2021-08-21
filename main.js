leftWristX = 0;
rightWristX = 0;



function setup(){
canvas = createCanvas(430, 430);
canvas.position(630, 100);
video = createCapture(VIDEO);
video.size(500, 500);

posenet = ml5.poseNet(video, modelLoaded);
posenet.on('pose', gotPoses );
}

function modelLoaded(){
console.log("Posenet is Intialized!");
}

function gotPoses(results){
    console.log(results);
}