import {useState} from "react";
//let btn = document.getElementById("addBook")
export function Counter(){
    const [book,setBook] = useState(0);
    const [pens,setPens] = useState(0);
    const [notebook,setNotebook] = useState(0);
    const [Inkpen,setInkpen] = useState(0);



    const handleChange=(value)=>{
        setBook(book+value)
    }
    const handlepen=(value)=>{
        setPens(pens+value)
    }

   
    return (
        <div>
            <h1>Book{book}</h1>
    <button className="addBook"  onClick={()=>{
            handleChange(1)
        }}>
        +
    </button>

    <button className="remBook"  onClick={()=>{
            handleChange(-1)
        }}>
        -
    </button>

    <h1>pens{pens}</h1>
    <button className="addPen"  onClick={()=>{
            handlepen(1)
        }}>
        +
    </button>

    <button className="remPen"  onClick={()=>{
            handlepen(-1)
        }}>
        -
    </button>

    {/* <h1>pens{Notebook}</h1>
    <button className="addPen"  onClick={()=>{
            handlenote(1)
        }}>
        +
    </button>

    <button className="remPen"  onClick={()=>{
            handlenote(-1)
        }}>
        -
    </button>
    */}
        </div>
    )
}