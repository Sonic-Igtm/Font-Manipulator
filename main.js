leftWristX = 0;
rightWristX = 0;
difference = 0;

function draw(){
background('#969A97');
fill('#1B5E20');    
textSize(difference);
text('Vihaan', 30, 300);
document.getElementById("font_size").innerHTML = "Size of the font will be =" + difference + "px"       
}

function setup(){
canvas = createCanvas(430, 430);
canvas.position(630, 130);
video = createCapture(VIDEO);
video.size(500, 500);
posenet = ml5.poseNet(video, modelLoaded);
posenet.on('pose', gotPoses );
}

function modelLoaded(){
console.log('Posenet is Intialized!');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);

    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);
    
      }   
}