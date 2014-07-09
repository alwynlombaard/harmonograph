(function (global) {
	if (!Array.prototype.indexOf) {
		Array.prototype.indexOf = function(obj, start) {
		  var i, j;
		  i = start || 0;
		  j = this.length;
		  while (i < j) {
			if (this[i] === obj) {
			  return i;
			}
			i++;
		  }
		  return -1;
		};
	}
	if(!global.JustCauses) { global.JustCauses = {}; };
	var JustCauses = global.JustCauses;
	
	if(!JustCauses.processedScripts) { JustCauses.processedScripts = []; };
	var processedScripts = JustCauses.processedScripts;
	
	if(!JustCauses.styleTags) { JustCauses.styleTags = []; };
	var styleTags = JustCauses.styleTags;
	
	var scriptTags = document.getElementsByTagName('script');
	var thisRequestUrl = 'https://raw.githubusercontent.com/alwynlombaard/harmonograph/gh-pages/just-causes-1.0.0.js';
	
	for(var i = 0; i < scriptTags.length; i++) {
    var scriptTag = scriptTags[i];
	
	if (scriptTag.src === thisRequestUrl && processedScripts.indexOf(scriptTag) < 0) {
		processedScripts.push(scriptTag);
		if(styleTags.length === 0) {
			var styleTag = document.createElement("link");
			styleTag.rel = "stylesheet";
			styleTag.type = "text/css";
			styleTag.href =  "https://raw.githubusercontent.com/alwynlombaard/harmonograph/gh-pages/just-causes-1.0.0.css";
			styleTag.media = "all";
			document.getElementsByTagName('head')[0].appendChild(styleTag);
			styleTags.push(styleTag);
      }
	  
	  var div = document.createElement('div');
      div.id = 'just-causes-id';
	  div.className = 'just-causes';
	  
	  scriptTag.parentNode.insertBefore(div, scriptTag);
	  
	  div.innerHTML = 'hello from just causes';

	}
	
})(this);
