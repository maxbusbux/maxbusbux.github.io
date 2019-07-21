function run() {
  indata = document.getElementById("vin").value;
  outdata = btoa(indata);
  document.getElementById("vout").setAttribute('value', outdata);
};

function press() {
  run();
}
function reset(){
$('#vin').val('').removeClass('valid');
M.updateTextFields();
$('#vout').val('').removeClass('valid');
M.updateTextFields();
};
