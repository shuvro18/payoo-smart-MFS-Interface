document.getElementById("login-button").addEventListener("click", function () {
    // input numbeR
    const inputNumber = document.getElementById("login-number");
    const number = inputNumber.value ;

    // input pin
    const inputPin = document.getElementById("login-pin");
    const pin = inputPin.value ;
    
    // condition
    
    if(number==="12345678900" && pin=== "1234"){
        alert("Login Successful");

        window.location.assign("./home.html")
    }
    else{
        alert("Login Failed😓");
        return;
    }
    
});
