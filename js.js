var video = document.getElementById("video");
video.width = 500;
video.controls = true;

function play() {
	if (video.paused) {
		video.play();
		video.controls = false;
	} else {
		video.pause();
		video.controls = true;
	}
}

