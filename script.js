document.addEventListener("DOMContentLoaded", function () {
    let signIn = document.getElementById("signin");

    signIn.addEventListener("click", function () {
        let usn = document.getElementById("username").value.trim();
        let pass = document.getElementById("password").value.trim();
        let position = document.getElementById("password");
        let errorBefore = document.getElementById("msgError");
    
        if (errorBefore) {
            errorBefore.remove();
        }

        let errorText = "";
        if (usn === "" || pass === "") {
            errorText = "Username atau Password tidak boleh kosong, ya!";
        } else if (pass.length < 8) {
            errorText = "Password minimal harus 8 karakter, brok.";
        } else if (pass.length > 16) {
            errorText = "Password maksimal 16 karakter nih.";
        }

        if (errorText !== "") {
            let msgError = document.createElement("p");
            msgError.id = "msgError";
            msgError.style.color = "#bf1a12"; 
            msgError.style.fontSize = "12px";
            msgError.style.marginTop = "5px";
            msgError.textContent = errorText;
            position.after(msgError);
        } else {
            window.open("https://www.instagram.com/diaz.bara?igsh=MXhoYnhwYWZjNXJ1MQ%3D%3D&utm_source=qr");
        }
    });
});