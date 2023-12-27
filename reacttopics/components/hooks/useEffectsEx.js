import React, { useEffect, useState } from "react";
import ChatRoom from "../atoms/chatRoom";


const UseEffectsEx = () => {
  /* useEffect hooks is called on each render , 
 to avolid the memory leak issue bcause useeffect called on every render continuously repeatedly ,
 we have secound parameter in that which is dependency array
*/

 const [chatOption , setChatOption] = useState(false)
  const [option, setOption] = useState("genral");

  

  return (
    <>
      <h2 className="text-center">"UseEffect"</h2>
      <div className="text-center">
        <label>Select an option</label>
        <select
          onChange={(e) => {
            setOption(e.target.value);
          }}
          className="border-2 mx-4"
        >
          <option value={"genral"}>genral</option>
          <option value={"music"}>music</option>
          <option value={"travel"}>travel</option>
        </select>

        <button className="bg-black btn-blue text-white" onClick={()=>{setChatOption(!chatOption)}}>{chatOption? "open Chat" : "close Chat"}</button>
        {/* {chatOption && <hr/>} */}
        {chatOption && <ChatRoom option={option}/>}
      </div>
    </>
  );
};

export default UseEffectsEx;
