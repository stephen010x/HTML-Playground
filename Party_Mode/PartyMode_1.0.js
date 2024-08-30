var i = 1;
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

function letsParty(party) {    
    if (party === true) {
        
        setTimeout(function(){
            jQuery("html").css({
                "position": "relative",
                "opacity": "0.70",
                "filter": "alpha(opacity=20)",
                "-moz-opacity": "0.20",
            });
            myLoop(30,250);
        }, 2000);
    }
}