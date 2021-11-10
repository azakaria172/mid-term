// console.log("hello worl")

function Process() {
    let name = document.getElementById('nameBox').value;
    let age = document.getElementById('ageBox').value;
    let totalMonthlySalary = document.getElementById('totalMonthlySalaryBox').value;

    let totalYearlySalary = totalMonthlySalary * 12;
    let monthlyBonus = 0;

    if (age > 25 && totalYearlySalary >= 100000) {
        monthlyBonus = totalMonthlySalary * 0.2;
    } 

    else if (age > 30 && totalYearlySalary >= 200000) {
        monthlyBonus = totalMonthlySalary * 0.3;
    }

    else if (age > 35 && totalYearlySalary >= 300000) {
        monthlyBonus = totalMonthlySalary * 0.4;
    }

    else {
        monthlyBonus = totalMonthlySalary * 0.1;
    }

    p1.innerText = `Name: ${name}, Total Year Bonus Amount: ${monthlyBonus * 12}`;


}