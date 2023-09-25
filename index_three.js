function calculateNetSalary(basicSalary, benefits) {
  const kraTaxRate = 0.3; // KRA tax rate
  const nhifRate = 0.02; // NHIF deduction rate
  const nssfRate = 0.06; // NSSF deduction rate

  // Calculate gross salary
  const grossSalary = basicSalary + benefits;

  // Calculate payee (tax)
  const payee = grossSalary * kraTaxRate;

  // Calculate NHIF deductions
  const nhifDeductions = grossSalary * nhifRate;

  // Calculate NSSF deductions
  const nssfDeductions = grossSalary * nssfRate;

  // Calculate net salary
  const netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;

  // Return the calculated values
  return {
    grossSalary,
    payee,
    nhifDeductions,
    nssfDeductions,
    netSalary
  };
}

// Get inputs from the user
const basicSalary = parseFloat(prompt("Enter the basic salary:"));
const benefits = parseFloat(prompt("Enter the benefits:"));

// Calculate net salary
const salaryDetails = calculateNetSalary(basicSalary, benefits);

// Display the results
console.log("Gross Salary:", salaryDetails.grossSalary);
console.log("Payee (Tax):", salaryDetails.payee);
console.log("NHIF Deductions:", salaryDetails.nhifDeductions);
console.log("NSSF Deductions:", salaryDetails.nssfDeductions);
console.log("Net Salary:", salaryDetails.netSalary);