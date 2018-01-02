function Snake() {
    this.x = 20;
    this.y = 20;
    this.xSpeed = 0;
    this.ySpeed = 0;
    this.total = 0;
    this.tail = [];

    this.eatFood = function() {
        if (dist(this.x, this.y, food.x, food.y) < 2) {
            food.pickLocation();
            this.total += 1;
            count += 1;
            document.getElementById('score').innerHTML = count;
        }
    }

    this.movement = function(xDir, yDir) {
        this.xSpeed = xDir;
        this.ySpeed = yDir;
    }

    this.update = function() {
        for(var c = 0; c < this.tail.length - 1; c++) {
            this.tail[c] = this.tail[c+1];
        }

        if (this.total >= 1) {
            this.tail[this.total - 1] = createVector(this.x, this.y);
        }

        this.x += this.xSpeed * blockSize;
        this.y += this.ySpeed * blockSize;

        //this.x = constrain(this.x, 0, width-blockSize - 1);
        //this.y = constrain(this.y, 0, height-blockSize - 1); 

        if (this.x < 0 || this.x + blockSize > width || this.y < 0 || this.y + blockSize > height) {
           alert('Your score : ' + count);
           count = 0;
           document.getElementById('score').innerHTML = count;
           setup();
        }

        for(var c = 0; c < this.tail.length; c++) {
            if ((this.tail[c].x == this.x &&  this.tail[c].y == this.y)){
                alert('Your score : ' + count);
                count = 0;
                document.getElementById('score').innerHTML = count;
                setup();
            }
        }
    }
    this.show = function() {
        fill('red');

        for(var c = 0; c < this.tail.length; c++) {
            rect(this.tail[c].x, this.tail[c].y, blockSize, blockSize);
        }
        rect(this.x, this.y, blockSize, blockSize);
    }
}