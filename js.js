function buyNow(){
    const input = document.getElementById('input');
    console.log(input);
    const amount = input.value;
    console.log(amount);
    const quantity = parseInt(amount);
    if(isNaN(quantity)){
        const customerInput = document.getElementById("wrongInput");
        customerInput.innerHTML = "Letters only"
    }
    else{
        const customerInput = document.getElementById("wrongInput");
        customerInput.innerHTML = ("Checking on those " + quantity + " orders!")
    }
}