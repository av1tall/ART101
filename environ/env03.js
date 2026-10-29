
let environmentTitle = "Avital's Backrooms Inspired by Zara";
let count = 0;
let environmentElements = ["yellow", "dust", "monster", "chair"];

let mainEntity = {
    name: "monster",
    type: "full of teeth",
    mood: "evil",
    isMoving: true,
    favoriteElement: environmentElements[1]
};

$("#evilbutton").click(function () {

    count = count + 1;

    let arrayPosition = count - 1;

    console.log(count);
    if (count<=1) {$("#evilbutton").html("Hello...");}
    else if (count<=2) {$("#evilbutton").html("Hello...");}
    else if (count<=3) {$("#evilbutton").html("Welcome to the Backrooms...");}
    else if (count<=4) {$("#evilbutton").html("Enjoy your stay.")}
});


//if(count>=4) {$("#evilbutton").html("Hello...")};
//else if(count>=7){$("#evilbutton").html("Welcome to the Backrooms...")};
//else if(count>=12){$("#evilbutton").html("Enjoy your stay.")};

    console.log(count);


    $("#evilbutton").html(buttonText="Hello");

 //  $("body").append(" <img width='50'src='" +colors[count-1] +".jpg'>" );
    
    if( count>=1 ) {$("#evilbutton").after("<p>Hello...</p>")};

    if( count>=2 ) { $("#evilbutton").after("<p>Welcome to the Backrooms...</p>");   }
    if( count>=3 ) { $("#evilbutton").after("<p>Enjoy your Stay</p>");   }

    let arrayPosition = count - 1;

    //let message = "<p>You clicked me " + count + " times.</p>";
   // message = message + "<p>Hello....</p>";
   // message = message + "<p>Welcome to the Backrooms...</p>";
   // message = message + "<p>Enjoy your stay.</p>";

    {}

