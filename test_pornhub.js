// NSFW
var ph = require("pornhub");
var Promise = require("bluebird");

var pornArr = [
	"http://www.pornhub.com/view_video.php?viewkey=922333579",
	"http://www.pornhub.com/view_video.php?viewkey=1017958649",
	"http://www.pornhub.com/view_video.php?viewkey=ph56438297f2daa",
];

Promise.each(pornArr, (url) => {
	return new Promise((resolve, reject) => { 
		ph.details(url, (err, details) => {
			console.log("-------- Detail ----------");
  		console.log(err, details);
			resolve();
		});
	});	
});
 
