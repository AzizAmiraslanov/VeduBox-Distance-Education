let btn = document.getElementById("submit");
btn.addEventListener("click", function () {
    let usname = document.getElementById("username").value;
    let psword = document.getElementById("password").value;
    if (usname === "") {
        if (psword === "") {
            alert("Please fill in the Username and Password");
            console.log("Error 404");
        }
    } 
    else if (usname === "aziz") {
        if (psword === "aziz") {
            window.location.href = "./pages/app.html";
        } else if (psword != "aziz") {
            alert("You Password can't find our system");
        }
    } 
    else {
        alert("You Username can't find our system");
    }
})


let btn2 = document.querySelector("#submit2");
btn2.addEventListener("click", function () {
    window.location.href = "./pages/signUp.html";
})


// Show Password Input Code Area Start in the Here

function passwordShow() {
    var pass = document.getElementById("password");
    if (pass.type === "password") {
        pass.type = "text";
    } else {
        pass.type = "password";
    }
}

// Show Password Input Code Area Start in the Here