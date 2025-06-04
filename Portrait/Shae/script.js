function setup() {
    createCanvas(800, 600);
    background ('LightSkyBlue');
}

function draw() {
    
    //sun
    stroke('Gold');
    fill(255,230,0)
    circle(550,76,75);
    
    //ground
    stroke('DarkOliveGreen');
    fill('MediumSeaGreen');
    rect(0,300,800,300);
    
    //walkway
    stroke('DimGrey');
    fill('LightGrey');
    rect(157,392,75,200);
    
    
    //house
    strokeWeight(10);
    stroke('Burlywood');
    fill('NavajoWhite');
    rect(83,202,385,210);
    
    //chimney
    stroke('Saddlebrown')
    fill('sienna')
    rect(100,120,25,80);
    
    //roof
    stroke('SaddleBrown');
    fill('Sienna');
    triangle(264,96,49,200,500,200);
    
    //bricks
    stroke('burlywood');
    strokeWeight(3);
    fill('Wheat');
    rect(83,222,40,20);
    rect(104,242,40,20);
    rect(417,280,40,20);
    rect(323,206,40,20);
    rect(87,368,40,20);
    rect(115,388,40,20);
    rect(220,309,40,20);
    rect(411,300,40,20);
    rect(327,378,40,20);
    
    //door
    stroke('sienna');
    fill('peru');
    rect(158,281,70,130);
    strokeWeight(2);
    stroke('SteelBlue');
    fill('LightSteelBlue');
    ellipse(193,303,45,25);
    fill('SteelBlue');
    line(192,291,192,315);
    line(172,302,215,302);
    stroke('DarkGrey');
    fill('tan');
    circle(218,349,10);
    
    //window
    stroke('steelblue');
    fill('LightSteelBlue');
    ellipse(341.5,285,85,40);
    square(299,287,85);
    stroke('white');
    strokeWeight(1);
    line(365,282,310,309);
    line(363,299,314,323);
    stroke('steelblue');
    fill('steelblue');
    line(341,267,341,372);
    line(299,313,383,313);
    line(299,371,383,372);
    line(299,340,383,340);
    strokeWeight(5);
    stroke('white');
    fill('white');
    line(292,371,390,371);
    
    
    //plants
    strokeWeight(4);
    stroke('LimeGreen');
    fill('LimeGreen');
    line(309,335,309,358);
    line(334,347,334,364);
    line(347,343,343,365);
    line(369,329,372,359);
    strokeWeight(1);
    stroke('MediumVioletRed');
    fill('HotPink');
    circle(308,334,5);
    circle(306,344,5);
    circle(311,350,5);
    stroke('PaleGoldenRod');
    fill('LightGoldenRod');
    circle(332,345,5);
    circle(347,342,5);
    circle(347,353,5);
    circle(335,356,5);
    circle(354,356,5);
    stroke('darkred');
    fill('firebrick');
    circle(368,325,5);
    circle(366,331,5);
    circle(372,329,5);
    circle(373,340,5);
    circle(368,347,5);
    
    //pots
    strokeWeight(2);
    stroke('SaddleBrown');
    fill('sienna');
    rect(306,354,10,15);
    rect(330,360,25,10);
    rect(366,352,10,18);
    
    //bush
    stroke('DarkOliveGreen');
    fill('LimeGreen');
    ellipse(100,395,100,65);
    ellipse(137,420,80,50);
    ellipse(460,400,100,65);
    ellipse(489,415,80,50);
    stroke('MediumVioletRed');
    fill('HotPink');
    circle(62,384,5);
    circle(72,405,10);
    circle(92,373,5);
    circle(97,394,5);
    circle(78,386,5);
    circle(115,376,10);
    circle(129,386,5);
    circle(139,378,5);
    circle(115,422,5);
    circle(131,431,5);
    circle(154,429,5);
    circle(158,403,10);
    circle(134,405,5);
    circle(116,402,5);
    circle(145,418,5);
    circle(174,417,5);
    circle(456,408,10);
    circle(474,401,5);
    circle(471,420,5);
    circle(511,428,5);
    circle(487,427,5);
    circle(488,403,5);
    circle(505,411,10);
    circle(518,402,5);
    circle(424,392,5);
    circle(427,406,5);
    circle(442,391,5);
    circle(455,375,5);
    circle(474,382,10);
    
    //person
    strokeWeight(3);
    stroke('black');
    noFill('black');
    circle(246,330,40);
    line(246,352,246,409);
    line(245,410,228,438);
    line(247,410,262,435);
    line(245,369,227,386);
    line(248,370,264,383);
    circle(236,327,5);
    circle(255,327,5);
    line(244,341,251,337);
    
    //flower
    stroke('DarkOliveGreen');
    line(262,393,267,369);
    stroke('MediumOrchid');
    fill('Orchid');
    circle(266,367,7);
    circle(268,359,5);
    
    
}

// when you click on the canvas, it will print the x, y coordinates of the mouse and draw a circle
function mousePressed() {
    noLoop();
    fill("black");
    circle(mouseX, mouseY, 5);
    console.log(mouseX + ", " + mouseY);
}