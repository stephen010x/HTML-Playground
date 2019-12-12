/*

Commands include:

	[BROKEN]	startPlayground()	//This starts the playground. Commands only work if active.
	
	[BROKEN]	stopPlayground()	//This stops the playground. This literally just reloads the page.

	restorePage()				//This restores the page to normal (Most of the time)
	
	commands()				//This shows all of the commands

	partyMode()				//This creates a party for your website

	shift()					//This shifts everything in the page

	shift(number)				//This shifts everything in the page within that distance

	Gravity Coming Soon!


	These functions were designed to be used in the console log. However, this isn't required.
*/
// Note to self, declare function variables early, but only set them up when the playground is started.

var i;
var all = jQuery('*');
var allBody = jQuery('body *');

function commands() {
console.log(`
	Commands:

[BROKEN] startPlayground()	// This starts the playground.

[BROKEN] stopPlayground()	// This stops the playground.
				// This literally just reloads
				// the page.

restorePage()			// This restores the page to
				// normal (Most of the time)

commands()			// This shows all of the
				// commands

partyMode()			// This creates a party for
				// your website

shift()				// This shifts everything in
				// the page

shift(number)			// This shifts everything in 
				// the page within that 
				// distance

// gravity() Coming Soon!
`)
}




//function startPlayground() {

	/*console.clear();
	all.css("transition" , "all 2s");*/
	
	i = 1;
	function myLoop(loops,time) {
		setTimeout(function () {
			newParty();
			i++;
			if (i < loops) {
				myLoop(loops,time);
			}
			else {	
				restorePage();
			}
		}, time);
	}
	function newParty() {
		jQuery("html").css({
			"position": "relative", 
			"left": randInt(-300,300) + "px",
			"top": randInt(-300,300) + "px",
			"background-color": "#" + randColor(),
			"opacity": "0.70",
			"filter": "alpha(opacity=20)",
			"-moz-opacity": "0.20",
		});
	}
	function restorePage() {
		jQuery("html").css({
			"left": "0px",
			"top": "0px",
			"background-color": "#FFFFFF",
			"opacity": "1",
			"filter": "alpha(opacity=100)",
			"-moz-opacity": "1",
		});
	}
	function rand(min,max) {
		return Math.random() * (max - min) + min;
	}
	function randInt(min,max) {
		return parseInt(Math.random() * (max - min + 1), 10) + min;
	}
	function randColor() {
		return ('00000'+(Math.random()*(1<<24)|0).toString(16)).slice(-6);
	}
	function partyMode() {
		setTimeout(function(){
			jQuery("html").css({
				"position": "relative",
				"opacity": "0.70",
				"filter": "alpha(opacity=20)",
				"-moz-opacity": "0.20",
			});
			myLoop(30,250);
		}, 2000);
		return "Lets Party!"
	}





	function shift(n) {
		allBody.css("transition" , "all 2s");
		for (i = 0; i < allBody.length; i++) {
			//all.eq(i).css("transition" , "all 2s");
			allBody.eq(i).css({
				"position" : "relative",
				"top" : (rand((-n||-300),(n||300)) + "px"),
				"right" : (rand((-n||-300),(n||300)) + "px")
			});
		}
		console.log("Shifted " + allBody.length + " elements")
	}





	/*


	function gravity() {
		jQuery("head").prepend(`
		<script src="https://rafiblog.googlecode.com/svn/Gravity.js"></script>
		`);
	}

	*/

	//return "Playground has been turned on"
	
//}




//function stopPlayground() {




//}


//console.log("HTML Playground is online." +'\n'+ "Type  to see ")

