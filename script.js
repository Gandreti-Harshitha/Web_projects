const expenseList = document.getElementById('expenseList');
const totalExpense = document.getElementById('totalExpense');
let expenses = [];

function addExpense() {
  const name = document.getElementById('name').value;
  const amount = parseFloat(document.getElementById('amount').value);
  if (name !== '' && !isNaN(amount) && amount > 0) {
    expenses.push({ name, amount });
    displayExpenses();
  }
  document.getElementById('name').value = '';
  document.getElementById('amount').value = '';
}

function displayExpenses() {
  expenseList.innerHTML = '';
  let total = 0;
  expenses.forEach(expense => {
    const expenseRow = document.createElement('tr');
    const nameCell = document.createElement('td');
    nameCell.textContent = expense.name;
    const amountCell = document.createElement('td');
    amountCell.textContent = expense.amount.toFixed(2);
    expenseRow.appendChild(nameCell);
    expenseRow.appendChild(amountCell);
    expenseList.appendChild(expenseRow);
    total += expense.amount;
  });
  totalExpense.textContent = `Total expense: ₹${total.toFixed(2)}`;
}