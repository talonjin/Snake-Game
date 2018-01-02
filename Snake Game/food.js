function Food() {
    this.x;
    this.y;

    this.pickLocation = function () {
        var col = floor(width / blockSize);
        var row = floor(height / blockSize);

        this.x = floor(random(col)) * blockSize;
        this.y = floor(random(row)) * blockSize;
    }

    this.show = function() {
        fill('yellow');
        rect(this.x, this.y, blockSize, blockSize);
    }
}