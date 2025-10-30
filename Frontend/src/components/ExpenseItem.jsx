import {useState,useEffect} from "react";
function Item(props){
    const [edit,setEdit] = useState("")
    return(
        <div className="expense-actions">
            <button className="btn-edit">Edit</button>
            <button className="btn-delete">Delete</button>
        </div>
    )
}

export default Item