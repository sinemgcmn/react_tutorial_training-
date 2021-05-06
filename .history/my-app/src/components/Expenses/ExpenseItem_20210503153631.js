import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

import "./ExpenseItem.css";

function ExpenseItem(props) {
    // console.log("expenseitem", props);
    const clickHandler = () => {
        console.log("clicked")
    });


    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button
                onClick={() => {
                    console.log("Clicked");
                }}
            >
                Change Title
            </button>
        </Card>
    );
}

export default ExpenseItem;
