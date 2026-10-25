//the clicker button program

//we create a variable named "count", the initial value is 0

let count=0;
let colorsCount=0;

//an indexed array of data
let colors=["green", "orange", "brown", "yellow", "gold", "purple", "red", "pink"];

//green, orange, brown, yellow, gold, purple, red, pink


//we listened for when an html element with id "needy-button" is clicked and then...

$("#needy-button").click( function(){

    //what to do when the button is clicked
    //first, set a new value for "count", which is the current value +1

    count=count + 1;
    colorsCount=colorsCount+1;

if(count>=4)($("#needy-button").html("fresh and happy"));
if(count>=7)($("#needy-button").html("keep pushing!"));
if(count>=12)($("#needy-button").html("so tired!"));

    console.log(count);
    console.log(colors[colorsCount-1]);

    //now let's find our button and set a new text for it


    $("#needy-button").html(buttonText="I was kicked " + count + " times and color is " + colors[count-1]);

    $("body").css( "background-color", colors[colorsCount-1] );

   // $("body").append(" <img width='50'src='" +colors[count-1] +".jpg'>" );
    
    if( count>=5 ) { $("#needy-button").after("<p>my mood is...agitated</p>");   }

    if( count>=13 ) { $("#needy-button").after("<p>my mood is... really agitated</p>");   }

colorsCount=colorsCount+1

    $("#needy-button").after("<p>my mood is...default</p>");

    //if we run out of colors start from the first one anew

    if (colorsCount>=8) {colorsCount=0;}


});



