import React, { useState } from "react";
import Product from "../atoms/useCallbackAtoms/product";

const UseCallBackEx = () => {
    const[checkTheme , setCheckedTheme] = useState(false)
  return (
    <div className="text-center">
        
    <h2>"UseCallBack"</h2>
      <input type="checkbox" onChange={()=>{setCheckedTheme(!checkTheme)}}/> <label>Do you want to chnage the theme</label>

      <Product theme={checkTheme? "bg-black" : ""}/>
    </div>
  );
};

export default UseCallBackEx;
