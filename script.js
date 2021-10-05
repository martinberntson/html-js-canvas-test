var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');    // c stands for context


/*
// c.fillRect(100, 100, 100, 100);     // first two are x and y, distance in pixels from top left corner. Second two are height and width of the filled rectangle made.
c.fillStyle = "rgba(0, 255, 255, 150)"; // Sets the color and transparency of the rectangle
c.fillRect(133, 133, 100, 100);
c.fillStyle = "rgba(255, 200, 0, 150)";
c.fillRect(250, 250, 100, 100);
c.fillStyle = "rgba(255, 100, 100, 150)";
c.fillRect(300, 200, 100, 100);

// Line
c.beginPath();          // Tells context to start a "path"
c.moveTo(50, 300);      // Takes an X and Y coordinate
c.lineTo(300, 100);     // Takes an X and Y coordinate
/// ...Can add more lineTo() commands to extend the line.
c.strokeStyle = "#FF0000" // Sets a color for the line.
c.stroke();

c.beginPath();           // Tells context to start a new path and not continue the existing one. Excluding this would connect the red line to this blue circle.
c.arc(300, 300, 30, 0, Math.PI * 2, false);
c.strokeStyle = 'blue';
c.stroke();*/
const color = [
    "salmon",
    "pink",
    "gray",
    "black",
    "red",
    "brown",
    "orange",
    "yellow",
    "green",
    "cyan",
    "blue",
    "purple",
    "magenta"
]

const createCircle = (x, y, size, color) => {
    c.beginPath();
    c.arc(x, y, size, 0, Math.PI*2, false);
    c.strokeStyle = color;
    c.stroke();
}
for (var i = 1; i < 65; i++){
    createCircle((20*i), (15*i), (15+i), color[Math.floor(Math.random()*color.length)] );
}
for (var i = 1; i < 50; i++){
    createCircle((15*i), (20*i), (15+i), color[Math.floor(Math.random()*color.length)] );
}
for (var i = 1; i < 80; i++){
    createCircle((25*i), (10*i), (15+i), color[Math.floor(Math.random()*color.length)] );
}
for (var i = 1; i < 80; i++){
    createCircle((1900-(25*i)), (10*i), (15+i), color[Math.floor(Math.random()*color.length)] );
}
for (var i = 1; i < 50; i++){
    createCircle(1900-(15*i), (20*i), (15+i), color[Math.floor(Math.random()*color.length)] );
}
for (var i = 1; i < 65; i++){
    createCircle(1900-(20*i), (15*i), (15+i), color[Math.floor(Math.random()*color.length)] );
}