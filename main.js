var SpeechRecognition = window.webkitSpeechRecognition;
var Recogniton = new SpeechRecognition();

function Start() {
   document.getElementById("textbox").innerHTML = "";
   Recogniton.start();
}

Recogniton.onresult = function (event){

    console.log(event);
    
var Content = event.results[0][0].transcript;
document.getElementById("textbox").innerHTML = Content;

 if (Content == "selfie") {
    speech();
 }
}

function speech(){
 
    var synt = window.speechSynthesis;

    var speech_data = "taking your selfie in 5 seconds";

    var utterthis = new SpeechSynthesisUtterance(speech_data);

    synt.speak(utterthis);

    Webcam.attach(camera);

    setTimeout(function()
{
    img_id = "selfie1";
    take_snapshot();
    speech_data = "Taking your next Selfie in 10 seconds";
    var utterThis = new SpeechSynthesisUtterance (speech_data);
    synt.speak(utterThis);
}, 5000);

setTimeout(function()
{
    img_id = "selfie2";
    take_snapshot();
    speech_data = "Taking your next Selfie in 15 seconds";
    var utterThis = new SpeechSynthesisUtterance (speech_data);
    synt.speak(utterThis);
}, 10000);

setTimeout(function()
{
    img_id = "selfie3";
    take_snapshot();
}, 15000);
}


Webcam.set({
    width:360,
    height:150,
    image_format:'png',
    image_quality:90
});

camera = document.getElementById("camera");
 
function take_snapshot(){

console.log(img_id);


Webcam.snap(function(data_uri) {
 if(img_id=="selfie1"){
     document.getElementById("result1").innerHTML = '<img id-"selfie1" src="'+data_uri+'"/>';
 }
     if(img_id=="selfie2"){
document.getElementById("result2").innerHTML = '<img id-"selfie2" src="'+data_uri+'"/>';
}
if(img_id=="selfie3"){
document.getElementById("result3").innerHTML = '<img id="selfie3" src="'+data_uri+'"/>';
}
});
}


