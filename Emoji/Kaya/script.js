function setup() {
    createCanvas(800, 800);
    noLoop();
}

// when you click on the canvas, it will print the x, y coordinates of the mouse and draw a circle
function mousePressed() {
    fill("black");
    circle(mouseX, mouseY, 5);
    console.log(mouseX + ", " + mouseY);
}

function draw() {
    drawTopLeftEmoji();
    drawTopRightEmoji();
    drawBottomLeftEmoji();
    drawBottomRightEmoji();
}

function drawTopLeftEmoji() {
    strokeWeight(8)
    fill(246, 169, 205 );
    square(0, 0, width/2);
   
    
   
   //chiikawa embarrassed/flushed
   //head/ears
 fill(255);
 strokeWeight(8)
    stroke(71, 30, 5  );
     ellipse(102,85,35,40)
     ellipse(283,78,35,40)
    ellipse(200,200,300,259)
    //eyes/blush/eyebrows
    fill(71, 30, 5  )
    circle(150,180,35)
    circle(243,180,35)
    fill(254, 187, 205)
    noStroke(254, 187, 205)
    ellipse(114,219,50,30)
    ellipse(280,219,50,30)
    stroke(71, 30, 5 )
    line(150,138, 131,145)
   line(242, 138,263,145)
   fill(255)
   noStroke(71, 30, 5 )
   ellipse(150,189,25,15)
   ellipse(242,189,25,15)
   noStroke(71, 30, 5 )
   fill(71, 30, 5 )
   ellipse(150,187,24,15)
    ellipse(242,187,24,15)
   fill(255)
    ellipse(150,173,16,13)
   ellipse(242,173,16,13)
   strokeWeight(5)
   stroke(71, 30, 5 )
   line(102,214,98,222)
   line(115,209,107,228)
   line(126,214,120,228)
   //
   line(268,214,263,222)
   line(283,209,273,228)
   line(294,214,287,228)
   
    //mouth
   stroke(71, 30, 5 )
    strokeWeight(8)
   line(201,220,203,225)
   ellipse(186,232,30,20)
   ellipse(218,232,30,20)
   noStroke(255)
   ellipse(185,229,33,25)
   ellipse(218,229,33,25)
   strokeWeight(4)
   stroke(71, 30, 5)
   line(195,254,208,254)
   noStroke(71, 30, 5)
   ellipse(201,252,15,5)
   
   strokeWeight(8)
    stroke(0)
}
//kurimanju disgusted
function drawTopRightEmoji() {
    fill(156, 228, 238    );
    square(width/2, 0, width/2);
 strokeWeight(8)
    stroke(71, 30, 5)
    fill(252, 224, 171)
    ellipse(701,93,20,25)
    ellipse(498, 93,20,25)
    fill(252, 224, 171);
    stroke(71, 30, 5);
    ellipse(600,200,300,270)
    fill(157, 107, 74 )
    angleMode(DEGREES);
    arc(600,200,300,270,200,-20 , OPEN)
    noStroke()
    fill(197, 223, 142)
    ellipse(593,192,50,35)
    fill(181, 210, 118)
    ellipse(593,192,30,15)
     //eyes
fill(71, 30, 5  )
    circle(544,181,35)
    circle(643,181,35)
    //eye details
    fill(255)
   noStroke(71, 30, 5 )
   ellipse(544,186,25,15)
   ellipse(643,186,25,15)
   noStroke(71, 30, 5 )
   fill(71, 30, 5 )
   ellipse(544,184,24,15)
    ellipse(643,184,24,15)
    fill(255)
    ellipse(544,176,16,13)
    ellipse(643,176,16,13)
    //eyebrows
    strokeWeight(5)
    stroke(71, 30, 5 )
    line(580,155,580,164)
    line(605,155,605,164)
    line(565,157,578,157)
    line(605,157,620,157)
    //mouth
    line(579,241,607,241)
    line(573,232,572,248)
    line(611,230,611,251)
    //eyebag
    strokeWeight(2)
    line(559,196,549,207)
    line(628,196,638,207)
    strokeWeight(8)
    
    stroke(0)
}
//usagi happy
function drawBottomLeftEmoji() {
    fill(250, 249, 151   );
    square(0, height/2, width/2);
 fill(252, 230, 181  );
    stroke(71, 30, 5);
     ellipse(164,420,40,110)
      ellipse(222,420,40,110)
    ellipse(200,600,300, 270)
    //
    //eyes
    fill(71, 30, 5  )
    circle(147,574,35)
    circle(235,574,35)
   
    strokeWeight(8)
    //eyebrows
    line(152,520,111,540)
    line(225,520, 266, 540)
    //
    stroke(71, 30, 5 )
    line(150,138, 131,145)
   line(242, 138,263,145)
   //shine
   fill(255)
   noStroke(71, 30, 5 )
   ellipse(148,584,25,15)
   ellipse(235,584,25,15)
   noStroke(71, 30, 5 )
   fill(71, 30, 5 )
   ellipse(148,582,24,15)
    ellipse(235,582,24,15)
    fill(255)
    ellipse(147,568,16,13)
    ellipse(234,568,16,13)
    //tongue/inner mouth
    stroke(71, 30, 5 )
    fill(255, 154, 154)
    ellipse(194,656,45,73)

    //mouth 
   stroke(71, 30, 5 )
    strokeWeight(8)
   line(194,622,194,639)
   fill(252, 230, 181)
   ellipse(180,636,30,20)
   ellipse(210,636,30,20)
   noStroke(255)
   ellipse(177,633,34,26)
   ellipse(211,633,33,25)
   strokeWeight(4)
   stroke(71, 30, 5)
   line(191,705,202,705)
   noStroke(71, 30, 5)
   ellipse(196,703,15,5)
   strokeWeight(8)
    
    stroke(0)
}
//hachiware sad
function drawBottomRightEmoji() {
    fill(194, 247, 157  );
    square(width/2, height/2, width/2);
    //head/ears
        //ears
        stroke(71, 30, 5)
         fill(104, 160, 183)
    triangle(468,528,521,481,451,449)
    triangle(670,474,725,516,740,445)
    fill(255);
    stroke(71, 30, 5);
    ellipse(600,600,300, 270)
    fill(104, 160, 183)
     angleMode(DEGREES);
    arc(600,600,300,270,200,-20 , OPEN)
    //tears
    strokeWeight(10)
    stroke(168, 206, 240)
    line(542,603,525,711)
    line(653,601,683,706)
    stroke(71, 30, 5)
    strokeWeight(8)
    //eyes
fill(71, 30, 5  )
    circle(555,584,35)
    circle(638,584,35)
    //eye details
    fill(255)
   noStroke(71, 30, 5 )
   ellipse(555,595,25,15)
   ellipse(638,595,25,15)
   noStroke(71, 30, 5 )
   fill(71, 30, 5 )
   ellipse(555,593,24,15)
    ellipse(638,593,24,15)
    fill(255)
    ellipse(555,578,16,13)
    ellipse(638,578,16,13)
    //eyebrows
    stroke(71, 30, 5)
    line(553,536,526,549)
    line(628,536,658,549)
    strokeWeight(5)
    line(570,529,569,539)
    line(562,524,562,535)
    line(616,526,616,537)
    strokeWeight(8)
    //mouth and nose
    fill(71,30,5)
    ellipse(595,618,10,3)
    fill(241, 149, 149)
    triangle(596,628,581,676,622,674)
    strokeWeight(5)
    stroke(71,30,5)
    line(597,688,610,688)
     noStroke();
    fill(255)
    ellipse(603,686,15,7)
    
   stroke(0)
}