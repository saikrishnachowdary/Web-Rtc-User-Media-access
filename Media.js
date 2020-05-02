
var video = document.getElementById("videoElement");

if (navigator.mediaDevices.getUserMedia) {

  navigator.mediaDevices.getUserMedia({ 

  	audio :true,
  	video: true

  	 })
    .then(function (stream) {
      video.srcObject = stream;
    })
    .catch(function (error) {
      console.log("Something went wrong!");
    });
}

function stop(e){
	video.srcObject=null;
}

const canvas = window.canvas = document.querySelector('canvas');
 function snap() {
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
};
