/*

Commands include:

	[BROKEN]	startPlayground()	//This starts the playground. None of the other functions will work unless this is activated
	
	[BROKEN]	stopPlayground()	//This stops the playground. This literally just reloads the page.

	restorePage()		//This restores the page to normal (Most of the time)
	
	commands()			//This shows all of the commands

	partyMode()			//This creates a party for your website

	shift()				//This shifts everything in the page

	shift(number)		//This shifts everything in the page within that distance

	Gravity Coming Soon!


	These functions were designed to be used in the console log. However, this isn't required.
*/
// Note to self, declare function variables early, but only set them up when the playground is started.

var i;
var all = jQuery('*');


function commands() {
	console.log(`
		"Commands: 																								" +'\n'+'\n'+
		"	[BROKEN]	startPlayground()	//This starts the playground. 										" +'\n'+'\n'+
		"	[BROKEN]	stopPlayground()	//This stops the playground. This literally just reloads the page. 	" +'\n'+'\n'+
		"	restorePage()					//This restores the page to normal (Most of the time) 				" +'\n'+'\n'+
		"	commands()						//This shows all of the commands 									" +'\n'+'\n'+
		"	partyMode()						//This creates a party for your website 							" +'\n'+'\n'+
		"	shift()							//This shifts everything in the page 								" +'\n'+'\n'+
		"	shift(number)					//This shifts everything in the page within that distance 			" +'\n'+'\n'+
		"	Gravity Coming Soon! 																				" +'\n'+'\n'
	`)
}




//function startPlayground() {

	console.clear();
	all.css("transition" , "all 2s");
	
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
	function randInt(min,max) {
		return parseInt((Math.random() * (max - min + 1)), 10) + min;
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
		for (i = 0; i < all.length; i++) {
			//all.eq(i).css("transition" , "all 2s");
			all.eq(i).css({
				"position" : "relative",
				"top" : (randInt((n||-300),(n||300)) + "px"),
				"right" : (randInt((n||-300),(n||300)) + "px")
			});
		}
	}





	/*


	function gravity() {
		jQuery("head").prepend(`
		<script src="https://rafiblog.googlecode.com/svn/Gravity.js"></script>
		`);
	}

	*/

	return "Playground has been turned on"
	
//}




//function stopPlayground() {




//}




