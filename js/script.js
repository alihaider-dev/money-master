document.getElementById('calculate-budget').addEventListener('click', function () {

  const monthlyIncomeField = document.getElementById('monthly-income');
  const monthlyIncome = parseFloat(monthlyIncomeField.value);

  /* Food Expens Value */
  const foodExpensValue = document.getElementById('food');
  const foodExpens = parseFloat(foodExpensValue.value);
  /* Rent Expens Value */
  const rentExpensValue = document.getElementById('rent');
  const rentExpens = parseFloat(rentExpensValue.value);
  /* Clothes Expens Value */
  const clothesExpensValue = document.getElementById('clothes');
  const clothesExpens = parseFloat(clothesExpensValue.value);

  /* Total Expenses */
  const totalExpenses = foodExpens + rentExpens + clothesExpens;
  document.getElementById('total-expenses').innerHTML = totalExpenses;

  /* Balance After Expenses */
  const balanceAfterExpenses = monthlyIncome - totalExpenses;
  document.getElementById('balance-after-expenses').innerHTML = balanceAfterExpenses;
})

