function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
}
img="";
function preload(){
img=loadImage("dog_cat.jpg")
}
function draw(){
    image(img,0,0,640,420);
    fill("#FF0000");
    text("Dog",45,75);
    noFill();
    stroke("#FF0000");
    rect(30,60,450,350);
    fill("#FF0000")
    text("Cat",335,100)
    noFill();
    stroke("#FF0000");
    rect(300,90,320,300);
   

}