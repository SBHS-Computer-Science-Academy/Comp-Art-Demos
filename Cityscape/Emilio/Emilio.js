function setup() {
    createCanvas(1000, 800);
    textAlign(CENTER, CENTER);
    frameRate(0.3);
    draw()
}

function mousePressed() {
    console.log(mouseX + ", " + mouseY);
}

function draw() {
    background(140, 135, 135);
    
    gradientHorizontal(color(27, 73, 173), color(232, 105, 26),0,0,1000,600,100,255)
    
    drawBuilding2();
    
    drawBuilding5();
    
    drawBuilding1();
    
    drawBuilding4();
    
    fill(18, 69, 150)
    rect(390,285,380,170)
    fill("white")
    rect(400,335,200,47)
    fill("yellow")
    circle(690,355,85)
    drawBuilding3();
    fill("darkGray")
    rect(375,635,410,135)
    fill(214, 214, 214)
    rect(550,625,55,150)
    
    drawBuilding6();
    
    drawBlimp();
    
     
    
}   
    
function drawBuilding1() {
    fill(133,133,133); // Grey color
    rect(40,361,200,400);// Building
    
    fill("white");
    for (let x = 48; x < 225; x += 28) {
       for (let y = 390; y < 640; y += 40) {
           rect(x, y, 17,22);
           //if (random() < 0.7) {
				//fill(219, 219, 219);
			//} else {
				//fill(252, 252, 232); 
			//}
          
       
        }
    }
}

function drawBuilding2() {
    fill(66, 31, 29)
    rect(220,170,80,450)
    
    fill(218, 225, 230)

    for(let x=229; x<285;x += 24) {        
       for(let y= 200; y<500; y += 31 ) {   
           if (random() < 0.4) {
				fill(119, 129, 145);
			} else {
				fill(67, 71, 77); 
			}
           rect(x, y, 15, 12)
            
        }
    }
}

function drawBuilding3() {
    fill(214, 214, 214)
    rect(355,430,450,340)
        
        fill(255,255,255)
        
        for(let x=385; x<740;x += 83) {
           for(let y=470; y<600;y +=5) {
               rect(x, y, 55,20)
               
        }
    }    
}
   
function drawBuilding4() {
    fill(41, 23, 23)
    rect(620,100,80,400)
    
        fill("white")
        
        for(let x=630; x<690;x += 25) {
            for(let y=122; y<270; y += 20) {
                if (random() < 0.4) {
				fill(32, 44, 51);
			} else {
				fill(56, 71, 79); 
			}
               rect(x,y,8,14) 
        }
    }
}

function drawBuilding5() {
    fill(176, 176, 176)
    rect(265,400,125,300)
    
        fill("white")
        
        for(let x= 280; x< 500;x += 32) {
            for(let y=420; y< 620;y += 35) {
                if (random() < 0.4) {
				fill(240, 245, 252);
			} else {
				fill(255); 
			}
               rect(x,y,20,23) 
        }
    }
}

function drawBuilding6() {
    fill(176, 176, 176)
    rect(818,420,150,255)
    
        fill("white")
        
        for(let x= 823 ; x< 953 ;x += 30 ) {
            for(let y=435; y< 590;y += 34) {
                if (random() < 0.4) {
				fill(240, 245, 252);
			} else {
				fill(255); 
			}
               rect(x,y,18,23) 
        }
    }
}

function drawBlimp() {
    fill(190)
    triangle(370,80,445,10,445,160)
    
    fill(225)
    ellipse(355,85,200,100)
    
    fill(190)
    
}


function gradientHorizontal(startColor, endColor, startX = 0, startY = 0,
    w = width, h = height, steps = 100, alpha = 255) {

    noStroke()
    let endY = startY + h;
    let stepSize = (endY - startY)/ steps;
    
    
    for (let y = startY; y < endY; y += stepSize) { 
        let clr = getColor(startColor, endColor, y, startY, endY - stepSize);
        clr.setAlpha(alpha);
        fill(clr);
        rect(startX, y, w, stepSize);
    }
}






function gradientVertical(startColor, endColor, startY = 0, startX = 0,
    w = width, h = height, steps = 100, alpha = 255) {

    noStroke()
    let endX = startX + w;
    let stepSize = (endX - startX)/ steps; 
    
    
    for (let x = startX; x < endX; x += stepSize) { 
        let clr = getColor(startColor, endColor, x, startX, endX - stepSize);
        clr.setAlpha(alpha);
        fill(clr);
        rect(x, startY, stepSize, h);
        
    }    
}





function getColor(startColor, endColor, val, startVal, endVal) {
	if (typeof startColor === "string") startColor = color(startColor);
	if (typeof endColor === "string") endColor = color(endColor);

	let scaledValue = map(val, startVal, endVal, 0, 1);
	let thisColor = lerpColor(startColor, endColor, scaledValue);
	return thisColor;
}