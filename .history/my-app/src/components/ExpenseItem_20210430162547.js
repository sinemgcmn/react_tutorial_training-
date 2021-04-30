import "./ExpenseItem.css";

function ExpenseItem() {
    const expenseDate = new Date(2021, 2, 28);

    return (
        <div className="expense-item">
            <div>expenseDate</div>
            <div className="expense-item__description">
                <h2>Car Insurance</h2>
            </div>
            <div className="expense-item__price">$294</div>
        </div>
    );
}

export default ExpenseItem;
