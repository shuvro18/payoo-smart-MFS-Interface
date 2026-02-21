document.getElementById("withdraw-button")
.addEventListener("click", function(){
    
    // number
    const homeNUmberInput = document.getElementById("home-number");
    const number = homeNUmberInput.value ;
    if(number.length !== 11 ){
        alert("invalid number");
        return
    }
    // amount
    const homeAmountInput = document.getElementById("home-amount");
    const amount = homeAmountInput.value;

    // main amount
    const balanceAmountTaka = document.getElementById("Balance");
    const mainBalanceTaka = balanceAmountTaka.innerText

    // balance sum
    const mainBalance = Number(mainBalanceTaka) - Number(amount);
    
    // balance condition
    if(mainBalance < 0){
        alert("mama amount is not valid");
        return;
    }
    // set main balance
    
    // pin number
    const pinNumber =document.getElementById("pin");
    const pin = pinNumber.value;
    if(pin === "1234"){
        
        balanceAmountTaka.innerText = mainBalance;
        alert("successfully done");
    }else{
        alert("mama pin is invalid");
        return;
    }
})