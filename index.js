var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

		function theBeatlesPlay (musicians,instruments) {
		  var beatles = []; 												// new empty array
      var bLen = beatles.length;
		    for (i = 0; i < bLen; i++) { 							// for loop
				beatles.push(musicians[i] + " plays the " + instruments[i]); // add string elements to array of beatles and instruments
       	 	}
			return beatles; 		// return array of strings
		}
