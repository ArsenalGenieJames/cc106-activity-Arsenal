document.addEventListener('DOMContentLoaded', () => {
    let income = 0;
    let expenses = 0;
    let inibudgets = 0;

    const incomeSpan = document.getElementById('income');
    const expensesSpan = document.getElementById('expenses');
    const balanceSpan = document.getElementById('balance');
    const inibudgetsSpan = document.getElementById('inibudgets');
    const transactionList = document.querySelector('.list-group');

    document.getElementById('submit').addEventListener('click', () => {
        const name = document.getElementById('name').value.trim();
        const category = document.getElementById('category').value.trim();
        const type = document.querySelector('.btn-outline-success.active') ? 'Income' : 'Expense';
        const amount = parseFloat(document.querySelector('input[placeholder="Amount"]').value.trim());
        

        if (!name || !category || isNaN(amount)) {
            alert('Please fill in all fields and provide a valid amount.');
            return;
        }

        const transaction = document.createElement('li');
        transaction.className = 'list-group-item d-flex justify-content-between';
        transaction.innerHTML = `
            <span>${name}</span>
            <span>${category}</span>
            <span>${type}</span>
            <span>${amount.toFixed(2)}</span>
        `;
        transactionList.appendChild(transaction);

        if (type === 'Income') {
            income += amount;
        } else if (type === 'Expense') {
            expenses += amount;
        }else(inibudgets - expenses );

        updateTotals();

        document.getElementById('name').value = '';
        document.getElementById('category').value = '';
        document.querySelector('input[placeholder="Amount"]').value = '';
    });

    document.getElementById('incomebutton').addEventListener('click', () => {
        document.getElementById('expensebutton').classList.remove('active');
        document.getElementById('incomebutton').classList.add('active');
    });

    document.getElementById('expensebutton').addEventListener('click', () => {
        document.getElementById('incomebutton').classList.remove('active');
        document.getElementById('expensebutton').classList.add('active');
    });

    document.getElementById('initial-button').addEventListener('click', () => {
        const initialBudget = parseFloat(document.getElementById('initialbudget').value.trim());
        if (isNaN(initialBudget)) {
            alert('Please provide a valid initial budget.');
            return;
        }
        inibudgets = initialBudget;
        inibudgetsSpan.textContent = inibudgets.toFixed(2);
        document.getElementById('initialbudget').value = '';
        updateTotals();
    });

    function updateTotals() {
        incomeSpan.textContent = income.toFixed(2);
        expensesSpan.textContent = expenses.toFixed(2);
        balanceSpan.textContent = (inibudgets + income - expenses).toFixed(2);
    }
});
