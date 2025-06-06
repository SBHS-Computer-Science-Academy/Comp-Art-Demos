function setup() {
    createCanvas(600, 600);
    textAlign(CENTER, CENTER);
}

function mousePressed() {
    console.log(mouseX + ", " + mouseY);
}


function draw() {
    background('lightGray');
    noStroke()
   
    gradientHorizontal('plum' , 'coral', 0, 0, 600, 600)
drawStars()
 drawBuilding1()
 drawBuilding2();
 drawBuilding3()
 drawBuilding4()
drawBuilding5()

}




function drawBuilding1() {
    fill(63, 69, 71  );
    rect(0,360,125,240) ; //building
    fill(255, 189, 66  )
    circle(590,400,100)
    fill(255, 189, 66, 100  )
    circle(590,400,120)
    fill(255, 189, 66, 60  )
    circle(590,400,150)
    fill(255, 189, 66, 20  )
    circle(590,400,250)
    
    fill(255, 239, 207   )
    for (let x = 20; x <100; x += 25){
        for (let y = 375; y < 600; y +=40) {
             frameRate(.5)
        if(random() < .75){
            fill(255, 229, 158  )
        }else {
            fill(53, 57, 59  )
        }
            rect(x,y,10,15); //window
        }
    }
}

function drawBuilding2() {
   fill(41, 47, 50)
    rect(124,135,60,500)//building
    fill(38, 44, 46  )
    rect(116, 135, 8, 225)
    
    fill(238, 194, 106 )
    
    for (let x = 129; x < 180; x += 15){
        for (let y = 140; y <600; y += 20){
            rect(x,y,5,7); //window
        }
    }
}

function drawBuilding3() {
   fill(46, 54, 58   )
    rect(184,310,90,600)//building
    fill(55, 64, 69)
    rect(184, 310, 6,600 )
    
    fill(255, 239, 207   )
    
    for (let x = 194; x < 265; x += 17){
        for (let y = 350; y <590; y += 20){
            rect(x,y,10,7); //window
            
        }
    }
}



function drawBuilding4() {
    fill(55, 64, 69   )
    rect(274, 454, 100,600)
    fill(41, 47, 50 )
    rect(274,454,7,600)
   
    
    fill(230, 182, 86    )
    
    for (let x = 286; x < 370; x +=15){
        for (let y = 464; y <590; y += 10){
            frameRate(.5);
            if (random() < .45) {
                fill(255, 216, 139  )//on
            }else{
                fill(101, 111, 116   )//off
            }
            
         rect(x,y,5,7); //window
            
        }
    }
    
   
}



function drawBuilding5() {
    fill(46, 54, 58    )
    rect(373,390,500,600)
    
    fill(255, 216, 137  )
    
    for (let x = 385; x < 590; x += 17){
        for (let y = 400; y <590; y += 20){
            frameRate(.5)
            if (random() < .25){
                fill(255, 230, 176)
            }else{
                fill(101, 111, 116  )
            }
            rect(x,y,5,10); //window
            
        }
    }
    
}

function drawStars() {
    fill(255, 230, 179, 50  )
    for (let i = 0; i < 200; i += 1)
    circle(random(width), random(height), random(5))
}


function getColor(startColor, endColor, val, startVal, endVal) {
	if (typeof startColor === "string") startColor = color(startColor);
	if (typeof endColor === "string") endColor = color(endColor);

	let scaledValue = map(val, startVal, endVal, 0, 1);
	let thisColor = lerpColor(startColor, endColor, scaledValue);
	return thisColor;
}

function gradientHorizontal(startColor,endColor,startX = 0 ,startY = 0,
    w = width,h = height,steps = 100,alpha = 255){



    let endY= startY + h ;
    let stepSize = (endY - startY) / steps
    
    for (let y = startY ; y < endY; y += stepSize) {
        let clr = getColor (startColor, endColor, y, startY, endY)
        fill(clr)
       rect(startX, y, w, stepSize)
    }
}