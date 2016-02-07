/*
The MIT License (MIT)

Copyright (c) 2016 Benjamin Orrin

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/







function writeText(params, time, callback){
	//Writes text to page
	//Takes an array and will interates through with a wait interval
	
	var time = time;
	var loop = params.length - 1;
	var i = 0;

    var looper = function(){
		
		var bodyt = params[i];
		
		var element = document.getElementById('storyContainer');
        var para = document.createElement("P");                       // Create a <p> node
		var t = document.createTextNode(bodyt);      // Create a text node
		para.appendChild(t);   
		para.style.opacity = (para.style.opacity == 1) ? 0 : 1;
		element.appendChild(para);
		window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);

        if (i < loop) {
            i++;
        } else {
			complete = 1;
			if(callback){
				console.log("Callback");
				callback();
			}
			return;
        }
        setTimeout(looper, time);
    };
    setTimeout(looper, time);
}

room = function(body){
	
	this.body = body;
	this.choices = null;
	this.time = 3000;
	this.end = false;
	
	var self = this;
	//var choices = this.choices;
	
	this.enter = function(choiceText){
		//Called when player enters a room
		//This can be thought of as the main loop of a room object
		if(choiceText){
			self.clearChoice(choiceText);
			
		} else { self.clearChoice(); }
		
		writeText(this.body, this.time, self.choiceGen);
		//self.choiceGen();
		
	}
	
	this.choiceGen = function() {
		//Generates choice based on room
		//Then prints choices to page
		
		var choices = this.choices;
		var end = self.end;
		
		var element = document.getElementById('storyContainer');
		var newdiv = document.createElement('div');
		newdiv.setAttribute('id','choicePrompt');
		
		if(end == false){
		
			for(var i = 0; i < self.choices.length; i++){
					var func = self.choices[i][1];
				
					var anchor = document.createElement("a");
					anchor.innerHTML = '<input type="button" class="carrot-flat-button" onclick="' + func + '(\'' + self.choices[i][0] +'\')" value="' + self.choices[i][0] + '"><br/>';
					newdiv.appendChild(anchor);
			}
			
		} else{
			var anchor = document.createElement("a");
			anchor.innerHTML = '<input type="button" class="nephritis-flat-button" onclick="end()" value="' + self.choices[0][0] + '"><br/>';
			newdiv.appendChild(anchor);
			
		}
		element.appendChild(newdiv);
		window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
	}
	
	this.clearChoice = function(choiceText){
		//Clears the choice prompt
		
		var element = document.getElementById('storyContainer');
		var prompt = document.getElementById('choicePrompt');
		if(choiceText){
			var reply = document.createElement("P");
			reply.innerHTML = '<span class="reply">' + choiceText + '</span>';
			element.replaceChild(reply, prompt);
		} else{ element.removeChild(prompt); }
		
	}
	
}

function clearAll(){
	var element = document.getElementById('storyContainer');
	element.innerHTML = '<div id="choicePrompt"> </div>';
}

function end(){
	//End function
	//Called when the green game over button is pressed
	
	clearAll();
	
	start();
}


function start(){
	
	//This is the main loop of your story
	//It is called as soon as the js is loaded
	//Here you define all of your rooms.
	
	
	//Now we enter the title screen
	titleScreen.enter();

}