import "./ExpenseItem.css";
import "./ExpenseDate";

function ExpenseItem(props) {
    console.log(props);

    // const expenseTitle = "Car Insurance";
    // const expenseAmount = 294;

    return (
        <div className="expense-item">
            <div className="expense-item__description">
                <h2>{props.title}</h2>
            </div>
            <div className="expense-item__price">${props.amount}</div>
        </div>
    );
}

export default ExpenseItem;
