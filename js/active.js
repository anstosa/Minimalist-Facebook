// ==UserScript==
// @name             Minimalist for Facebook
// @author           Ansel Santosa
// @namespace        http://chrome.google.com/webstore
// @description      Features that require one time initialization on complete page load.
// ==/UserScript==

chrome.extension.sendRequest({elements: "o"}, function(response) {
	//---- VARIABLES ----//
	// f_* whether one-time task is done
	var fb = null;
	var running = false;
	var keyinit = false;
	var hiddenT = false;
	var hiddenN = false;
	var tbar = null;
	var nav = null;
	//---- END VARIABLES ----//

	//---- CHECK PAGE LOAD ----//
	function getLoad() {
		return document.getElementById('globalContainer');
	}
	function init() {
		if (getLoad() == fb) return;
		if (fb != null)
			var loading = setInterval(init(),250);
		if ((fb = getLoad()) != null) {
			console.log("MINIMALIST FACEBOOK: Facebook loaded! Work the magic...");
			clearInterval(loading);
			run();
		}
	}
	//---- END CHECK PAGE LOAD ----//

	//---- MAIN LOOP ----//
	function run() {
		//alert("test");
		// only run loop if it hasn't run this second and isn't running already
		if (running) return true;
		else {
			running = true;
		}
		// go loop go!		
		if (response.o.min && document.getElementById("pageLogo").firstChild.innerHTML != "facebook")
			document.getElementById("pageLogo").firstChild.innerHTML = "facebook";
		if (response.o.theater) {
			try {
				var links = document.getElementsByTagName("a");
				for (var i = 0; i < links.length; i++) {
					if (links[i].rel == "theater")
						links[i].rel = "noTheater";
				}
				var url = document.location.href;
				if((url.indexOf("facebook.com") != -1) && (url.indexOf("&theater") != -1))
					window.location.href = url.replace("&theater", "");
			 } catch(e) { console.error(e); }
		}
		if (response.o.f_lf) {
			try {
				if (document.querySelectorAll(".uiHeaderActions.rfloat.fsl.fwb.fcb a")[0].getAttribute("href") == "/?sk=lf")
					window.location.href = "https://www.facebook.com/?sk=lf";
			} catch(e) { console.error(e); }

		}
		if (response.o.full) {
			var timestamps = document.querySelectorAll("abbr[class = 'timestamp']");
			for (var i = 0; i < timestamps.length; i++) {
				var full = document.createElement('abbr');
					full.setAttribute("class","full")
					full.innerHTML = timestamps[i].getAttribute("title");
				timestamps[i].parentNode.insertBefore(full, timestamps[i]);
				timestamps[i].parentNode.removeChild(timestamps[i]);
			}
		}
		if (response.o.tbarH && !document.getElementById('tbarToggle')) {
			console.log("MINIMALIST FACEBOOK: hiding toolbar & adding the hook...");
			try {
				tbar = document.getElementById("globalContainer").firstChild;
				var toggleT = document.createElement("div");
					toggleT.setAttribute("id", "tbarToggle");
					tbar.parentNode.insertBefore(toggleT, tbar);
				toggleBar();
			} catch (e) { console.error(e); }
		}
		if (response.o.navH && !document.getElementById('navToggle')) {
			console.log("MINIMALIST FACEBOOK: Adding the nav hook...");
			try {
				nav = document.getElementsByTagName("body")[0];
				var toggleN = document.createElement("div");
					toggleN.setAttribute("id", "navToggle");
				document.getElementById('leftCol').parentNode.insertBefore(toggleN, document.getElementById('leftCol'));
				toggleNav();
			} catch (e) { console.error(e); }
		}
		if (!keyinit) {
			try {
				if (response.o.tbarH)
					document.getElementById('tbarToggle').addEventListener("click", toggleBar, false);
				if (response.o.navH) {
					document.getElementById('navToggle').addEventListener("click", toggleNav, false);
				}
				/*if (response.o.header) {
					hiddenH = true;
					if (!response.o.gbarH)
						document.getElementById('headerToggle').addEventListener("click", toggleHeader, false);
				}
				*/
				keyinit = true;
			} catch (e) {}
		}
		running  = false;
	}
	//---- END MAIN LOOP ----//

	//---- HELPER METHODS ----//
	function keypress(event) {
		element = event.target;
		elementName = element.nodeName.toLowerCase();
		if (elementName == "input" || elementName == "textarea") return true;
		console.log("MINIMALIST FACEBOOK: keystroke intercepted");
		if (String.fromCharCode(event.which)=="g") {
		}
		// [ / ]
		if (response.o.tbarH && event.which == "47" && !event.ctrlKey && !event.metaKey) {
			toggleBar();
		}
		// [ \ ]
		if (response.o.tbarH && event.which == "92" && !event.ctrlKey && !event.metaKey) {
			toggleBar();
		}
		// [ ` ] tilde key
		if (response.o.navH && event.which == "96" && !event.ctrlKey && !event.metaKey) {
			toggleNav();
		}
		return true;
	}

	function toggleBar(){
		if (hiddenT) {
			minimalist(document.getElementById("tbarToggle").nextSibling, true, "hideT");
			minimalist(document.getElementById("blueBar"), true, "hideT");
			minimalist(document.getElementById("contentCol"), true, "hideT");
			hiddenT = false;
		} else {
			minimalist(document.getElementById("tbarToggle").nextSibling, false, "hideT");
			minimalist(document.getElementById("blueBar"), false, "hideT");
			minimalist(document.getElementById("contentCol"), false, "hideT");
			hiddenT = true;
		}
	}

	function toggleNav() {
		if (hiddenN) {
			minimalist(document.getElementsByTagName('body')[0], true, "hideN");
			document.getElementById("leftCol").setAttribute("style","");
			document.getElementById("headNav").setAttribute("style","");
			document.getElementById("contentCol").setAttribute("style","");
			document.getElementById("pageLogo").setAttribute("style","");
			document.getElementById("pageLogo").nextSibling.setAttribute("style","");
			document.getElementById("contentArea").setAttribute("style","");
			hiddenN = false;
		} else {
			minimalist(document.getElementsByTagName('body')[0], false, "hideN");
			document.getElementById("leftCol").setAttribute("style","display: none;");
			document.getElementById("headNav").setAttribute("style","margin-left: 9px;");
			document.getElementById("contentCol").setAttribute("style","margin-left: 10px;");
			document.getElementById("pageLogo").setAttribute("style","display: none;");
			document.getElementById("pageLogo").nextSibling.setAttribute("style","display: none;");
			document.getElementById("contentArea").setAttribute("style","width: 664px;");
			hiddenN = true;
		}
	}

	function minimalist(element, remove, minClass) {
		var classes = new Array();
		try { classes = element.getAttribute("min").split(" "); } catch(e) {}
		classes = removeItems(classes, minClass);
		if (!remove) classes.push(minClass);
		element.setAttribute("min", classes.join(" "));
	}
	
	function removeItems(array, item) {
		var i = 0;
		while (i < array.length) {
			if (array[i] == item)
				array.splice(i, 1);
			else i++;
		}
		return array;
	}
	//---- END HELPER METHODS ----//
	init();
	// LISTENERS
	//window.addEventListener("click", run, false);
	document.addEventListener("keypress", keypress, true);
	document.addEventListener("DOMSubtreeModified", run, false);
});