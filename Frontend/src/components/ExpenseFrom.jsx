import { useState } from "react";

function Form({ addExpense }) {
  const [expenseName, setExpense] = useState("");
  const [amount, setAmount] = useState();
  const [type, setType] = useState("");
  return (
    <div className="form-wrapper">
      <div className="form-container">
        <h1 className="form-title">Expense Tracker</h1>
        <div className="form-group-custom">
          <label htmlFor="expenseName">Expense Name</label>
          <input
            id="expenseName"
            type="text"
            value={expenseName}
            onChange={(e) => setExpense(e.target.value)}
            placeholder="Enter your expense"
          />
        </div>
        <div className="form-group-custom">
          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter the amount"
          />
        </div>
        <div className="form-group-custom">
          <label htmlFor="expenseType">Category</label>
          <select
            id="expenseType"
            name="Expense Type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="Personal">Personal</option>
            <option value="Stocks">Stocks</option>
            <option value="Financial">Financial</option>
            <option value="Banking">Banking</option>
            <option value="Food">Food</option>
            <option value="Travel">Travel</option>
            <option value="Bills">Bills</option>
            <option value="Health">Health</option>
          </select>
        </div>
        <button
          className="btn-add"
          onClick={() => {
            addExpense(expenseName, amount, type);
            setExpense("");
            setAmount();
            setType("Personal");
          }}
        >
          Add Expense
        </button>
      </div>
    </div>
  );
}

export default Form;
