import React from "react";

const List = (props) => {
  return (
    <div className="list-wrapper">
      <div className="list-container">
        <h1 className="list-title">Expenses</h1>
        <div className="list-scroll-container">
          {props.expense && props.expense.length > 0 ? (
            props.expense.map((item, index) => (
              <div key={index} className="expense-card">
                <div className="expense-details">
                  <div className="expense-name">{item.expenseName}</div>
                  <div className="expense-info">
                    <span className="expense-amount">₹{item.amount}</span>
                    <span className={`expense-type ${item.type.toLowerCase()}`}>
                      {item.type}
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="list-empty">
              <p>No expenses added yet. Start by adding your first expense!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default List;
