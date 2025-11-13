
// //  Simple ATM Simulator
let balance = 1000;// Default balance
const pin = "1234";// Correct PIN

// // Step 1: Ask for PIN
let enteredPin = prompt("Enter PIN:");

 // Step 2: Show main menu
if (enteredPin !== pin) {
  alert("Incorrect PIN!");
} else {
  let choice = prompt(
    "Welcome to JS ATM \n" +
    "1. Check Balance\n" +
    "2. Withdraw\n" +
    "3. Deposit\n" +
    "4. Exit\n" +
    "Enter choice (1-4):"
  );
 // Step 3: Handle menu options
  if (choice === "1") {
    alert("Your balance: $" + balance);
  } else if (choice === "2") {
    let amount = +prompt("Enter amount to withdraw:");
    if (amount > balance) alert("Insufficient funds!");
    else {
      balance -= amount;
      alert("Withdrawn! New balance: $" + balance);
    }
  } else if (choice === "3") {
    let amount = +prompt("Enter amount to deposit:");
    balance += amount;
    alert("Deposited! New balance: $" + balance);
  } else if (choice === "4") {
    alert("Thanks for using JS ATM!");
  } else {
    alert("Invalid option!");
  }
}

