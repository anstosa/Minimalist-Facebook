// ==UserScript== 
// @name Facebook Favicon Alerts 
// @description Alerts you to the number of notifications in Facebook. 
// @version 1.0 
// @date 2009-09-07 
// @author Peter Wooley 
// @namespace http://peterwooley.com 
// @include http://facebook.com/* 
// @include http://*.facebook.com/* 
// @include https://facebook.com/* 
// @include https://*.facebook.com/* 
// @exclude *facebook.com/logout.php* 
// @exclude *facebook.com/*logged_out* 
// @exclude *facebook.com/ 
// ==/UserScript== 
//Updated by Matthew Warman to work with new facebook and chat

chrome.extension.sendRequest({elements: "o"}, function(response) {
	if (response.o.favicon) {
		// Wait for the window to load to try and initialize 
		window.addEventListener('load', function() { 
			new FacebookFaviconAlerts; 
		}, true);

		function FacebookFaviconAlerts() { 
			var self = this; 

			this.construct = function() { 
				this.pixelMaps = { 
					icons: { 
						'unread': 
							[["rgba(0, 0, 0, 0)","rgba(0, 0, 0, 0)","rgba(0, 0, 0, 0)","rgba(0, 0, 0, 0)","rgba(0, 0, 0, 0)","rgba(0, 0, 0, 0)","rgba(0, 0, 0, 0)","rgba(0, 0, 0, 0)","rgba(0, 0, 0, 0)","rgba(0, 0, 0, 0)","rgba(0, 0, 0, 0)","rgba(0, 0, 0, 0)","rgba(0, 0, 0, 0)","rgba(0, 0, 0, 0)","rgba(0, 0, 0, 0)","rgba(0, 0, 0, 0)"],["rgba(0, 0, 0, 0)","rgba(97, 121, 172, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(97, 121, 172, 1)","rgba(0, 0, 0, 0)"],["rgba(0, 0, 0, 0)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(0, 0, 0, 0)"],["rgba(0, 0, 0, 0)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(96, 120, 171, 1)","rgba(235, 238, 244, 1)","rgba(255, 255, 255, 1)","rgba(255, 255, 255, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(0, 0, 0, 0)"],["rgba(0, 0, 0, 0)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(235, 238, 244, 1)","rgba(255, 255, 255, 1)","rgba(255, 255, 255, 1)","rgba(255, 255, 255, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(0, 0, 0, 0)"],["rgba(0, 0, 0, 0)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(255, 255, 255, 1)","rgba(255, 255, 255, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(0, 0, 0, 0)"],["rgba(0, 0, 0, 0)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(255, 255, 255, 1)","rgba(255, 255, 255, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(0, 0, 0, 0)"],["rgba(0, 0, 0, 0)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(255, 255, 255, 1)","rgba(255, 255, 255, 1)","rgba(255, 255, 255, 1)","rgba(255, 255, 255, 1)","rgba(255, 255, 255, 1)","rgba(255, 255, 255, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(0, 0, 0, 0)"],["rgba(0, 0, 0, 0)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(235, 238, 244, 1)","rgba(235, 238, 244, 1)","rgba(255, 255, 255, 1)","rgba(255, 255, 255, 1)","rgba(235, 238, 244, 1)","rgba(235, 238, 244, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(0, 0, 0, 0)"],["rgba(0, 0, 0, 0)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(255, 255, 255, 1)","rgba(255, 255, 255, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(0, 0, 0, 0)"],["rgba(0, 0, 0, 0)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(255, 255, 255, 1)","rgba(255, 255, 255, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(0, 0, 0, 0)"],["rgba(0, 0, 0, 0)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(255, 255, 255, 1)","rgba(255, 255, 255, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(0, 0, 0, 0)"],["rgba(0, 0, 0, 0)","rgba(69, 98, 158, 1)","rgba(109, 132, 180, 1)","rgba(109, 132, 180, 1)","rgba(109, 132, 180, 1)","rgba(109, 132, 180, 1)","rgba(109, 132, 180, 1)","rgba(109, 132, 180, 1)","rgba(109, 132, 180, 1)","rgba(255, 255, 255, 1)","rgba(255, 255, 255, 1)","rgba(109, 132, 180, 1)","rgba(109, 132, 180, 1)","rgba(109, 132, 180, 1)","rgba(69, 98, 158, 1)","rgba(0, 0, 0, 0)"],["rgba(0, 0, 0, 0)","rgba(69, 98, 158, 1)","rgba(109, 132, 180, 1)","rgba(109, 132, 180, 1)","rgba(109, 132, 180, 1)","rgba(109, 132, 180, 1)","rgba(109, 132, 180, 1)","rgba(109, 132, 180, 1)","rgba(109, 132, 180, 1)","rgba(255, 255, 255, 1)","rgba(255, 255, 255, 1)","rgba(109, 132, 180, 1)","rgba(109, 132, 180, 1)","rgba(109, 132, 180, 1)","rgba(69, 98, 158, 1)","rgba(0, 0, 0, 0)"],["rgba(0, 0, 0, 0)","rgba(97, 121, 172, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(59, 89, 152, 1)","rgba(97, 121, 172, 1)","rgba(0, 0, 0, 0)"],["rgba(0, 0, 0, 0)","rgba(0, 0, 0, 0)","rgba(0, 0, 0, 0)","rgba(0, 0, 0, 0)","rgba(0, 0, 0, 0)","rgba(0, 0, 0, 0)","rgba(0, 0, 0, 0)","rgba(0, 0, 0, 0)","rgba(0, 0, 0, 0)","rgba(0, 0, 0, 0)","rgba(0, 0, 0, 0)","rgba(0, 0, 0, 0)","rgba(0, 0, 0, 0)","rgba(0, 0, 0, 0)","rgba(0, 0, 0, 0)","rgba(0, 0, 0, 0)"]] 
					}, 
					numbers: { 
						0: [ 
							[1,1,1], 
							[1,0,1], 
							[1,0,1], 
							[1,0,1], 
							[1,1,1] 
						], 
						1: [ 
							[0,1,0], 
							[1,1,0], 
							[0,1,0], 
							[0,1,0], 
							[1,1,1] 
						], 
						2: [ 
							[1,1,1], 
							[0,0,1], 
							[1,1,1], 
							[1,0,0], 
							[1,1,1] 
						], 
						3: [ 
							[1,1,1], 
							[0,0,1], 
							[0,1,1], 
							[0,0,1], 
							[1,1,1] 
						], 
						4: [ 
							[0,0,1], 
							[0,1,1], 
							[1,0,1], 
							[1,1,1], 
							[0,0,1] 
						], 
						5: [ 
							[1,1,1], 
							[1,0,0], 
							[1,1,1], 
							[0,0,1], 
							[1,1,1] 
						], 
						6: [ 
							[0,1,1], 
							[1,0,0], 
							[1,1,1], 
							[1,0,1], 
							[1,1,1] 
						], 
						7: [ 
							[1,1,1], 
							[0,0,1], 
							[0,0,1], 
							[0,1,0], 
							[0,1,0] 
						], 
						8: [ 
							[1,1,1], 
							[1,0,1], 
							[1,1,1], 
							[1,0,1], 
							[1,1,1] 
						], 
						9: [ 
							[1,1,1], 
							[1,0,1], 
							[1,1,1], 
							[0,0,1], 
							[1,1,0] 
						], 
						'+': [ 
							[0,0,0], 
							[0,1,0], 
							[1,1,1], 
							[0,1,0], 
							[0,0,0] 
						], 
						'k': [ 
							[1,0,1], 
							[1,1,0], 
							[1,1,0], 
							[1,0,1], 
							[1,0,1] 
						] 
					} 
				}; 

				this.timer = setInterval(this.poll, 10000); 
				this.poll(); 

				return true; 
			} 

			this.drawUnreadCount = function(unread) { 
				if(!self.textedCanvas) { 
					self.textedCanvas = []; 
				} 

				if(!self.textedCanvas[unread]) { 
					var iconCanvas = self.getUnreadCanvas(); 
					var textedCanvas = document.createElement('canvas'); 
					textedCanvas.height = textedCanvas.width = iconCanvas.width; 
					var ctx = textedCanvas.getContext('2d'); 
					ctx.drawImage(iconCanvas, 0, 0); 

					ctx.fillStyle = "#eeeeee"; 
					ctx.strokeStyle = "#888888"; 
					ctx.strokeWidth = 1; 

					var count = unread.length; 
					if(count > 4) { 
						unread = "1k+"; 
						count = unread.length; 
					} 

					var bgHeight = self.pixelMaps.numbers[0].length; 
					var bgWidth = 0; 
					var padding = count < 4 ? 1 : 0; 
					var topMargin = 2; 

					for(var index = 0; index < count; index++) { 
						bgWidth += self.pixelMaps.numbers[unread[index]][0].length; 
						if(index < count-1) { 
							bgWidth += padding; 
						} 
					} 
					bgWidth = bgWidth > textedCanvas.width-4 ? textedCanvas.width-4 : bgWidth; 

					ctx.fillRect(textedCanvas.width-bgWidth-4,topMargin,bgWidth+4,bgHeight+4); 

					var digit; 
					var digitsWidth = bgWidth; 
					for(var index = 0; index < count; index++) { 
						digit = unread[index]; 

						if (self.pixelMaps.numbers[digit]) { 
							var map = self.pixelMaps.numbers[digit]; 
							var height = map.length; 
							var width = map[0].length; 

							ctx.fillStyle = "#000000"; 

							for (var y = 0; y < height; y++) { 
								for (var x = 0; x < width; x++) { 
									if(map[y][x]) { 
										ctx.fillRect(14- digitsWidth + x, y+topMargin+2, 1, 1); 
									} 
								} 
							} 

						digitsWidth -= width + padding; 
						} 
					}	

					ctx.strokeRect(textedCanvas.width-bgWidth-3.5,topMargin+.5,bgWidth+3,bgHeight+3); 

					self.textedCanvas[unread] = textedCanvas; 
				} 

				return self.textedCanvas[unread]; 
			} 
			this.getIcon = function() { 
				return self.getUnreadCanvas().toDataURL('image/png'); 
			}	
			this.getUnreadCanvas = function() { 
				if(!self.unreadCanvas) { 
					self.unreadCanvas = document.createElement('canvas'); 
					self.unreadCanvas.height = self.unreadCanvas.width = 16; 

					var ctx = self.unreadCanvas.getContext('2d'); 

					for (var y = 0; y < self.unreadCanvas.width; y++) { 
						for (var x = 0; x < self.unreadCanvas.height; x++) { 
							if (self.pixelMaps.icons.unread[y][x]) { 
								ctx.fillStyle = self.pixelMaps.icons.unread[y][x]; 
								ctx.fillRect(x, y, 1, 1); 
							} 
						} 
					} 
				} 

				return self.unreadCanvas; 
			} 
			this.getUnreadCount = function() { 
				return self.getSearchText(); 
			} 
			this.getUnreadCountIcon = function() { 
				var unread = self.getUnreadCount(); 
				return self.drawUnreadCount(unread + "").toDataURL('image/png'); 
			} 
			this.getSearchText = function() { 
				var ncount = 0; 
				var elements = new Array('requestsWrapper', 'mailWrapper', 'notificationsWrapper', 'fbDockChatTabs'); 
				for (ii = 0; ii < elements.length; ii++) { 
					element = document.getElementById(elements[ii]); 
					if (element) { 
						if( element.id != 'fbDockChatTabs') 
						{ 
							ncount += parseInt(element.childNodes[0].childNodes[0].textContent); 
						}else{ 
							var span = element.getElementsByClassName('numMessages '); 
							for (iii = 0; iii < span.length; iii++){ 
								ncount += parseInt(span[iii].textContent); 
							} 

						} 
					} 
				} 
				return ncount > 0 ? ncount : '';

			} 
			this.poll = function() { 
				if(self.getUnreadCount()) { 
					self.setIcon(self.getUnreadCountIcon()); 
				} else { 
					self.setIcon(self.getIcon()); 
				} 
			} 
			this.setIcon = function(icon) { 
				var head = document.getElementsByTagName("head")[0]; 
				var links = head.getElementsByTagName("link");

				if (links.length > 0 ) 
				{ 
					for (var i = 0; i < links.length; i++){ 
						if (links[i].rel == "shortcut icon"){	
							head.removeChild(links[i]); 
							var newIcon = document.createElement("link"); 
							newIcon.type = "image/x-icon"; 
							newIcon.rel = "shortcut icon"; 
							newIcon.href = icon; 
							return head.appendChild(newIcon); 
						}else if(links[i].href == icon){ 
							return; 

						} 
					} 
				}

			} 
			this.toString = function() { return '[object FacebookFaviconAlerts]'; } 

			return this.construct(); 
		}
	}
});