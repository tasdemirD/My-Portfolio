//function for the light mode
function lightMode(){
    let element = document.body;
    element.classList.toggle("lightMode");
}

//funtion for displaying game information using the page alert
function displaySelectedGame(theForm){
    var output = "";

    for(var i = 0; elem = theForm.elements[i]; i++){
        if(elem.name){
            output += elem.value;
        }
    }

    alert(output);
}

//function for adding an event listener in html
function displayThankYouMsg(){
    alert("Thank you for taking your time and checking out the games!")
}

//array with objects for the table in teh projects tab
function arrayForTable(){
    var table = "";

    const games = [
        { 
            Title: "Spooky ",
            Time: "1,5 months",
            Downloads: "about 400",
            Link: "<a id='link' href='https://team-fish.itch.io/spooky-ice-fishing-game' rel='noopener' target='_blank' title='Spooky Ice Fishing Game'>GO TO PAGE</a>"
        },
        {
            Title: "Six",
            Time: "2 days",
            Downloads: "about 15",
            Link: "<a id='link' href='https://team-fish.itch.io/six-worlds' rel='noopener' target='_blank' title='Six Worlds'>GO TO PAGE</a>"
        }
    ];

    table += "<tr><th></th><th>Time it took to make the game</th><th>Downloads</th></th><th>Links</th></tr>";

    let tValues = Object.entries(games);
    var i = 0;
    
    tValues.forEach(
        (item) => {
            table += "<tr>";
            table += "<td>" + games[i].Title + "</td>";
            table += "<td>" + games[i].Time + "</td>";
            table += "<td>" + games[i].Downloads + "</td>";
            table += "<td>" + games[i].Link + "</td>";
            table += "</tr>";
            i++;
        }
    )

    document.getElementById("output").innerHTML = table;
}