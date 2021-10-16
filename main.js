function preload() {
}
function draw() {
    background("#EABD6A");
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
  }
}