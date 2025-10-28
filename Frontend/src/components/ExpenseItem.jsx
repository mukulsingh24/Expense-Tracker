import {useState,useEffect} from "react";

function Item(props){
    const [edit,setEdit] = useState("")
    return(
        <div>
            <h1>Expense Items</h1>
            <button onClick={() => {
                setEdit({props.value})
            }}>Edit Expense</button>
            <button onClick={() =>{
                setEdit("")
            }}>Delete Expense</button>
        </div>
    )
}

export default Item