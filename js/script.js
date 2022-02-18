function getValue(valueName) {
  const targetInputField = document.getElementById(`${valueName}`);
  const inputFieldValue = parseFloat(targetInputField.value);
  return inputFieldValue
}

document.getElementById('calculate-budget').addEventListener('click', function () {
  // Monthly Income Value
  getValue('monthly-income');
  // Food Expense Value
  getValue('food');
  // Rent Expense Value
  getValue('rent');
  // Clothes Expense Value
  getValue('clothes');

  /* Total Expenses */
  const totalExpenses = getValue('food') + getValue('rent') + getValue('clothes');
  document.getElementById('total-expenses').innerHTML = totalExpenses;

  /* Balance After Expenses */
  const balanceAfterExpenses = getValue('monthly-income') - totalExpenses;
  document.getElementById('balance-after-expenses').innerHTML = balanceAfterExpenses;
})

// document.getElementById('btn-savings').addEventListener('click', function () {
//   const monthlyIncomeField = document.getElementById('monthly-income');
//   const monthlyIncome = parseFloat(monthlyIncomeField.value);
//   const saveInput = document.getElementById('save-input');
//   const savingAmount = monthlyIncome / 100 * parseFloat(saveInput.value);
//   const savingAmoutValue = document.getElementById('savings-amount');
//   savingAmoutValue.innerHTML = savingAmount;

//   /* Remaining Balance */
//   const balanceAfterExpenses = monthlyIncome - totalExpenses;
//   const remainingBalance = document.getElementById('remaining-balance');
//   const remainingBalanceReport = balanceAfterExpenses - savingAmount;
//   console.log(remainingBalanceReport);
//   remainingBalance.innerHTML = remainingBalanceReport;
// })