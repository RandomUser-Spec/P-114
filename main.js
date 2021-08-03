noseX = 0;
noseY = 0;

function preload()
{
    rainbowpuke = loadImage("https://i.postimg.cc/FHRCPY7H/rainbow.png");
}

function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("PoseNet Is Initialized");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
    }
}

function draw()
{
    image(video, 0, 0, 300, 300);
    image(rainbowpuke,noseX-205,noseY-70,75,115);
}

function take_snapshot()
{
    save('filtered_image.png');
}