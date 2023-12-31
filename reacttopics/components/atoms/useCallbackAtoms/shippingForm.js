import React, { useState } from "react";
import InputField from "./inputField";
import Label from "./label";

const ShippingForm = ({ theme }) => {
  const [count, setCount] = useState(1);
  const [formdata, setFormData] = useState({});

  const handleSubmit = () => {

  };
  //   console.log("formdata" , formdata)
  const handleOnChange = (name, value) => {
    setFormData((prev) => {
      return { ...prev, [name]: value };
      /* Question :- can use please explain return { ...prev, name: value }; when i used these was not able to get response , 
      by using these how was able to get proper response */
    });
  };
  console.log("count", count);
  return (
    <div className={`${theme} py-2`}>
      <div>
        <label>Number Of Items</label>
        <button
          onClick={() => {
            setCount((prev) => {
              return prev - 1;
            });
          }}
          className="bg-greem-300 p-2 text-base"
        > -
        </button>
        {count}
        <button
          onClick={() => {
            setCount((prev) => {
              return prev + 1;
            });
          }}
          className="bg-greem-300 p-2 text-base"
        >
          +
        </button>
      </div>
      <div>
        <Label label={"Street "} />
        <InputField
          type={"text"}
          className={"border-2"}
          name={"street"}
          value={formdata.street}
          onchange={(e) => {
            handleOnChange(e.target.name, e.target.value);
          }}
        />
      </div>

      <div>
        <Label label={"Street "} />
        <InputField
          type={"text"}
          className={"border-2 my-2"}
          name={"city"}
          value={formdata.city}
          onchange={(e) => {
            handleOnChange(e.target.name, e.target.value);
          }}
        />
      </div>

      <div>
        <Label label={"Postal Code "} />
        <InputField
          type={"text"}
          className={"border-2"}
          name={"postalCode"}
          value={formdata.postalCode}
          onchange={(e) => {
            handleOnChange(e.target.name, e.target.value);
          }}
        />
      </div>
      <div>
        <button
          className="bg-green-300 p-2 w-[10em] rounded my-2 text-base text-white "
          onClick={() => {
            handleSubmit();
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ShippingForm;
