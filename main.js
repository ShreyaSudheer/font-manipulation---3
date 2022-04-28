noseX = 0;
noseY = 0;
difference = 0;
leftWristX = 0;
rightWristX = 0;

function preload(){}

function setup()
{
    video = createCapture(VIDEO);
    video.size(500,550);

    canvas = createCanvas(500, 450);
    canvas.position(700,100);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{   
    background('#03f4fc');
    textSize(difference);
    fill('#0f03fc');
    text('Shreya', 50, 400);
}
function modelLoaded()
{
    console.log("PoseNet is Initialized");
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX =  results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
    }
}