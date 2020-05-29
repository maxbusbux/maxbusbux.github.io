function run() {
  indata = document.getElementById("vin").value;
  outdata = btoa(indata);
  document.getElementById("vout").setAttribute('value', outdata);
  if (indata == null || indata == "") {
    document.getElementById('vin').className = "disabled"

  }

};

function run1() {
  indata1 = document.getElementById("vin1").value;
  outdata1 = atob(indata1);
  document.getElementById("vout2").setAttribute('value', outdata1);
};

function press() {
  run();
};

function press1() {
  run1();
}

function reset() {
  $('#vin').val('').removeClass('valid');
  M.updateTextFields();
  $('#vout').val('').removeClass('valid');
  M.updateTextFields();
};

function reset1() {
  $('#vin1').val('').removeClass('valid');
  M.updateTextFields();
  $('#vout2').val('').removeClass('valid');
  M.updateTextFields();
};
