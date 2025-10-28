// for creating a form which user will see and eneter a expense
import {useState} from "react";

function Form({addExpense}) {
    const [expenseName,setExpense] = useState("");
    const [amount,setAmount] = useState(0);
    const [type,setType] = useState("Personal")
  return (
    <div>
      <h1>Expense Tracker Form</h1>
      <input type="text" value={expenseName} onChange={e =>setExpense(e.target.value)} placeholder="Enter Your Expense" />
      <input type="text" value={amount} onChange={e =>setAmount(e.target.value)} placeholder="Enter the Amount"/>
      <label htmlFor="cars">Type</label>
      <select name="Expense Type" value={type} onChange={e =>setType(e.target.value)}>
        <option value="Personal">Personal</option>
        <option value="Stocks">Stocks</option>
        <option value="Financial">Financial</option>
        <option value="Banking">Banking</option>
      </select>
      <button onClick={() => {
        addExpense(expenseName,amount,type); 
        setExpense("");
        setAmount(0);
        setType("Personal");
        }}>
          Add Expense</button>
    </div>
  );
}

export default Form;
