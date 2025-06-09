function validateLogin() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMsg = document.getElementById("error-msg");
  
    if (username === "" || password === "") {
      errorMsg.textContent = "Username and password are required.";
      return false;
    }
    if (username === "zmqrcodes" && password === "zmqr@1234") {
        window.open("loginsuccess.html", "_blank");
        errorMsg.textContent = "";
        return false;
      } else {
        errorMsg.textContent = "Invalid credentials!";
        return false;
      }
    }
  
