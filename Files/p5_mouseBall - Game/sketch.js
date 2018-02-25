var balls = [];
var enemy = [];
var ms = (new Date).getTime();

function setup() {
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
}

function draw() {
    background(10);
    fill(255);
    textSize(32);
    textFont("Courier New");
    var t = floor(((new Date).getTime()-ms)/1000);
    text("0".repeat(5 - Number(t.toString().length)) + t + "s", width/2, 30);
    
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

    for(var i = 0; i < enemy.length; i++) {
        enemy[i].update();
        enemy[i].show();
        
    }
}

function Reset() {
    enemy = [];
    ms = (new Date).getTime();
}

function Enemy() {
    this.pos = createVector(random(50,width),random(50,height));
    this.vel = createVector(floor(random(-8,8)),floor(random(-8,8)));
    this.acc = createVector(0,0);
    this.size = random(8,26);
    this.color = [random(100,220),0,random(100,220)]

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
    this.size = 10;
    
    this.collision = function() {
        for (i = 0; i < enemy.length; i++) {
            /*if (this.pos.x >= enemy[i].pos.x && this.pos.x <= enemy[i].pos.x+enemy[i].size) {
                if (this.pos.y >= enemy[i].pos.y && this.pos.y <= enemy[i].pos.y+enemy[i].size) {
                    Reset();
                }
            }*/
            if ((this.size/2 + enemy[i].size/2) >= (Math.sqrt((this.pos.x-enemy[i].pos.x)**2 + (this.pos.y-enemy[i].pos.y)**2))) {
                Reset();
            }
            
        }
    }
    
    this.update = function() {
        this.pos.add(this.vel);
        this.vel.add(this.acc);
        this.mouseDist = createVector(mouseX-this.pos.x, mouseY-this.pos.y);
        
        this.vel = this.mouseDist.div(10);
    }
    
    this.show = function() {
        fill(230);
        ellipse(this.pos.x, this.pos.y, this.size, this.size);
        stroke(255);
        line(this.pos.x, this.pos.y, mouseX, mouseY)
    }
}
