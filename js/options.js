$(function(){
	//---- LOAD ----//
		// defaults
		if (!localStorage["options"]) localStorage["options"] = "{}";
		if (!localStorage["backCLR"]) localStorage["backCLR"] = "#ffffff";
		if (!localStorage["accentCLR"]) localStorage["accentCLR"] = "#3B5998";
		if (!localStorage["customCSSval"]) localStorage["customCSSval"] = " ";
		if (!localStorage["EIC_1"]) localStorage["EIC_1"] = "";
		if (!localStorage["EIC_2"]) localStorage["EIC_2"] = "";
		if (!localStorage["EIC_3"]) localStorage["EIC_3"] = "";

	if(localStorage['options']){
		var o = JSON.parse(localStorage['options']);
		// GENERAL
			$("#mficon").attr('checked', o.mficon);
			$("#favicon").attr('checked', o.favicon);
			$("#trans").attr('checked', o.trans);
			$("#footer").attr('checked', o.footer);
			$("#customCSS").attr('checked', o.customCSS);
			if ((o.customCSSval != null) && (o.customCSSval != ""))
				$("#customCSSval").val(localStorage["customCSSval"]);
		// THEME
			$("#min").attr('checked', o.min);
			$("#fullW").attr('checked', o.fullW);
			$("#backC").attr('checked', o.backC);
				if ((o.backCLR != null) && (o.backCLR != ""))
					$("#backCLRsub").attr("style","background-color:" + o.backCLR + ";");
			$("#accent").attr('checked', o.accent);
				if ((o.accentCLR != null) && (o.accentCLR != ""))
					$("#accentCLRsub").attr("style","background-color:" + o.accentCLR + ";");
			$("#high").attr('checked', o.high);
		// TOOLBAR
			$("#tbarH").attr('checked', o.tbarH);			
			$("#t_float").attr('checked', o.t_float);
			$("#logo").attr('checked', o.logo);
			$("#t_friends").attr('checked', o.t_friends);
			$("#t_messages").attr('checked', o.t_messages);
			$("#t_notifications").attr('checked', o.t_notifications);
			$("#t_search").attr('checked', o.t_search);
			$("#t_home").attr('checked', o.t_home);
			$("#t_profile").attr('checked', o.t_profile);
		// NAVIGATION
			$("#navH").attr('checked', o.navH);
			$("#navF").attr('checked', o.navF);
			$("#n_profile").attr('checked', o.n_profile);
			$("#n_news").attr('checked', o.n_news);
			$("#n_messages").attr('checked', o.n_messages);
			$("#n_events").attr('checked', o.n_events);
			$("#n_friends").attr('checked', o.n_friends);
			$("#n_groups").attr('checked', o.n_groups);
			$("#n_more").attr('checked', o.n_more);
			$("#n_chat").attr('checked', o.n_chat);
			$("#n_search").attr('checked', o.n_search);
		// SIDEBAR
			$("#s_all").attr('checked', o.s_all);
			$("#s_events").attr('checked', o.s_events);
			$("#s_find").attr('checked', o.s_find);
			$("#s_requests").attr('checked', o.s_requests);
			$("#s_pokes").attr('checked', o.s_pokes);
			$("#s_recommended").attr('checked', o.s_recommended);
			$("#s_people").attr('checked', o.s_people);
			$("#s_ads").attr('checked', o.s_ads);			
		// MAIN
			$("#full").attr('checked', o.full);
			$("#zoom").attr('checked', o.zoom);
			$("#theater").attr('checked', o.theater);
			$("#idle").attr('checked', o.idle);
			$("#bottom").attr('checked', o.bottom);
			$("#f_lf").attr('checked', o.f_lf);
			$("#f_share").attr('checked', o.f_share);
			$("#f_tr").attr('checked', o.f_tr);
			$("#f_app").attr('checked', o.f_app);
			$("#f_event").attr('checked', o.f_event);
			$("#f_friend").attr('checked', o.f_friend);
			$("#f_group").attr('checked', o.f_group);
			$("#f_like").attr('checked', o.f_like);
			$("#f_link").attr('checked', o.f_link);
			$("#f_note").attr('checked', o.f_note);
			$("#f_photo").attr('checked', o.f_photo);
			$("#f_place").attr('checked', o.f_place);
			$("#f_profile").attr('checked', o.f_profile);
			$("#f_relationship").attr('checked', o.f_relationship);
			$("#f_status").attr('checked', o.f_status);
			$("#f_video").attr('checked', o.f_video);
			$("#f_wall").attr('checked', o.f_wall);
		localStorage["uncheckedUpdate"] = false;
	}
	//---- END LOAD ----//
	
	//---- SAVE ----//
	function save(){
		localStorage['options'] = JSON.stringify({
			// GENERAL
				"mficon":$("#mficon").attr('checked'),
				"favicon":$("#favicon").attr('checked'),
				"trans":$("#trans").attr('checked'),
				"footer":$("#footer").attr('checked'),
				"customCSS":$("#customCSS").attr('checked'),
					"customCSSval":$("#customCSSval").val().replace(/(\r\n|\n|\r)/gm,""),
			// THEME				
				"min":$("#min").attr('checked'),
				"fullW":$("#fullW").attr('checked'),
				"backC":$("#backC").attr('checked'),
					"backCLR":localStorage["backCLR"],
				"accent":$("#accent").attr('checked'),
					"accentCLR":localStorage["accentCLR"],
				"high":$("#high").attr('checked'),
			// TOOLBAR
				"tbarH":$("#tbarH").attr('checked'),
				"t_float":$("#t_float").attr('checked'),
				"logo":$("#logo").attr('checked'),
				"t_friends":$("#t_friends").attr('checked'),
				"t_messages":$("#t_messages").attr('checked'),
				"t_notifications":$("#t_notifications").attr('checked'),
				"t_search":$("#t_search").attr('checked'),
				"t_home":$("#t_home").attr('checked'),
				"t_profile":$("#t_profile").attr('checked'),				
			// NAVIGATION
				"navH":$("#navH").attr('checked'),
				"navF":$("#navF").attr('checked'),
				"n_profile":$("#n_profile").attr('checked'),
				"n_news":$("#n_news").attr('checked'),
				"n_messages":$("#n_messages").attr('checked'),
				"n_events":$("#n_events").attr('checked'),
				"n_friends":$("#n_friends").attr('checked'),
				"n_groups":$("#n_groups").attr('checked'),
				"n_more":$("#n_more").attr('checked'),
				"n_chat":$("#n_chat").attr('checked'),
				"n_search":$("#n_search").attr('checked'),
			// SIDEBAR
				"s_all":$("#s_all").attr('checked'),
				"s_events":$("#s_events").attr('checked'),
				"s_find":$("#s_find").attr('checked'),
				"s_requests":$("#s_requests").attr('checked'),
				"s_pokes":$("#s_pokes").attr('checked'),
				"s_recommended":$("#s_recommended").attr('checked'),
				"s_people":$("#s_people").attr('checked'),
				"s_ads":$("#s_ads").attr('checked'),
			// MAIN
				"full":$("#full").attr('checked'),
				"zoom":$("#zoom").attr('checked'),
				"theater":$("#theater").attr('checked'),
				"idle":$("#idle").attr('checked'),
				"bottom":$("#bottom").attr('checked'),
				"f_lf":$("#f_lf").attr('checked'),
				"f_share":$("#f_share").attr('checked'),
				"f_tr":$("#f_tr").attr('checked'),
				"f_app":$("#f_app").attr('checked'),
				"f_event":$("#f_event").attr('checked'),
				"f_friend":$("#f_friend").attr('checked'),
				"f_group":$("#f_group").attr('checked'),
				"f_like":$("#f_like").attr('checked'),
				"f_link":$("#f_link").attr('checked'),
				"f_note":$("#f_note").attr('checked'),
				"f_photo":$("#f_photo").attr('checked'),
				"f_place":$("#f_place").attr('checked'),
				"f_profile":$("#f_profile").attr('checked'),
				"f_relationship":$("#f_relationship").attr('checked'),
				"f_status":$("#f_status").attr('checked'),
				"f_video":$("#f_video").attr('checked'),
				"f_wall":$("#f_wall").attr('checked'),				
		});
		localStorage["customCSSval"] = $("#customCSSval").val();
		localStorage["EIC_1"] = $("#EIC_1").val();
		localStorage["EIC_2"] = $("#EIC_2").val();
		localStorage["EIC_3"] = $("#EIC_3").val();
		$("#announce").attr("style", "");
		$("#refreshEI").attr("style", "");
		$("#refresh").attr("style", "display: block !important;");
	}
	//---- END SAVE ----//
	
	//---- SAVE LISTENERS ----//
	document.getElementById("OPTgen").addEventListener("keyup", save, false);
	document.getElementById("OPTgen").addEventListener("click", save, false);
	document.getElementById("OPTthe").addEventListener("click", save, false);
	document.getElementById("OPTtoo").addEventListener("click", save, false);
	document.getElementById("OPTnav").addEventListener("click", save, false);
	document.getElementById("OPTsid").addEventListener("click", save, false);
	document.getElementById("OPTmai").addEventListener("keyup", save, false);
	document.getElementById("OPTmai").addEventListener("click", save, false);
	document.getElementById("EIC_1").addEventListener("keyup", save, false);
	document.getElementById("EIC_2").addEventListener("keyup", save, false);
	document.getElementById("EIC_3").addEventListener("keyup", save, false);
	var pickers = document.getElementsByClassName("colorPicker");
	for (var i = 0; i < pickers.length; i++) {
		pickers[i].addEventListener("click", save, false);
		pickers[i].addEventListener("keyup", save, false);
	}
	//---- END SAVE LISTENERS ----//
	
	//---- IMAGE PREVIEW ----//
	imagePreview = function(){
			xOffset = -25;
			yOffset = -100;
		$("label:not([hide])").hover(function(e){
			this.t = this.title;
			this.title = "";
			var c = (this.t != "") ? "<br /><span>" + this.t : "" + "</span>";
			$("body").append("<p id='preview'><img src='img/screens/"+ this.getAttribute("for") +".png' alt='Image preview' />"+ c +"</p>");
			$("#preview img")
				.css("max-width", window.innerWidth - 100)
				.css("max-height", window.innerHeight - 100);
			if ($("#preview").width() > (window.innerWidth - e.pageX - 130)) {
				$("#preview")
					.css("top",(e.pageY - xOffset) + "px")
					.css("left",(e.pageX - ($("#preview").width() - (window.innerWidth - e.pageX) + 75)) + "px")
					.fadeIn("fast");
			} else if ($("#preview").height() > (window.innerHeight - e.pageY - 55)) {
				$("#preview")
					.css("top",(e.pageY - ($("#preview").height() + 55)) + "px")
					.css("left",(e.pageX + yOffset) + "px")
					.fadeIn("fast");
			} else {
				$("#preview")
					.css("top",(e.pageY - xOffset) + "px")
					.css("left",(e.pageX + yOffset) + "px")
					.fadeIn("fast");
			}
		},
		function(){
			this.title = this.t;
			$("#preview").remove();
		});
		$("a.preview").mousemove(function(e){
			if ($("#preview").width() > (window.innerWidth - e.pageX - 100) || $("#preview").height() > (window.innerHeight - e.pageY - 25)) {
				$("#preview")
					.css("top",(e.pageY + 75 - ($("#preview").height() - (window.innerHeight - e.pageY))) + "px")
					.css("left",(e.pageX - 75 - ($("#preview").width() - (window.innerWidth - e.pageX))) + "px")
					.fadeIn("fast");
			} else {
				$("#preview")
					.css("top",(e.pageY - xOffset) + "px")
					.css("left",(e.pageX + yOffset) + "px")
					.fadeIn("fast");
			}
		});
	};
	$(document).ready(function(){
		imagePreview();
	});
	//---- END IMAGE PREVIEW ----//
});

// UPDATE EXAMPLE BUTTON
function updateButton() {
	$("#testButton").attr("style","border: 1px solid #" + localStorage["BTNborder"] + ";background: -webkit-gradient(linear,0% 40%,0% 70%,from(#" + localStorage["BTNbottom"] + "),to(#" + localStorage["BTNtop"] + "));");
}

// NAVIGATION HANDLER
var last = "gen";
function navigate(link) {
	$("#OPT" + last).attr("style", "");
	$("#OPT" + link).attr("style", "display: block;");
	//document.getElementById("OPT" + link).scrollTop = 0;
	$("#" + last).attr("class", "");
	$("#" + link).attr("class", "current");
	//document.getElementById("OPTside").scrollTop = 0;
	last = link;
}

// RESET CUSTOM BUTTONS COLORS
function cButtonReset() {
	localStorage["BTNcolor"] = "#000000";
	localStorage["BTNborder"] = "#bbbbbb";
	localStorage["BTNbottom"] = "#f9f9f9";
	localStorage["BTNtop"] = "#ded5de";
	window.location.reload();
}

//---- EXPORT/IMPORT ----//
function export(EIid) {
	var prefOut = new Array();
		prefOut[0] = localStorage["options"];
		prefOut[1] = localStorage["borderCLR"];
		prefOut[2] = localStorage["itemCLR"];
		prefOut[3] = localStorage["BTNcolor"];
		prefOut[4] = localStorage["BTNborder"];
		prefOut[5] = localStorage["BTNbottom"];
		prefOut[6] = localStorage["BTNtop"];
		prefOut[7] = localStorage["customCSSval"];
		prefOut[8] = localStorage["backCLR"];
		prefOut[9] = localStorage["linkCLR"];
	var prefsOut = prefOut[0];	// fencepost
	for (var i = 1; i <= 9; i++) {
		prefsOut += '\n' + prefOut[i];
	}
	document.getElementById(EIid).innerHTML = prefsOut;
	if (EIid == "EIC_3") localStorage["EIC_3"] = prefsOut;	// backup existing to Custom 3
}

function import(EIid) {
	var prefsIn = document.getElementById(EIid).value;
	var prefIn = prefsIn.split("\n");
		localStorage["options"] = prefIn[0];
		localStorage["borderCLR"] = prefIn[1];
		localStorage["itemCLR"] = prefIn[2];
		localStorage["BTNcolor"] = prefIn[3];
		localStorage["BTNborder"] = prefIn[4];
		localStorage["BTNbottom"] = prefIn[5];
		localStorage["BTNtop"] = prefIn[6];
		localStorage["customCSSval"] = prefIn[7];
		localStorage["backCLR"] = prefIn[8];
		localStorage["linkCLR"] = prefIn[9];
	window.location.hash = "imps";
	window.location.reload();
}
//---- END EXPORT/IMPORT ----//

// EASTER EGG
function easterEgg() {
	if (!localStorage['easterEgg']) {
		localStorage['easterEgg'] = true;
		$('#easterEgg_off').attr('style','display:none;');
		$('#easterEgg_on').attr('style','display:block;');
	} else {
		localStorage.removeItem('easterEgg');
		$('#easterEgg_on').attr('style','display:none;');
		$('#easterEgg_off').attr('style','display:block;');
	}
}