const inputfiled = document.querySelector(".QrcodeInput");
const imahgeholder = document.querySelector(".QrcodeImage");
const button = document.querySelector(".Qrcodebtn");

button.addEventListener('click', () => {
    imahgeholder.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data= ${inputfiled.value}`;
});