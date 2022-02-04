prediction_1 = "";
prediction_2 = "";

Webcam.set({
    width:300,
    height:300,
    image_format: 'jpeg',
    jpeg_quality:90
});

camera = document.getElementById("camera");

Webcam.attach(camera);

function capture(){
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '">';
    });
}

console.log("ml5 version:",ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/4fqEiNaUi/model.json",modelLoaded);

function modelLoaded(){
    console.log("model has Loaded")
}

function speak (){
    var synth = window.speechSynthesis;
    speak_data_1 = "the first prediction is" + prediction_1;
    speak_data_2 = "the first prediction is" + prediction_2;
    var utterthis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterthis);
}