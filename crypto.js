import { TravisAes } from  "https://satmpcloudsharedbr001.blob.core.windows.net/b2ccontent/login/cryptomodule.js";


function Decrypt() {
    let aes = new TravisAes();
    let key = document.querySelector('#key').value;
    let encrypted = document.querySelector('#input').value;
    let decrypted = aes.decrypt(key, encrypted);
    $('#output').val(decrypted);
}

function Encrypt() {
    let aes = new TravisAes();
    let key = document.querySelector('#key').value;
    let message = document.querySelector('#input').value;
    let encrypted = aes.encrypt(key, message);
    $('#output').val(encrypted);
}

document.querySelector("#botao").addEventListener("click", e => {
    Encrypt();
});

document.querySelector("#botao2").addEventListener("click", e => {
    Decrypt();
});
