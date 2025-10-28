// for creating a form which user will see and eneter a expense
import {useState} from "react";

function Form() {
    const [expense,setExpense] = useState("");
    const [amount,setAmount] = useState(0);
    const [type,setType] = useState("Personal")
  return (
    <div>
      <h1>Expense Tracker Form</h1>
      <input type="text" placeholder="Enter Your Expense" />
      <input type="text" placeholder="Enter the Amount"/>
      <label for="cars">Type</label>
      <select name="Expense Type">
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
