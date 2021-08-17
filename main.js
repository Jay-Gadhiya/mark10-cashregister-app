const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-amount");
const checkButton = document.querySelector("#check-button");
const errorMessage = document.querySelector('#error-message');
const noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];


checkButton.addEventListener("click", function validBillAmount() {
    hideMessage();
    if (billAmount.value > 0) {
        if (cashGiven.value >= billAmount.value) {
            const amountReturn = cashGiven.value - billAmount.value;
            calculateChange(amountReturn);

        } else {
            showMessage("Do you wanna a wash plates?");
        }
    } 
    else 
    {
        showMessage("Invalid Bill Amount");
    }

})


function showMessage(message) {
    errorMessage.style.display = "block";
    errorMessage.innerText = message;

}

function hideMessage() {
    errorMessage.style.display = "none";
}

function calculateChange(amountReturn) {
    for (let i = 0; i < availableNotes.length; i++) {
        const numberOfNotes = Math.trunc( amountReturn / availableNotes[i]);

        amountReturn %= availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;

        
    }
}