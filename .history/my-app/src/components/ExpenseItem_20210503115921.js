import ExpenseDate from "./ExpenseDate";

import "./ExpenseItem.css";

function ExpenseItem(props) {
    console.log("expenseitem", props);

    // const expenseTitle = "Car Insurance";
    // const expenseAmount = 294;

    return (
        <div className="expense-item">
            <ExpenseDate date={this.props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
            </div>
            <div className="expense-item__price">${props.amount}</div>
        </div>
    );
}

export default ExpenseItem;
