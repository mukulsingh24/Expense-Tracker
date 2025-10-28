import React from "react";

const List = (props) => {
  return (
    <div>
      <h1>Expense List</h1>
      {props.expense.map((item, index) => (
        <div key={index}>
          <p>Expense Name : {item.expenseName}</p>
          <p>Expense Amount : {item.amount}</p>
          <p>Expense Type : {item.type}</p>
        </div>
      ))}
    </div>
  );
};

export default List;
