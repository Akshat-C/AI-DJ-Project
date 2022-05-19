song_speed = 0;
song_volume = 0;
lwx = "";
lwy = "";
rwx = "";
rwy = "";
p_song = null;

function preload()
{
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}

function setup()
{
    canvas = createCanvas(450, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
    p_song = Math.floor(Math.random()*2);
}

function modelLoaded()
{
    console.log("PoseNet is loaded");
}

function gotPoses(results)
{
    if (results > 0)
    {
        console.log(results);
        lwx = results[0].pose.leftWrist.x;
        lwy = results[0].pose.leftWrist.y;
        rwx = results[0].pose.rightWrist.x;
        rwy = results[0].pose.rightWrist.y;
    }
}

function draw()
{
    image(video, 0, 0, 510, 460);
}

function play1()
{
    if (p_song == 0)
    {
        
        song1.play();
        document.getElementById("song_name").innerHTML = "Harry Potter Theme Song";
    } else if (p_song == 1)
    {
        song2.play();
        document.getElementById("song_name").innerHTML = "Peter Pan Song";
    }
}

function change_speed()
{
    song_speed = document.getElementById("speed").value;
    if (p_song == 0)
    {
        song1.playbackRate = song_speed;
        song1.stop();
        song1.play();
    } else if (p_song == 1 )
    {
        song2.playbackRate = song_speed;
        song2.stop();
        song2.play();
    }
    document.getElementById("spe").innerHTML = song_speed
}

function change_volume()
{
    song_volume = document.getElementById("vol").value;
    if (p_song == 0)
    {
        song1.playbackRate = song_speed;
        song1.stop();
        song1.play();
    } else if (p_song == 1 )
    {
        song2.playbackRate = song_speed;
        song2.stop()
        song2.play();
    }
    document.getElementById("volume").innerHTML = song_volume
}