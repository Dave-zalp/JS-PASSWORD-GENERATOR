const passwordBox = document.getElementById('Password');
const len = 12;

const Upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const Lower = "abcdefghijklmnopqrstuvwxyz";
const num = "0123456789";
const symbol = "?><>{{:{}_+,.;['[@#$%^&*(";

const allChars = Upper + Lower + num + symbol

function generate(){
    let pass = "";
      pass += Upper[Math.floor(Math.random() * Upper.length)]
      pass += Lower[Math.floor(Math.random() * Lower.length)]
      pass += num[Math.floor(Math.random() * num.length)]
      pass += symbol[Math.floor(Math.random() * symbol.length)]

      while(len > pass.length){
        pass += allChars[Math.floor(Math.random() * allChars.length)]
      }
      passwordBox.value = pass;
}

function copy(){
    passwordBox.select();
    document.execCommand('copy');
    alert('Password Copied');
}