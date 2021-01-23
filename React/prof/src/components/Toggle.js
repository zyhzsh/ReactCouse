import { useState } from "react";

const Toggle=({children})=>{
    const [Toggle,setToogle]=useState(true);
    return(
        <div onClick={()=>setToogle(!Toggle)}>
            {Toggle?children:""}
        </div>
    )
}
export default Toggle;