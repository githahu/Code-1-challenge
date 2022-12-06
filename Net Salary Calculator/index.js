// net salary calculator
function salary(basicSalary, benefits){
    let grossSalary = basic + benefits;
    // payee taken is for a person who salary is >= 388,000 (30%)
    let payee = grossSalary * 0.3;
    let nhif = 1700
    // nssf contributions employee 6% + employer 6% = 12% of pensionable pay
    let nssf = grossSalary * 0.12;
    let deductions = paye + nhif + nssf;
    let netSalary = grossSalary - deductions;
    return "Gross Salary: " + grossSalary + "PAYE: " + paye + "NSSF: " + nssf + "NHIF: " + nhif + "Deductions: " + deductions;
}
console.log(salary(388000, 12960));