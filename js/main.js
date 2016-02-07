
var titleScreen = new room(["Oww, my head!", 
					        "This life on the sea really isn't doing me any favours.", 
					        "Living in a small cabin and constantly swaying from side to side",
							"Hang on a minute...",
							"How the hell did I get on this beach?",
							"And where on earth is the boat!?"]);
					  
titleScreen.choices = [
				["Look Around", "beachStart.enter"]
				];




var beachStart = new room(["Hmm, there's not much around here.", 
					        "Looks like I'm stranded on a desert island with nobody in sight.", 
					        "The beach streches on for a while, I can see a forest a little way up the beach on the left.",
							"And to my right, the beach just stretches all the way down to some jagged rocks."]);
					  
beachStart.choices = [
				["Head to the rocks", "headRocks.enter"],
				["Head to the forest", "roomOne.enter"],
				];
				
				
var headRocks = new room(["Heading to the rocks is probably a safe bet, not too far to walk.", 
					        "Might find something useful, hopefully.", 
					        "[Guybrush is walking]"]);
					  
headRocks.choices = [
				["Head to the rocks", "titleScreen.enter"],
				["Head to the forest", "roomOne.enter"],
				];




var roomOne = new room(["Welcome to Room 1", "It's nice in here."]);

roomOne.choices = [
				["End Game", ""],
				];

roomOne.end = true;




start();