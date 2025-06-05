// TOP LEVEL SCRIPT
// names are ["project", "pathToImage"]
var names = [
    ["Portrait", "Portrait/images/Lily.png"],
    ["Scene", "Scene/images/Lily.png"],
    ["Project", "Project/images/Lily.png"],
    ["Project", "Project/images/Lily.png"],
    ["Project", "Project/images/Lily.png"],
    ["Project", "Project/images/Lily.png"],
];

var gridWidth = 4;
var gridHtml = "";
var idx = 0;

makeGrid();

function generateCard(names, imageName, altText, url)
{
    return '<div class="card text-center"> <div class="card-body"> <h5 class="card-title">'
    + names
    + '</h5> <p class="card-text"> <a href="'
    + url
    + '" target="_blank" rel="noopener noreferrer"> <img src="'
    + imageName
    + '" alt="'
    + altText
    + '" class="screenshots"> </a> </p> </div> </div>';
}

function makeCard() {
    if (idx >= names.length) return;
    var name = names[idx];
    var fileUrl = "";
    if (name.constructor === Array) {
    	name = names[idx][0];
    	fileUrl = names[idx][1];
    }
    var file = name.replaceAll(" ","").replaceAll(",","").replace("and","") + "/index.html";
    var imageName = fileUrl;
	
    var card = generateCard(name, imageName, name, file);
    gridHtml += card; //not elegant, but it works
    
    idx++;
}


function makeGrid() {
    
    for (var i = 0; i < names.length; i++) {
        if (i % gridWidth == 0) {
            gridHtml += '<div class="row">';
        }
        gridHtml += '<div class="col-md-3 p-3">';
        makeCard();
        gridHtml += '</div>';
        if (i % gridWidth == (gridWidth - 1)) {
            gridHtml += '</div>';
        }
    }
    
    if (names.length % gridWidth != 0) {
        gridHtml += '</div>';
    }
    
    document.getElementById("grid").innerHTML += gridHtml;
    
}
