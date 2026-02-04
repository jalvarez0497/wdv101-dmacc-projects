class BankAccount {

    constructor(inBalance) {
        this.accountNumber = "";
        this.accountName = "";
        this.accountBalance = inBalance;
        this.accountTransactions = [];
    }

    getAccountNumber() {
        return this.accountNumber;
    }

    getAccountName() {
        return this.accountName;
    }

    getAccountBalance() {
        return this.accountBalance;
    }

    getAccountTransactions() {
        return this.accountTransactions;
    }

    setAccountNumber(accNumber) {
        this.accountNumber = accNumber;
    }

    setAccountName(accName) {
        this.accountName = accName;
    }

    setAccountBalance(accBalance) {
        this.accountBalance = accBalance;
    }

    setAccountTransactions(accTransactions) {
        this.accountTransactions = accTransactions;
    }

    getTransactionDate() {
        const today = new Date();
        const month = String(today.getMonth() + 1).padStart(2, "0");
        const day = String(today.getDate()).padStart(2, "0");
        const year = today.getFullYear();
        return month + "/" + day + "/" + year;
    }

    deposit(amount) {
        if (amount <= 0 || isNaN(amount)) {
            console.log("Amount to deposit must be greater than zero.");
            return;
        }

        this.accountBalance += amount;

        const transaction = {
            transactionType: "D",
            transactionAmount: amount,
            transactionDate: this.getTransactionDate()
        };

        this.accountTransactions.push(transaction);
    }

    withdraw(amount) {

        if (amount <= 0 || isNaN(amount)) {
            console.log("Amount to withdraw must be greater than zero.");
            return;
        }

        if (amount > this.accountBalance) {
            console.log("Cannot process transaction, insufficient funds.");
            return;
        }

        this.accountBalance -= amount;

        const transaction = {
            transactionType: "W",
            transactionAmount: amount,
            transactionDate: this.getTransactionDate()
        }

        this.accountTransactions.push(transaction);
    }

    balance() {
        return this.accountBalance;
    }

    accountInfo() {
        return [
            "Account Name   : " + this.accountName,
            "Account Number : " + this.accountNumber,
            "Account Balance: $" + this.accountBalance.toFixed(2)
        ]
    }
}