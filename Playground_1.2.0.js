skew()var pgVersion = "1.2.0"
/*

Commands include:

	commands()			//This shows all of the commands

	startPG()	//This starts the playground. Commands only work if active.
	
	stopPG()	//This stops the playground. This literally just reloads the page.

	restorePage()			//This restores the page to normal (Most of the time)

	partyMode()			//This creates a party for your website

	shift()				//This shifts everything in the page

	shift(number)			//This shifts everything in the page within that distance
	
	skewPage()			//
	
	skewPage(degrees)
	
	skew()
	
	skew(degrees)
	
	version()				//This gives you version number of HTML Playground

	Gravity Coming Soon!


	These functions were designed to be used in the console log. However, this isn't required.
*/
// Note to self, declare function variables early, but only set them up when the playground is started.

var i;
var all;
var allBody;

function commands() {
console.log(`
	Commands:

commands()		// This shows all of the
			// commands. Doesn't require 
			// startPlayground()

startPG()		// This starts the playground.

stopPG()		// This stops the playground.
			// This literally just reloads
			// the page.

restorePage()		// This restores the page to
			// normal (Most of the time)

partyMode()		// This creates a party for
			// your website

shift()			// This shifts everything in
			// the page

shift(number)		// This shifts everything in 
			// the page within that 
			// distance

version()		// This shows version number
			// of HTML Playground

// gravity() Coming Soon!
`)
}

// Idea for cleanup. Just store css in a certain place instead of putting it in element (as well as javascript) 
// and then delete it aftarwards.

// These startPG and stopPG are temporary functions until the real thing works
function startPG() {
	all = jQuery('*');
	allBody = jQuery('body *');
	console.log('HTML PlayGround V.'+ pgVersion +' active')
}
function stopPG() {
	all = null;
	allBody = null;
	restorePage()
	console.log('HTML PlayGround disabled')
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
	function skewPage(degrees) {
		rotate('body', degrees || 1)
	}
	function rotate(element, degrees) {
		jQuery(element)[0].style.setProperty("-webkit-transform", "rotate(" + degrees + "deg)");
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
	



	function runJQuery() {
		javascript: (function(e, s) {
			e.src = s;
			e.onload = function() {
				jQuery.noConflict();
				console.log('jQuery injected');
			};
			document.head.appendChild(e);
		})(document.createElement('script'), '//code.jquery.com/jquery-latest.min.js')
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
	function skew(d) {
		allBody.css("transition" , "all 2s");
		for (i = 0; i < allBody.length; i++) {
			allBody.eq(i).css("-webkit-transform" , "rotate(" + rand((-d||-5),(d||5)) + "deg)");
		}
		console.log("Skewed " + allBody.length + " elements")}

	function version() {
		console.log("Version " + pgVersion);
	
	}
	function hell(magnitude) {
		magnitude = magnitude/100 || 1;
		skew(300 * magnitude);
		shift(360 * magnitude);
		partyMode();
	}

	/*


	function gravity() {
		jQuery("head").prepend(`
		<script src="https://rafiblog.googlecode.com/svn/Gravity.js"></script>
		`);
	}

	*/

	//return "Playground has been turned on. Type 'commands()'"
	
//}




//function stopPlayground() {




//}


//console.log("HTML Playground is online." +'\n'+ "Type  to see ")

