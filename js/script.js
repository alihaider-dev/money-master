// Get Value Function
function getValue(valueName) {
  const targetInputField = document.getElementById(`${valueName}`);
  const inputFieldValue = parseFloat(targetInputField.value);
  return inputFieldValue
}

// Total Expenses Function
function totalExpenses(firstItem, secondItem, thirdItem) {
  const foodField = document.getElementById(firstItem);
  const food = parseFloat(foodField.value);
  const rentField = document.getElementById(secondItem);
  const rent = parseFloat(rentField.value);
  const clothField = document.getElementById(thirdItem);
  const cloth = parseFloat(clothField.value);

  const expenses = food + rent + cloth;
  return expenses;
};

document.getElementById('calculate-budget').addEventListener('click', function () {
  // Monthly Income Value
  getValue('monthly-income');
  if (getValue('monthly-income') < 0 || isNaN(getValue('monthly-income'))) {
    alert('Invalid Input');
    return;
  }
  // Food Expense Value
  getValue('food');
  if (getValue('food') < 0 || isNaN(getValue('food'))) {
    alert('Invalid Input');
    return;
  }
  // Rent Expense Value
  getValue('rent');
  if (getValue('rent') < 0 || isNaN(getValue('rent'))) {
    alert('Invalid Input');
    return;
  }
  // Clothes Expense Value
  getValue('clothes');
  if (getValue('clothes') < 0 || isNaN(getValue('clothes'))) {
    alert('Invalid Input');
    return;
  }

  if (getValue('monthly-income') < totalExpenses('food', 'rent', 'clothes')) {
    alert('Your expenses must be less than your income');
    return;
  }
  else {
    /* Total Expenses */
    document.getElementById('total-expenses').innerHTML = totalExpenses('food', 'rent', 'clothes');

    /* Balance After Expenses */
    const balanceAfterExpenses = getValue('monthly-income') - totalExpenses('food', 'rent', 'clothes');
    document.getElementById('balance-after-expenses').innerHTML = balanceAfterExpenses;
  }

})


document.getElementById('btn-savings').addEventListener('click', function () {
  const saveInput = document.getElementById('save-input');
  const saveInputValue = parseFloat(saveInput.value);
  const balanceAfterExpenses = getValue('monthly-income') - totalExpenses('food', 'rent', 'clothes');
  const savingAmount = getValue('monthly-income') / 100 * parseFloat(saveInput.value);

  if (getValue('monthly-income') < 0 || isNaN(getValue('monthly-income'))) {
    alert('For saving you must fill income field');
    return;
  }

  if (saveInputValue < 0 || isNaN(saveInputValue)) {
    alert('Invalid Input')
    return;
  }

  if (balanceAfterExpenses < savingAmount) {
    alert(`You don't have enough balance. Your current balance is ${balanceAfterExpenses}`);
    return;
  }
  else {
    const savingAmoutValue = document.getElementById('savings-amount');
    savingAmoutValue.innerHTML = savingAmount;
    /* Remaining Balance */
    const remainingBalance = document.getElementById('remaining-balance');
    const remainingBalanceReport = balanceAfterExpenses - savingAmount;
    remainingBalance.innerHTML = remainingBalanceReport;
  }
})