// QUANTITY
function buyNow(){
    const input = document.getElementById('input');
    console.log(input);
    const amount = input.value;
    console.log(amount);
    const quantity = parseInt(amount);
    if(isNaN (quantity > 0)){
        const customerInput = document.getElementById("wrongInput");
        customerInput.innerHTML = "Numbers only"
    }
    else{
        const customerInput = document.getElementById("wrongInput");
        customerInput.innerHTML = ("Checking on those " + quantity + " orders!")
    }
  
    }

//REMOVE ITEMS
const removeButtons = document.getElementsByClassName('test')
console.log(removeButtons)
for(let i = 0; i< removeButtons.length; i ++){
    const button = removeButtons[i].addEventListener('click', ()=>{
        const buttonClicked = event.target
        buttonClicked.parentElement.parentElement.parentElement.remove();
        const customerInput = document.getElementById("wrongInput");

        customerInput.innerHTML = "Item removed!"
    })
}