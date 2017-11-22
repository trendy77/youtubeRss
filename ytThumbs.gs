// thumbnails  ....For reference the urls are as follows:
function check(){
 var res = thumbs('4zT9DsfIsP4'); 
Logger.log(res);
}

function thumbs(vidId){
var prefix = "http://img.youtube.com/vi/";
    
  //4 Frames from Key Points in the animation
//.../0.jpg
//http://img.youtube.com/vi/[video-id]/1.jpg
//http://img.youtube.com/vi/[video-id]/2.jpg
//http://img.youtube.com/vi/[video-id]/3.jpg

//Default thumbnail (the one seen on Youtube itself)
var delt = prefix + vidId + "/default.jpg";

//High Quality default image
var highQual = prefix + vidId + "/hqdefault.jpg";

  //Medium Quality default image
var medQual = prefix + vidId + "/mqdefault.jpg";

//Standard definition thumbnail
var sdDef = prefix + vidId + "/sddefault.jpg";

  //The largest size thumbnail available
var largest = prefix + vidId + "/maxresdefault.jpg";
var imgArr = ([delt,highQual,medQual,sdDef,largest]);
  return imgArr;
}