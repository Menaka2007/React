import { useRef } from "react";
function Useref(){
    const inputRef=useRef();
    const handleFocus=()=>{
        inputRef.current.focus();
    };
    const handleColor=()=>{
        inputRef.current.style.backgroundColor="yellow";   
    }
    return(
        <div>
            <input ref={inputRef} type="text" placeholder="INPUT BOX"/>
            <button onClick={handleFocus}>Focus Input</button>
            <button onClick={handleColor}>Change Background color</button>
        </div>
    )
}
export default Useref;