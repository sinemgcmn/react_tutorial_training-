import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
    // console.log("expenses:", props);
    const [filteredYear, setFilteredYear] = useState("2020");

    const onDropDownFilterHandler = (enteredExpenseYear) => {
        setFilteredYear(enteredExpenseYear);

        console.log("expenseFilter", enteredExpenseYear);
    };
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter>
                    selected={filteredYear}
                    onDropDownFilter={onDropDownFilterHandler}
                </ExpensesFilter>

                {props.items.filter((expense) => (
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                ))}

                {props.items.map((expense) => (
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                ))}
                {/* <ExpenseItem
                    title={props.items[0].title}
                    amount={props.items[0].amount}
                    date={props.items[0].date}
                />
                <ExpenseItem
                    title={props.items[1].title}
                    amount={props.items[1].amount}
                    date={props.items[1].date}
                />
                <ExpenseItem
                    title={props.items[2].title}
                    amount={props.items[2].amount}
                    date={props.items[2].date}
                />
                <ExpenseItem
                    title={props.items[3].title}
                    amount={props.items[3].amount}
                    date={props.items[3].date}
                /> */}
            </Card>
        </div>
    );
}

export default Expenses;
