var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay (musicians,instruments) {

  var beatles; // new empty array
    for (i = 0; i < 3; i++) // for loop
      beatles.push(musicians[i] + " plays the " + instruments[i])
}
