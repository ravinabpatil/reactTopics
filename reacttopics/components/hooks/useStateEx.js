import React, { useState } from "react";

const UseStateEx = () => {
  /* useState is used to store the initial data ,
     we can update the initial data on the action when we want , on that action we update the data by using the state function,
     as in the state the while updating the state we can get the previous value as well and in return by using the previous value we can get new value     
    */

    // Question :-  To get the previous value of state why we need to add the function inside state function

  const [count, setCount] = useState(1);
  return (

    <>
    <div className="text-center py-4">
      <h2>"UseState"</h2>
      Count: {count}
      <br />
      <button
        className="bg-green-300 btn-blue"
        onClick={() => setCount((prev) => prev + 1)}
        // onClick={() => setCount(prev + 1)}
      >
        +
      </button>
      <button className="bg-blue-300 mx-2 btn-blue" onClick={() => setCount(1)}>
        Reset
      </button>
      <button
        className="bg-red-300 btn-blue"
        onClick={() => setCount((prev) => prev - 1)}
      >
        -
      </button>
    </div>

    </>
  );
};

export default UseStateEx;
