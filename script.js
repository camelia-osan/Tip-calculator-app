const billInput = document.getElementById('billPrice');
const buttons = document.querySelectorAll('.btn');
const customInput = document.getElementById('customChoice');
const peopleNumber = document.getElementById('peopleNumber');
const tipAmount = document.getElementById('tipAmount');
const totalPrice = document.getElementById('totalPrice');

buttons.forEach(button => {
    button.addEventListener('click', function () {
        // Remove 'active' class from all buttons
        buttons.forEach(btn => {
            btn.classList.remove('active-btn');
        });

        // Add 'active' class to the clicked button
        this.classList.add('active-btn');
    });
});

// Add event listener for focus on customChoice input
customInput.addEventListener('focus', function () {
    // Remove 'active' class from all buttons when customChoice input is focused
    buttons.forEach(btn => {
        btn.classList.remove('active-btn');
    });
});

customInput.addEventListener('input', handleInput);
billInput.addEventListener('input', handleInput);
peopleNumber.addEventListener('input', handleInput);

// Function to handle button click or custom input change
function handleInput() {
    let userInput = parseFloat(billInput.value);
    let peopleInput = parseFloat(peopleNumber.value);

    if (isNaN(userInput)) {
        userInput = 0;
    }

    // Prevent division by zero or NaN
    if (isNaN(peopleInput) || peopleInput === 0) {
        tipAmount.textContent = "$0.00";
        totalPrice.textContent = "$0.00";
        return;
    }

    let tipPercentage;

    buttons.forEach(button => {
        if (button.classList.contains('active-btn')) {
            console.log(parseFloat(button.value));
            tipPercentage = parseFloat(button.value);
            customChoice.value = '';
        }
    }
    );

    if (!isNaN(customChoice.value) && isNaN(tipPercentage)) {
        tipPercentage = parseFloat(customChoice.value);
    }

    if (isNaN(tipPercentage)) {
        console.log(tipPercentage);
        tipPercentage = 0;
    }

    const tipAmountPerPerson = (userInput * (tipPercentage / 100)) / peopleInput;
    const totalPerPerson = (userInput / peopleInput) + tipAmountPerPerson;

    tipAmount.textContent = "$" + tipAmountPerPerson.toFixed(2);
    totalPrice.textContent = "$" + totalPerPerson.toFixed(2);
}

buttons.forEach(button => {
    button.addEventListener('click', handleInput);
});

customInput.addEventListener('click', handleInput);


// Function to check if inputs are valid and enable/disable the reset button accordingly
function checkInputs() {
    const customChoice = document.getElementById('customChoice').value;
    const resetButton = document.getElementById('resetButton');

    // Check if customChoice is filled or any button with class 'btn' is clicked
    if (customChoice || btnClicked) {
        resetButton.removeAttribute('disabled');
    } else {
        resetButton.setAttribute('disabled', 'disabled');
    }
}

let btnClicked = false;

document.getElementById('billPrice').addEventListener('input', checkInputs);
document.getElementById('customChoice').addEventListener('input', checkInputs);

document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function () {
        btnClicked = true;
        checkInputs();
    });
});


// Warning that the bill and the number of people can't be 0 
document.addEventListener('DOMContentLoaded', function () {
    let billInput = document.getElementById('billPrice');
    let peopleInput = document.getElementById('peopleNumber');
    let warningBill = document.getElementById('warningBillText');
    let warningPeople = document.getElementById('warningPeopleText');

    billInput.addEventListener('input', function () {
        let inputValue = parseInt(billInput.value);
        if (inputValue === 0) {
            warningBill.classList.add('warning-active');
            billInput.classList.add('billInput-active');
        } else {
            warningBill.classList.remove('warning-active');
            billInput.classList.remove('billInput-active');
        }
    });

    peopleInput.addEventListener('input', function () {
        let inputValue = parseInt(peopleInput.value);
        if (inputValue === 0) {
            warningPeople.classList.add('warning-active');
            peopleInput.classList.add('peopleInput-active');
        } else {
            warningPeople.classList.remove('warning-active');
            peopleInput.classList.remove('peopleInput-active');
        }
    });
});