// ==UserScript==
// @name             Minimalist for Google Reader
// @author           Ansel Santosa
// @namespace        http://chrome.google.com/webstore
// @description      Stylesheet construction and injection
// ==/UserScript==

chrome.extension.sendRequest({elements: 'o'}, function(response) {
	var css = "";
	var toolbar = chrome.extension.getURL("img/Pvubnmvx_0f.png");
	var background = chrome.extension.getURL("img/bg.png");

	// MINIMALIST
		if (response.o.min)
			css += "body { background: url(\"" + background + "\") repeat-x #222 !important; }"
				+ "#contentCol { background-color: #f2f2f2; box-shadow: 0 0 10px rgba(0,0,0,.35), 0 0 20px rgba(0,0,0,.35), 0 0 35px rgba(0,0,0,.35), 0 0 55px rgba(0,0,0,.35); }"
				+ ".hasLeftCol #contentCol, .hasLeftCol #mainContainer { border: none; }"
				+ "#leftCol, #leftCol * { z-index: -9999; }"
				+ "#blueBar { box-shadow: 0 0 5px rgba(0,0,0,.45), 0 0 10px rgba(0,0,0,.45), 0 0 25px rgba(0,0,0,.45) !important; }"
				+ "#pageLogo a { background-image: none !important; font-family: 'Raleway', sand-serif; }"
	// GENERAL
		if (response.o.trans)
			css += "*:not(#zoom):not(#zoom *) { -webkit-transition-property: background-color, border-color, color, opacity, width, top; -webkit-transition-duration: .15s; -webkit-transition-timing-function: ease-out; }\n";
		if (response.o.footer)
			css += "#footerContainer { display: none; }\n";
	// THEME
		if (response.o.fullW) {
			css += ".fbx #globalContainer { width: auto !important; margin: auto 7px !important; }\n";
			css += ".fbx .commentable_item .uiUfi, .fbx #fbf-page-head-container { width: auto !important; }\n";
			css += "#rightCol { position: absolute; top: 41px; right: 10px;}\n";
			css += "#contentArea { width: auto !important; padding-right: 290px !important; }\n";
			css += ".uiUfiAddComment textarea, .uiUfiAddComment .commentBtn { float: none; margin-right: 10px; }\n";
			if (response.o.t_float || response.o.min)
				css += ".fbx #pageHead { width:" + (window.innerWidth - 31) + "px !important; }\n";
			if (response.o.sF)
				css += "#rightCol { position: fixed;}\n";
		}
		if (response.o.backC) {
			css += "body, .hasLeftCol #pageFooter, #contentCurve, #chatFriendsOnline > div:nth-child(2), #contentCol { background: " + response.o.backCLR + " !important;  background-color: " + response.o.backCLR + " !important; }\n";
			css += ".uiSideNav .item, .uiSideNav .subitem { border-bottom: 1px solid transparent; }\n";
			css += "#chatFriendsOnline input { background-color: #fff; }\n";
		}
		if (response.o.accent) {
			css += ".uiComposerWhiteMessageBox .uiComposerMessageBox { background: none; }\n";
			css += "#blueBar { background: " + response.o.accentCLR + " !important; background-color: " + response.o.accentCLR + " !important; }\n";
			css += "#pageLogo > a, .jewel > a { background-image: url( " + toolbar + " ) !important; background-color: transparent !important; }\n";
			css += "#pageNav a:hover, #pageLogo > a:hover, .jewel:not(.openToggler) > a:hover { background-color: rgba(255,255,255,.15) !important; }\n";
			css += ".hasLeftCol #contentCol, .hasLeftCol #contentCurve, .hasLeftCol #mainContainer, #navSearch .uiTypeahead, #navSearch .uiTypeahead .wrap, #headNav, .fbNubFlyoutTitlebar { border-color: rgba(0,0,0,.5) !important;}\n";
			css += "#headNav, .fbNubFlyoutTitlebar { background: " + lighten(response.o.accentCLR, 35, 1) + " !important; background-color: " + lighten(response.o.accentCLR, 35, 1) + " !important; }\n";
			css += "#jewelBoxNotif span.blueName, #jewelBoxMail div.author, a, input[name *= 'view_all'], .UIActionLinks_bottom a, .UIActionLinks_bottom button.as_link, .UIActionLinks_left, .UIActionLinks_right, .feedback_toggle_link .feedback_show_link, .feedback_toggle_link .feedback_hide_link, .UIActionLinks .comment_link, .UIActionLinks .comment_link input, button.as_link, .GBThreadRow .line a.link, #navAccount ul a, #navAccount ul .logoutButton input { color: " + response.o.accentCLR + "; }\n";
			css += "#jewelCase .jewelHighlightItem li a:hover,#jewelCase .jewelHighlightItem li a:active,#jewelCase .jewelHighlightItem li a:focus, #navAccount ul a:hover, #navAccount ul .logoutButton input:hover { background: " + lighten(response.o.accentCLR, 0, .65) + " !important; background-color: " + lighten(response.o.accentCLR, 0, .65) + " !important; }\n";
			css += "#pageNav > li > a { color: #fff; }\n";
			css += ".uiHeaderSection, .uiSideHeader, #jewelCase .jewelHighlightItem li a:hover,#jewelCase .jewelHighlightItem li a:active,#jewelCase .jewelHighlightItem li a:focus, #navAccount ul a:hover, #navAccount ul .logoutButton input:hover { border-color: " + lighten(response.o.accentCLR, 0, .15) + " !important; }\n";
			css += ".uiHeaderSection, .uiSideHeader, .uiSideNav .selectedItem .item, .uiSideNav .selectedItem .item:hover, .uiSideNav ul .selectedItem .subitem, .uiSideNav ul .selectedItem .subitem:hover { background: " + lighten(response.o.accentCLR, 0, .15) + " !important; background-color: " + lighten(response.o.accentCLR, 0, .15) + " !important; }\n";
			css += ".uiSideNav .item:hover { background: " + lighten(response.o.accentCLR, 0, .05) + " !important; background-color: " + lighten(response.o.accentCLR, 0, .05) + " !important; }\n";
			css += ".uiUfi .ufiItem { background: " + lighten(response.o.accentCLR, 0, .1) + " !important; background-color: " + lighten(response.o.accentCLR, 0, .1) + " !important; border-color: " + lighten(response.o.accentCLR, 0, .2) + " !important; }\n";
			css += ".uiUfi .ufiNub i { background: transparent !important; }\n";
		}
		if (response.o.high)
			css += ".uiUnifiedStory:hover { background-color: " + lighten(response.o.accentCLR, 0, .05) + " !important; }\n";
	// TOOLBAR
		if (response.o.tbarH) {
			css += "#tbarToggle { background: rgb(0,0,0,0); height: 10px !important; cursor: pointer !important;}\n";
			css += "#tbarToggle:hover { background: -webkit-gradient(linear, left bottom, right bottom, color-stop(.05, rgba(0,0,0,0)), color-stop(.35, rgba(0,0,0,.5)), color-stop(.65, rgba(0,0,0,.5)), color-stop(.95, rgba(0,0,0,0))); }\n";
			css += "#blueBar[min ~= 'hideT'] { height: 0px !important; }\n";
			css += "#globalContainer > [min ~= 'hideT'] { height: 0px !important; opacity: 0; overflow: hidden; }\n";
			css += "#globalContainer > div [min ~= 'hideT'] { border-top: 1px solid; }\n";
			css += "#pageHead { padding-top: 0; }\n";
		}
		if (response.o.t_float || response.o.min) {
			css += "#blueBar { position: fixed !important; box-shadow: 0 0 15px rgba(0,0,0,.25),  0 0 10px rgba(0,0,0,.25); z-index: 9998 !important; }\n";
			css += "#globalContainer > div:first-child { position: fixed; z-index: 9999; width: inherit;}\n";
			css += "#content { padding-top: 41px; }\n";
		}
		if (response.o.logo)
			css += "#pageLogo { visibility: hidden; }\n";
		if (response.o.t_friends)
			css += "#requestsWrapper { display: none; }\n";
		if (response.o.t_messages)
			css += "#mailWrapper { display: none; }\n";
		if (response.o.t_notifications)
			css += "#notificationsWrapper { display: none; }\n";
		if (response.o.t_search)
			css += "#navSearch { display: none; }\n";
		if (response.o.t_home)
			css += "#pageNav > li:nth-child(2) { display: none; }\n";
		if (response.o.t_profile)
			css += "#pageNav > li:nth-child(3) { display: none; }\n";
	// NAVIGATION
		if (response.o.navH) {
			css += "#navToggle { float: left; z-index: 999; background-color: rgba(0,0,0,0); width: 10px !important; height: 600px !important; cursor: pointer !important; }\n";
			css += "#navToggle:hover { background: -webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,.15)), to(rgba(0,0,0,0))); }\n";
			if (response.o.navF || response.o.min)
				css += "#leftCol { width: 169px !important; margin-left: 10px; }\n";
			else  css += "#leftCol { width: 169px !important; }\n";
			css += ".fbxWelcomeBoxName { width: 102px !important; }\n";
			css += "[min ~= 'hideN'] .uiUfiAddComment textarea, [min ~= 'hideN']  .uiUfiAddComment .commentBtn { float: none; margin-right: 10px; }\n";
			css += "[min ~= 'hideN'] .uiUfi, [min ~= 'hideN'] .fbx #fbf-page-head-container { width: auto !important; }\n";
		}
		if (response.o.navF || response.o.min)
			css += "#leftCol { position: fixed; top: 41px; }\n";
		if (response.o.n_profile)
			css += "#pagelet_main_nav { display: none; }\n";
		if (response.o.n_news)
			css += "#pagelet_main_nav li:nth-child(1) { display: none; }\n";
		if (response.o.n_messages)
			css += "#pagelet_main_nav li:nth-child(2) { display: none; }\n";
		if (response.o.n_events)
			css += "#pagelet_main_nav li:nth-child(3) { display: none; }\n";
		if (response.o.n_friends)
			css += "#pagelet_main_nav li:nth-child(4) { display: none; }\n";
		if (response.o.n_groups)
			css += "#pagelet_groups_nav, #pagelet_connection_search_nav { display: none; }\n";
		if (response.o.n_more)
			css += ".navMoreLess { display: none; }\n";
		if (response.o.n_chat)
			css += "#pagelet_friends_online { display: none; }\n";
		if (response.o.n_search)
			css += "#chatFriendsOnline > div:nth-child(2) { display: none; }\n";
	// SIDEBAR
		if (response.o.s_all) {
			css += "#rightCol { display: none; }\n";
			css += "#contentArea, .uiUfi { width: 100% !important; }\n";
			css += "#contentCol { padding-right: 40px }\n";
		}
		if ((response.o.sF || response.o.min) && !response.o.fullW)
			css += "#rightCol { position: fixed; top: 41px; margin-left: 535px; }\n";
		if (response.o.s_events)
			css += "#pagelet_eventbox { display: none; }\n";
		if (response.o.s_find)
			css += "#pagelet_connectbox { display: none; }\n";
		if (response.o.s_requests)
			css += "#pagelet_reqbox { display: none; }\n";
		if (response.o.s_pokes)
			css += "#pagelet_pokebox, #pagelet_netego_pokes { display: none; }\n";
		if (response.o.s_recommended)
			css += "#pagelet_netego { display: none; }\n";
		if (response.o.s_people)
			css += "# { display: none; }\n";
		if (response.o.s_ads)
			css += "#pagelet_adbox, #pagelet_ego_pane { display: none; }\n";
	// MAIN
		if (response.o.full)
			css += "abbr.timestamp:not(.full) { display:none; }\n";
		if (response.o.idle)
			css += "#fbChatBuddyListParent a.idle, #chatFriendsOnline li.chatIdle { display: none; }\n";
		if (response.o.bottom) {
			css += "#fbDockChatBuddylistNub { display: none; }\n";
			css += ".fbDockWrapperRight .rNubContainer { background: none !important; border-color: transparent !important; }\n";
		}
		if (response.o.zoom) {
			css += "#zoom { position: absolute; min-height:50px; min-width:50px; background:#FFF url(data:image/gif;base64,R0lGODlhEAALALMMAOXp8a2503CHtOrt9L3G2+Dl7vL0+J6sy4yew1Jvp/T2+e/y9v///wAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFCwAMACwAAAAAEAALAAAEK5DJSau91KxlpObepinKIi2kyaAlq7pnCq9p3NZ0aW/47H4dBjAEwhiPlAgAIfkECQsADAAsAAAAAAQACwAABA9QpCQRmhbflPnu4HdJVAQAIfkECQsADAAsAAAAABAACwAABDKQySlSEnOGc4JMCJJk0kEQxxeOpImqIsm4KQPG7VnfbEbDvcnPtpINebJNByiTVS6yCAAh+QQJCwAMACwAAAAAEAALAAAEPpDJSaVISVQWzglSgiAJUBSAdBDEEY5JMQyFyrqMSMq03b67WY2x+uVgvGERp4sJfUyYCQUFJjadj3WzuWQiACH5BAkLAAwALAAAAAAQAAsAAAQ9kMlJq73hnGDWMhJQFIB0EMSxKMoiFcNQmKjKugws0+navrEZ49S7AXfDmg+nExIPnU9oVEqmLpXMBouNAAAh+QQFCwAMACwAAAAAEAALAAAEM5DJSau91KxlpOYSUBTAoiiLZKJSMQzFmjJy+8bnXDMuvO89HIuWs8E+HQYyNAJgntBKBAAh+QQFFAAMACwMAAIABAAHAAAEDNCsJZWaFt+V+ZVUBAA7) no-repeat center center; box-shadow: 0 0 10px rgba(0,0,0,.35), 0 0 20px rgba(0,0,0,.35), 0 0 35px rgba(0,0,0,.35), 0 0 55px rgba(0,0,0,.35); z-index: 99999; padding: 10px; }\n";
			css += "#zoom div { display: block; position: absolute; top: 10px; left: 0; width: 100%; background-color: rgba(255,255,255,.75); font-weight: bold; }\n";
			css += "#zoom div span { display: block; margin: 10px 20px; }\n";
		}
		if (response.o.f_share)
			css += "#pagelet_home_stream .UIActionLinks.UIActionLinks_bottom a { display: none; }\n";
		if (response.o.f_tr)
			css += "#pagelet_stream_header .uiHeaderActions { display: none; }\n";
		if (response.o.f_app)
			css += "#pagelet_home_stream [data-ft *= 'sty\":237'] { display: none; }\n";
		if (response.o.f_event)
			css += "#pagelet_home_stream [data-ft *= 'sty\":1'], #pagelet_home_stream [data-ft *= 'sty\":38'], #pagelet_home_stream [data-ft *= 'sty\":178'] { display: none; }\n";
		if (response.o.f_friend)
			css += "#pagelet_home_stream [data-ft *= 'sty\":8'], #pagelet_home_stream [data-ft *= 'sty\":12'] { display: none; }\n";
		if (response.o.f_group)
			css += "#pagelet_home_stream [data-ft *= 'sty\":4'], #pagelet_home_stream [data-ft *= 'sty\":21'] { display: none; }\n";
		if (response.o.f_like)
			css += "#pagelet_home_stream [data-ft *= 'sty\":161'], #pagelet_home_stream [data-ft *= 'sty\":238'] { display: none; }\n";
		if (response.o.f_link)
			css += "#pagelet_home_stream [data-ft *= 'sty\":5'], #pagelet_home_stream [data-ft *= 'sty\":263'] { display: none; }\n";
		if (response.o.f_note)
			css += "#pagelet_home_stream [data-ft *= 'sty\":66'] { display: none; }\n";
		if (response.o.f_photo)
			css += "#pagelet_home_stream [data-ft *= 'sty\":6'], #pagelet_home_stream [data-ft *= 'sty\":7'], #pagelet_home_stream [data-ft *= 'sty\":65'], #pagelet_home_stream [data-ft *= 'sty\":247'] { display: none; }\n";
		if (response.o.f_place)
			css += "#pagelet_home_stream [data-ft *= 'sty\":285'] { display: none; }\n";
		if (response.o.f_profile)
			css += "#pagelet_home_stream [data-ft *= 'sty\":60'], #pagelet_home_stream [data-ft *= 'sty\":259'] { display: none; }\n";
		if (response.o.f_relationship)
			css += "#pagelet_home_stream [data-ft *= 'sty\":10'] { display: none; }\n";
		if (response.o.f_status)
			css += "#pagelet_home_stream [data-ft *= 'sty\":11'], #pagelet_home_stream [data-ft *= 'sty\":46'] { display: none; }\n";
		if (response.o.f_video)
			css += "#pagelet_home_stream [data-ft *= 'sty\":3'], #pagelet_home_stream [data-ft *= 'sty\":128'], #pagelet_home_stream [data-ft *= 'sty\":130'] { display: none; }\n";
		if (response.o.f_wall)
			css += "#pagelet_home_stream [data-ft *= 'sty\":56'], #pagelet_home_stream [data-ft *= 'sty\":273'] { display: none; }\n";		
	// CUSTOM
		if (response.o.customCSS)
			css += response.o.customCSSval;

	//---- INJECT CSS ----//
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		var node = document.createElement("style");
		node.type = "text/css";
		node.appendChild(document.createTextNode(css));
		heads[0].appendChild(node);
	}
	//---- END INJECT CSS ----//

	//---- HELPER METHODS ----//
	function HexToR(h) { return parseInt((cutHex(h)).substring(0,2),16) }
	function HexToG(h) { return parseInt((cutHex(h)).substring(2,4),16) }
	function HexToB(h) { return parseInt((cutHex(h)).substring(4,6),16) }
	function cutHex(h) { return (h.charAt(0) == "#") ? h.substring(1,7) : h }
	function lighten(one, by, o) {
		if (one.indexOf('rgb') == -1) {
			var r = HexToR(one) + by;
			var g = HexToG(one) + by;
			var b = HexToB(one) + by;
		} else {
			var rgb = one.split(",");
			var r = parseInt(rgb[0].substring(4)) + by;
			var g = parseInt(rgb[1]) + by;
			var b = parseInt(rgb[2].substring(0,rgb[2].indexOf("\)"))) + by;
		}
		if (r > 255)
			r = 255;
		if (g > 255)
			g = 255;
		if (b > 255)
			b = 255;
		return "rgba(" + r + "," + g + "," + b + "," + o + ")";
	}
	//---- HELPER METHODS ----//
});