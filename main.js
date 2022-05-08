song = "";

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
}

function draw()
{
    image(video, 0, 0, 510, 460);
}

function play1()
{
    p_song = Math.floor(Math.random()*2);
    if (p_song == 0)
    {
        song1.play();
        document.getElementById("song_name").innerHTML = "Harry Potter Theme Song"
    } else if (p_song == 1)
    {
        song2.play();
        document.getElementById("song_name").innerHTML = "Peter Pan Song"
    }
}