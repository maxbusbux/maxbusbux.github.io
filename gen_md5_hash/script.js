function hash_text(){
indata = document.getElementById("input").value;
hash = calcMD5(indata);
document.getElementById("output").setAttribute('value', hash);
};
function press(){
hash_text();  
};
