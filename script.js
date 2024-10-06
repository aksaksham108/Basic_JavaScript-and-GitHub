let imagebox = document.getElementById("imagebox");
let qrimage = document.getElementById("qrimage");
let qrtext = document.getElementById("qrtext");

function generateQR() {
    if (qrtext.value.length) {
        qrimage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrtext.value;
        imagebox.classList.add("show-img");
    }
    else {
        qrtext.classList.add("error");
        setTimeout(() => {
            qrtext.classList.remove("error");
        }, 1000);
    }
}
