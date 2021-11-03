x = 0
y = 0
lwx = 0
rwx = 0
difference = 0

function preload(){

}

function setup(){
  canvas = createCanvas(700, 500);
  canvas.center()
  video = createCapture(VIDEO);
  //video.position()
  //this to to set position of video
  poseNet = ml5.poseNet(video, modelLoaded)
  poseNet.on('pose', gotResults)
  //the above is to execute
}

function modelLoaded(){
  console.log('Model is Loaded')
}

function draw(){
  object = document.getElementById('shapes').value
  background('white')
  fill('red')
  if(object == 'square')
  {
    square(x, y, difference)
  }
  if(object == 'circle')
  {
    circle(x, y, difference)
  }
  if(object == 'rectangle')
  {
    rect(x, y, difference, difference/2)
  }
  if(object == 'triangle')
  {
    triangle(x, y,x+difference, y, x+(difference/2), y+150 )
  }
}

function gotResults(results){
  if(results.length > 0){
    console.log(results)
    x = results[0].pose.nose.x
    y = results[0].pose.nose.y
    lwx = results[0].pose.leftWrist.x
    rwx = results[0].pose.rightWrist.x
    difference = rwx - lwx
  }
}