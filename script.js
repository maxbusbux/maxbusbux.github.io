window.unload = function{
alert("Welcome")
}
function run() {
  indata = document.getElementById("vin").value;
  outdata = btoa(indata);
  document.getElementById("vout").setAttribute('value', outdata);
}

function press() {
  run();
}
