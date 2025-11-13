//  Simple ATM Simulator

let balance = 1000; // Default balance
const correctPin = "1234"; // Correct PIN

// Step 1: Ask for PIN
let enteredPin = prompt("Enter your 4-digit PIN:");

if (enteredPin !== correctPin) {
  alert(" Incorrect PIN! Access Denied.");
} else {
  // Step 2: Show main menu
  let choice = prompt(
    "Welcome to JS ATM \n" +
      "1 Check Balance\n" +
      "2 Withdraw\n" +
      "3 Deposit\n" +
      "4 Exit\n\n" +
      "Enter your choice (1-4):"
  );

  // Step 3: Handle menu options
  if (choice === "1") {
    alert(" Your balance is: $" + balance);
  } 
  else if (choice === "2") {
    let withdrawAmount = parseFloat(prompt("Enter amount to withdraw:"));
    if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
      alert(" Invalid amount entered!");
    } else if (withdrawAmount > balance) {
      alert(" Insufficient funds!");
    } else {
      balance -= withdrawAmount;
      alert(" Withdrawal successful!\nNew balance: $" + balance);
    }
  } 
  else if (choice === "3") {
    let depositAmount = parseFloat(prompt("Enter amount to deposit:"));
    if (isNaN(depositAmount) || depositAmount <= 0) {
      alert(" Invalid amount entered!");
    } else {
      balance += depositAmount;
      alert(" Deposit successful!\nNew balance: $" + balance);
    }
  } 
  else if (choice === "4") {
    alert(" Thank you for using JS ATM!");
  } 
  else {
    alert(" Invalid option! Please restart the ATM.");
  }
}
