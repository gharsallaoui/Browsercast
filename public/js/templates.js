this["AppTemplate"] = this["AppTemplate"] || {};
this["AppTemplate"]["reveal-demo"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"slides\">\r\n	<section>\r\n		<br />\r\n		<h2>Browsercast</h2>\r\n		<br /><br />\r\n		<p>The project aims to offer a web based slideshow composition tool with support for voice-over synchronization</p>\r\n		<div style=\"text-align: left; padding: 30px 100px\">\r\n		    <p>Features:</p>\r\n		    <ul>\r\n		        <li>slide editor</li>\r\n		        <li>perfect voice-over synchronization</li>\r\n		        <li>playback functions - play/stop/pause/resume</li>\r\n		        <li>presentations are index-able by search engines</li>\r\n		        <li>import and export</li>\r\n		    </ul>\r\n		</div>\r\n	</section>\r\n\r\n	<section>\r\n		<br>\r\n		<h2>The Editor</h2>\r\n		<br>\r\n		<br>\r\n		<p>Use the <b>HTML code editor</b> provided to edit slide content</p>\r\n		<p>You can <b>add</b> new vertical/horizontal slides or delete them</p>\r\n		<p>Basic support for HTML5 <b>contenteditable</b>. <b>Click on the slide!</b></p>\r\n		<p>Add an audiocast and synchronize it with the slides</p>\r\n		<p>try <a href=\"https://dl.dropboxusercontent.com/u/14586656/Browsercast/audio.ogg\">this</a> audio-file <span style=\"color: red\">(use the link)</span></p>\r\n		<br>\r\n		<p data-fragment-index=\"0\" class=\"fragment visible\">You can use fragments too!</p>\r\n	</section>\r\n\r\n	<section>\r\n		<br />\r\n		<h3> Preview mode </h3>\r\n		<br /><br />\r\n		<p style=\"color: red\"> This slide has no audio</p>\r\n		<p>Navigate with <b>arrows</b></p>\r\n		<p><b>ESC</b> to go to overview mode</p>\r\n		<p>Press <b>S or R</b> to Pause/Resume the presentation</p>\r\n		<p  style=\"color: red\"> Next slides are synchronized with audio </p>\r\n	</section>\r\n\r\n	<section>\r\n		<section data-bc-start=\"0.00\">\r\n			<img src=\"https://dl.dropboxusercontent.com/u/14586656/Browsercast/haiku.jpg\" />\r\n			<p>The Japanese wrote haikus...</p>\r\n		</section>\r\n\r\n		<section data-bc-start=\"2.44\">\r\n			<img src=\"demo/images/sonnet.jpg\" />\r\n			<p>Shakespeare wrote sonnets...</p>\r\n		</section>\r\n	</section>\r\n	\r\n	<section data-bc-start=\"4.90\">\r\n		<img src=\"demo/images/worst-powerpoint.jpg\" />\r\n		<br/>\r\n		<p>And we... write PowerPoint</p>\r\n	</section>\r\n\r\n	<section data-bc-start=\"7.72\">\r\n		<img src=\"demo/images/tufte.jpg\" />\r\n		<p>A lot of people blame PowerPoint for bad presentations...</p>\r\n	</section>\r\n\r\n	<section data-bc-start=\"12.20\">\r\n		<img src=\"demo/images/fountain-pen.jpg\" />\r\n		<p>...but that's like blaming fountain pens for bad poetry.</p>\r\n	</section>\r\n\r\n	<section data-bc-start=\"16.20\">\r\n		<div style=\"vertical-align: middle\">\r\n			<img src=\"demo/images/powerpoint.png\" />\r\n			<img src=\"demo/images/libreoffice.png\" />\r\n		</div>\r\n		<p>The <em>real</em> problem with tools like PowerPoint...</p>\r\n		<div class=\"fragment\" data-bc-start=\"19.61\" data-bc-end=\"22\">\r\n			<img src=\"demo/images/internet-cat.jpg\" />\r\n			<p>...is that they aren't web-friendly.</p>\r\n		</div>\r\n	</section>\r\n</div>";
  });;
this["AppTemplate"] = this["AppTemplate"] || {};
this["AppTemplate"]["reveal-export"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<!doctype html>\r\n<html>\r\n<head>\r\n	<meta charset=\"UTF-8\">\r\n	<title>";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</title>\r\n\r\n	<meta name=\"description\" content=\"";
  if (helper = helpers.description) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.description); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" />\r\n	<meta name=\"author\" content=\"";
  if (helper = helpers.author) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.author); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" />\r\n\r\n	<!-- libs stylesheets -->\r\n	<link rel=\"stylesheet\" href=\"js/reveal/css/theme/default.css\">\r\n	<link rel=\"stylesheet\" href=\"js/reveal/css/reveal.min.css\">\r\n	<link rel=\"stylesheet\" href=\"js/browsercast/browsercast.css\">\r\n	<link rel=\"stylesheet\" href=\"js/browsercast/timeline/timeline.css\">\r\n	<link rel=\"stylesheet\" href=\"js/browsercast/timeline/glyphicon.css\">\r\n	\r\n</head>\r\n\r\n<!-- Body -->\r\n<body>\r\n	<div id=\"browsercast\">\r\n		<div id=\"bc-audio\">\r\n			<code>\r\n				";
  if (helper = helpers.audio) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.audio); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\r\n			</code>\r\n		</div>\r\n	</div>\r\n	<div class=\"reveal\">\r\n		<div class=\"slides\">\r\n			";
  if (helper = helpers.slides) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.slides); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n		</div>\r\n	</div>\r\n\r\n	<script type=\"text/javascript\" src=\"js/reveal/lib/js/head.min.js\"></script>\r\n	<script type=\"text/javascript\" src=\"js/reveal/js/reveal.js\"></script>\r\n	<script type=\"text/javascript\" src=\"js/browsercast/browsercast-reveal.js\"></script>\r\n	<script type=\"text/javascript\" src=\"js/browsercast/timeline/EventEmitter.js\"></script>\r\n	<script type=\"text/javascript\" src=\"js/browsercast/timeline/timeline.js\"></script>\r\n	<script type=\"text/javascript\" src=\"js/init.js\"></script>\r\n</body>\r\n</html>";
  return buffer;
  });;
this["AppTemplate"] = this["AppTemplate"] || {};
this["AppTemplate"]["sync-panel"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"controls\">\r\n	<div id=\"load-audio\" class=\"button\">\r\n		<span class=\"glyphicon glyphicon-music\"> </span>\r\n		<div class=\"info\"> Add audio </div>\r\n		<div id=\"load-audio-body\" class=\"body\">\r\n			<input id=\"load-audio-source\" type=\"text\" placeholder=\"audio url\">\r\n			<div id=\"load-audio-ok\"> \r\n				<span class=\"glyphicon glyphicon-ok\"></span>\r\n			</div>\r\n			<!-- TODO: bug => hide when error -->\r\n			<audio id=\"load-audio-preview\" preload controls> </audio>\r\n			<div class=\"state\">\r\n				<div class=\"loading\"> Loading </div>\r\n				<div class=\"error\"> Error loading resource. Check again </div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n	<div id=\"sync-save\" class=\"button\"> \r\n		<span class=\"glyphicon glyphicon-ok\"></span>\r\n		<span>Save sync</span>\r\n		<div class=\"info\">\r\n			saving...\r\n		</div>\r\n	</div>\r\n	<div id=\"sync-reset\" class=\"button\">\r\n		<span class=\"glyphicon glyphicon-repeat\"></span>\r\n		<span>Reset sync</span>\r\n	</div>\r\n	<div class=\"button totorial\">\r\n		<span class=\"glyphicon glyphicon-exclamation-sign\"></span>\r\n		<div class=\"info\">\r\n			During playback press <b class=\"highlight\">T</b> to add a new transition point (advance to the next slide or fragment) </br>\r\n			You may delete a specific event by <b class=\"highlight\">hovering</b> over it and then press the delete button that appears </br>\r\n			<b class=\"highlight\">Save</b> : saves the audio synchronisation into the presentation </br>\r\n			<b class=\"highlight\">Reset</b> : resets the synchronisation process. Does not affect the presentation </br>\r\n		</div>\r\n	</div>\r\n</div>\r\n\r\n<div id=\"sync-area\">\r\n	<audio id=\"sync-audio-source\" preload> </audio>\r\n	<div id=\"sync-timeline\"></div>\r\n</div>";
  });;
this["AppTemplate"] = this["AppTemplate"] || {};
this["AppTemplate"]["download-panel"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"properties\">\r\n	<div>\r\n		<label>Title</label>\r\n		<input type=\"text\" class=\"title\" placeholder=\"Browsercast\" />\r\n	</div>\r\n	<div>\r\n		<label>Author</label>\r\n		<input type=\"text\" class=\"author\" placeholder=\"Browsercast\" />\r\n	</div>\r\n	<div>\r\n		<label>Description</label>\r\n		<textarea class=\"description\"></textarea>\r\n	</div>\r\n</div>\r\n<div class=\"info\">\r\n	<div class=\"text\">\r\n		Downloading resources: <span class=\"percentage\"></span>\r\n	</div>\r\n	<progress class=\"progress\" max=\"100\" value=\"0\"></progress>\r\n</div>\r\n<div class=\"download-btn button\">Download</div>\r\n";
  });;
this["AppTemplate"] = this["AppTemplate"] || {};
this["AppTemplate"]["import-panel"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"info\"> Paste the HTML source of a reveal.js presentation below to import all contained slides. </div>\r\n<div id=\"import-editor\"></div>\r\n<div id=\"import-info\">\r\n	<span class=\"glyphicon glyphicon-ok\"></span>\r\n	<div id=\"import-slides-count\"></div>\r\n	<div id=\"import-slides\" class=\"button import\"> import </div>\r\n</div>";
  });;