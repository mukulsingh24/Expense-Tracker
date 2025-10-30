import {useState,useEffect} from "react";
function Item(props){
    const [edit,setEdit] = useState("")
    return(
        <div>
            <h1>Expese Items</h1>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    )
}

export default Item