Webcam.set({
    width:390,
    height:350,
    image_format:'jpeg',
    jpeg_quality:100
});
camera = document.getElementById("camera");
Webcam.attach(  '#camera'  );
function tae_snaPshot(){
    Webcam.snap(function(daTA_MURILI){
        document.getElementById("result").innerHTML = '<img id="capture_image" src="'+daTA_MURILI+'"/>';
    });
}
console.log('ml5 version:',ml5.version);
classier = ml5.imageClassifier('',modelloadd);
function modelloadd(){
    console.log("modeltoaded")
}
function check(){
    img=document.getElementById('capture_image');
    classier.classify(img,gotresult)
}
function gotresult(error,results){
if(error){
    console.error(error);
}else{
    console.log(results);
    document.getElementById("image").innerHTML = results[0].label;
    document.getElementById("imaget").innerHTML=results[0].confidence.toFixed(2);
}
}