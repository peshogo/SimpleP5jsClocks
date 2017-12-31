function setup(){
  createCanvas(300,300)
  strokeWeight(25)
  fill(0,0,0,0)
  strokeCap(SQUARE)
}

let secondr = 250
let minuter = 200
let hourr = 150
let dayr = 100
let monthr = 50

function draw(){
  background(255,255,255)
  translate(150,150)
  stroke(255,0,0)
  my_arc(secondr,second()/60)
  stroke(0,255,0)
  my_arc(minuter,minute()/60)
  stroke(0,0,255)
  my_arc(hourr,hour()/24)
  stroke(0,255,255)
  my_arc(dayr,day()/31)
  stroke(255,0,255)
  my_arc(monthr,month()/12)
}

var my_arc = (r,len)=>{arc(0,0,r,r,0,len * TWO_PI)}

