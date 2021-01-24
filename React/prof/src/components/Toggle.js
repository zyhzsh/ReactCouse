import { motion } from "framer-motion";
import { useState } from "react";

const Toggle=({children,title})=>{
    const [Toggle,setToogle]=useState(true);
    return(
        <motion.div layout className="question" onClick={()=>setToogle(!Toggle)}>
            <motion.h4 layout>{title}</motion.h4>
            {Toggle?children:""}
            <div className="faq-line"></div>
        </motion.div>
    )
}
export default Toggle;