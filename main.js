noseX = 0;
noseY = 0;
leftWristX = 0;
rightWristX = 0;
difference = 0;
function preload() {
}
function draw() {
    background("#EABD6A");
    document.getElementById("text_size").innerHTML="width and height of the text is = "+difference+"px";
    textSize(difference);
    fill("#6AEAB0");
    stroke("#6AEAB0");
    text("Catherine Angelina Roberts",noseX,noseY);
}
function setup() {
    video=createCapture(VIDEO);
    video.size(500 , 500);
    canvas = createCanvas(400 , 400 );
    canvas.position(560 , 200);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose", gotPoses);
}
function modelLoaded() {
    console.log('poseNet Model Loaded');
}
function gotPoses(results) {
  if (results.Length>0) {
      console.log(results);
      noseX = results[0].pose.nose.x;
      noseY = results[0].pose.nose.y;
      leftWristX = results[0].pose.leftWrist.x;
      rightWristX = results[0].pose.rightWrist.x;
      console.log("noseX="+noseX+", noseY="+noseY);
      console.log("leftWristX="+leftWristX+", rightWristX="+rightWristX);
      difference=floor(leftWristX-rightWristX);
    }
}