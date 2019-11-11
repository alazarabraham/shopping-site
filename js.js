// QUANTITY
function buyNow(){
    const input = document.getElementById('input');
    const amount = input.value;
    console.log(amount);
    const quantity = parseInt(amount);
    if(isNaN (quantity)){
        const customerInput = document.getElementById("wrongInput");
        customerInput = "";
        customerInput.innerHTML = "Numbers only"
    }
    else if(quantity>0){
        const customerInput = document.getElementById("wrongInput");
        customerInput.innerHTML = ("Checking on those " + quantity + " orders!"); 
    }
  
  
    

    const grabPrice = document.getElementsByClassName('priceOne').item(0)
    let price = grabPrice.innerText
    priceParced = parseInt(price);
    console.log(priceParced)
    console.log(price)
    const cartTotal = amount *  priceParced;
    console.log(cartTotal);
    const priceOutput = document.getElementById("priceOutput");



    priceOutput.innerHTML = ("$"+ cartTotal+ " is your current total");
    

    

}

//REMOVE ITEMS
const removeButtons = document.getElementsByClassName('test')
for(let i = 0; i< removeButtons.length; i ++){
    const button = removeButtons[i].addEventListener('click', ()=>{
        const buttonClicked = event.target
        buttonClicked.parentElement.parentElement.parentElement.remove();
        const customerInput = document.getElementById("wrongInput");

        customerInput.innerHTML = "Item removed!"
        updateCart();
    })
}

