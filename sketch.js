var mySong;
var analyzer;
var startingColor;
var endingColor;

function preload() {
    mySong = loadSound('assets/surfing USA.mp3');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    mySong.play();
    analyzer = new p5.Amplitude();
    analyzer.setInput(mySong);
}

function draw() {
    if (mySong.isPlaying() == true) {
        background("#F2746B");
    }
    else {
        background("#118c8b");
    }
    var myVolume = analyzer.getLevel()
    textSize(20);
    textFont('Lobster');
    fill("#000D29");
    text("Volume Ratio\n" + myVolume, 20, 30);
    push();
    textSize(30);
    textAlign(CENTER);
    text("Click to Pause / Play", windowWidth / 2, windowHeight - 150);
    text("...but the lyrics will go on :)", windowWidth / 2, windowHeight - 50);
    pop();
    var mySize = myVolume * 1000;
    noStroke();
    fill("#f14d49");
    ellipse(width / 2, height / 2, mySize, mySize);
    textSize(20);
    fill("#000D29");
    text("If everybody had an ocean Across the u.s.a. Then everybody'd be surfin' Like californi-a You'd seem 'em wearing their baggies Huarachi sandals too A bushy bushy blonde hairdo Surfin' U.S.A You'd catch 'em surfin' at del mar Ventura county line Santa cruz and trestle Australia's narabine All over manhattan And down doheny way Everybody's gone surfin' Surfin' U.S.A We'll all be planning that route We're gonna take real soon We're waxing down our surfboards We can't wait for june We'll all be gone for the summer We're on surfari to stay Tell the teacher we're surfin' Surfin' U.S.A Haggerties and swamies Pacific palisades San anofree and sunset Redondo beach l.a. All over la jolla At waimia bay Everybody's gone surfin' Surfin' U.S.A Everybody's gone surfin' Surfin' U.S.A Everybody's gone surfin' Surfin' U.S.A", 800 - frameCount, windowHeight / 3 * 2.6);
}

function mousePressed() {
    if (mySong.isPlaying() == true) {
        mySong.pause();
    }
    else {
        mySong.play();
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}