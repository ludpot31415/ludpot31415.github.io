var balls = [];
var enemy = [];
var ms = (new Date).getTime();
var song;
var maxSpeed = 8;
var score = 0;
var osc;

function preload() {
    //song = loadSound("music/space.mp3");
}

function setup() {
    //preload();
    osc = new p5.Oscillator();
    osc.setType('sine');
    osc.start();
    osc.amp(5);

    createCanvas(window.innerWidth, window.innerHeight);
    background(0);
    stroke(255);
    fill(255);
    textAlign("center");

    for(var i = 0; i < 1; i++){
        balls[i] = new Ball();
    }

    setInterval(function() {
        enemy.push(new Enemy());
    },40);
    //song.play();
}

function draw() {
    osc.freq(random(15,40));
    background(random(40));
    fill(255);
    textSize(32);
    textFont("Courier New");
    var t = floor(((new Date).getTime()-ms)/1000);
    text("TIME: " + "0".repeat(6 - Number(t.toString().length)) + t + "s" + " | SCORE: " + "0".repeat(6 - Number(score.toString().length)) + score + " | SPEED: " + "0".repeat(3 - Number(maxSpeed.toString().length)) + maxSpeed, width/2, 30);

    for(var i = 0; i < balls.length; i++){
        balls[i].collision();
        balls[i].update();
        balls[i].show();
    }

    for (var i = 0; i < enemy.length; i++) {
        if (enemy[i].pos.x < 0 || enemy[i].pos.x > width) {
            enemy.splice(i,1);
            continue;
        }
        if (enemy[i].pos.y < 0 || enemy[i].pos.y > height) {
            enemy.splice(i,1);
            continue;
        }
    }

    for (var i = 0; i < enemy.length; i++) {
        enemy[i].update();
        enemy[i].show();

    }
}

function Reset(inc) {
    enemy = [];
    ms = (new Date).getTime();
    balls[0].size = 15;
    maxSpeed += inc;
}

function Enemy() {
    this.pos = createVector(random(width/2-50,width/2+50),random(height/2-50,height/2+50));
    this.vel = createVector(floor(random(-maxSpeed,maxSpeed)),floor(random(-maxSpeed,maxSpeed)));
    this.acc = createVector(0,0);
    this.size = random(8,balls[0].size + 15);
    this.color = [30,random(100,220),random(100,220)]

    this.update = function() {
        this.pos.add(this.vel);
        this.vel.add(this.acc);

    }

    this.show = function() {
        noStroke();
        fill(this.color[0],this.color[1],this.color[2]);
        ellipse(this.pos.x, this.pos.y, this.size, this.size);
    }
}

function Ball() {
    this.pos = createVector(random(width),random(height));
    this.acc = createVector(0,0);
    this.vel = createVector(0,0);
    this.mouseDist = createVector(mouseX-this.pos.x, mouseY-this.pos.y);
    this.size = 15;

    this.collision = function() {
        for (i = 0; i < enemy.length; i++) {
            /*if (this.pos.x >= enemy[i].pos.x && this.pos.x <= enemy[i].pos.x+enemy[i].size) {
                if (this.pos.y >= enemy[i].pos.y && this.pos.y <= enemy[i].pos.y+enemy[i].size) {
                    Reset();
                }
            }*/
            if ((this.size/2 + enemy[i].size/2) >= (Math.sqrt((this.pos.x-enemy[i].pos.x)**2 + (this.pos.y-enemy[i].pos.y)**2))) {
                if (this.size >= enemy[i].size) {
                    score += 10;
                    this.size += 0.5;
                    enemy.splice(i,1);
                    if (this.size == 55) {
                        Reset(5);
                    }
                } else {
                    Reset(0);
                }
            }

        }
    }

    this.update = function() {
        this.pos.add(this.vel);
        this.vel.add(this.acc);
        this.mouseDist = createVector(mouseX-this.pos.x, mouseY-this.pos.y);

        this.vel = this.mouseDist.div(5);
    }

    this.show = function() {
        fill(230);
        ellipse(this.pos.x, this.pos.y, this.size, this.size);
        stroke(255);
        line(this.pos.x, this.pos.y, mouseX, mouseY)
    }
}
