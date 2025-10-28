// for creating a form which user will see and eneter a expense
import {useState} from "react";

function Form() {
    const [expense,setExpense] = useState("");
    const [amount,setAmount] = useState(0);
    const [type,setType] = useState("Personal")

    const updateExpense = (e) =>{
        setExpense(e.target.value)
    }

    const updateAmount = (e) =>{
        setAmount(e.target.value)
    }

    const updateType = (e) =>{
        setType(e.target.value)
    }
  return (
    <div>
      <h1>Expense Tracker Form</h1>
      <input type="text" value={expense} onChange={updateExpense} placeholder="Enter Your Expense" />
      <input type="text" value={amount} onChange={updateAmount} placeholder="Enter the Amount"/>
      <label htmlfor="cars">Type</label>
      <select name="Expense Type" value={type} onChange={updateType}>
        <option value="Personal">Personal</option>
        <option value="Stocks">Stocks</option>
        <option value="Financial">Financial</option>
        <option value="Banking">Banking</option>
      </select>
      <button>Submit</button>


    </div>
  );
}

export default Form;
