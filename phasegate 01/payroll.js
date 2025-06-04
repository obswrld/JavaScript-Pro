const prompt = require("Prompt-sync")();
class Employee {
    constructor(name, hourlyPay, federalTaxRate, stateTaxRate) {
        this.name = name;
        this.hourlyPay = hourlyPay;
        this.federalTaxRate = federalTaxRate;
        this.stateTaxRate = stateTaxRate;
    }

    calculateNetPay(hoursWorked) {
        let grossPay = this.hourlyPay * hoursWorked;
        let federalTax = grossPay * this.federalTaxRate;
        let stateTax = grossPay * this.stateTaxRate;
        let netPay = grossPay - (federalTax + stateTax);
        return netPay;
    }
}

function main() {
    const employeeMap = new Map();

    while (true) {
        let name = prompt("Enter employee name (or type 'exit' to finish): ");
        if (name.toLowerCase() === 'exit') {
            break;
        }

        if (employeeMap.has(name)) {
            console.log("Employee already exists. Please enter a unique name.");
            continue;
        }

        let hourlyPay;
        while (true) {
            hourlyPay = parseFloat(prompt("Enter hourly pay: "));
            if (hourlyPay < 0) {
                console.log("Hourly pay cannot be negative. Please enter a valid amount.");
                continue;
            }
            break;
        }

        let federalTaxRate;
        while (true) {
            federalTaxRate = parseFloat(prompt("Enter federal tax rate (as a decimal): "));
            if (federalTaxRate < 0 || federalTaxRate > 1) {
                console.log("Federal tax rate must be between 0 and 1. Please enter a valid rate.");
                continue;
            }
            break;
        }

        let stateTaxRate;
        while (true) {
            stateTaxRate = parseFloat(prompt("Enter state tax rate (as a decimal): "));
            if (stateTaxRate < 0 || stateTaxRate > 1) {
                console.log("State tax rate must be between 0 and 1. Please enter a valid rate.");
                continue;
            }
            break;
        }

        let employee = new Employee(name, hourlyPay, federalTaxRate, stateTaxRate);
        employeeMap.set(name, employee);

        let hoursWorked = parseFloat(prompt("Enter hours worked: "));
        let netPay = employee.calculateNetPay(hoursWorked);
        console.log(`Net pay for ${name} is: $${netPay.toFixed(2)}`);
    }
}

main();
