lipX=0;
lipY=0;

function preload(){
  lipstick= loadImage(' https://i.postimg.cc/PxFvYgkv/l1.png');
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized')
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        lipX = results[0].pose.lip.x-10;
        lipY = results[0].pose.lip.y-10;
        console.log("nose x =" + lipX);
        console.log("nose y =" + lipY);
    }
}

function draw(){
  image(video,0, 0, 300, 300);
  image(lipstick,lipX,lip, 30,30);
}

function take_snapshot(){
    save('myFilterImage.png');
}