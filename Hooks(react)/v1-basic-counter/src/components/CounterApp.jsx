import { useState } from "react";

const Counterapp = () => {
const[count,setcount] = useState(0);
     function inc(){
        setcount(count+1)
     }

     function dec(){
       setcount(count-1)
     }
  return (
    <div style={{border:'2px solid red',height:'300px',width:'300px'}}>
      <h3>Counter</h3>
      <button onClick={inc}>ADD+</button><br />
      <span>{count}</span>
      <br />
      <button onClick={dec}>SUB-</button>
    </div>
  );
}
export default Counterapp