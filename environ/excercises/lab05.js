let count = 1

function askNumber(newCount) {
    $("#button").html("<p>" + "The count is " + newCount + "</p>")
}

$("#button").click(function(){
    count = count + 1

    let newCount = count
    askNumber(newCount)
});