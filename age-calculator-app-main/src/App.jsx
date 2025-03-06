import React, { useState } from "react";
import Input from "./Components/Input";

function validateInputs(obj, setErrors) {
  let newErrors = {};
  let date = new Date();

  if (!obj.day) newErrors.day = "This field is required";
  if (!obj.month) newErrors.month = "This field is required";
  if (!obj.year) newErrors.year = "This field is required";

  if (obj.day && (obj.day < 1 || obj.day > 31))
    newErrors.day = "Must be a valid day";
  if (obj.month && (obj.month < 1 || obj.month > 12))
    newErrors.month = "Must be a valid month";
  if (obj.year && obj.year > date.getFullYear())
    newErrors.year = "Must be in the past";

  if (Object.keys(newErrors).length > 0) {
    setErrors((prevErrors) => ({ ...prevErrors, ...newErrors }));
    return;
  }

  return true;
}

export default function App() {
  const [userDate, setUserDate] = useState({ day: "", month: "", year: "" });
  const [errors, setErrors] = useState({ day: "", month: "", year: "" });

  const handleOnChange = (name, value) => {
    if (isNaN(value)) {
      setErrors((prev) => ({ ...prev, [name]: "Please enter a number." }));
    } else {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
    setUserDate((prev) => ({ ...prev, [name]: value }));
  };

  const handleClick = () => {
    let isValid = validateInputs(userDate, setErrors);

    if (!isValid) return;
  };

  return (
    <section className=" px-6 py-8 md:p-10 overflow-hidden bg-white mt-20 md:mt-0 w-[90%] mx-auto rounded-t-3xl rounded-bl-3xl rounded-br-[5rem] md:rounded-br-[10rem] md:w-170">
      <div className="flex flex-col">
        <div className="flex space-x-4 md:w-[80%]">
          <Input
            label={"DAY"}
            placeholder={"DD"}
            name={"day"}
            value={userDate.day}
            onChange={handleOnChange}
            error={errors.day}
          />
          <Input
            label={"MONTH"}
            placeholder={"MM"}
            name={"month"}
            value={userDate.month}
            onChange={handleOnChange}
            error={errors.month}
          />
          <Input
            label={"YEAR"}
            placeholder={"YYYY"}
            name={"year"}
            value={userDate.year}
            onChange={handleOnChange}
            error={errors.year}
          />
        </div>

        <div className="relative h-[2px] bg-light-grey my-10 md:mt-8 md:mb-12">
          <div
            onClick={handleClick}
            className="bg-purple w-14 md:w-20 h-14 md:h-20 rounded-full grid place-items-center absolute top-1/2 -translate-y-1/2 left-1/2 md:left-auto md:right-0 -translate-x-1/2 md:translate-x-0 transition-colors duration-200 hover:bg-black cursor-pointer"
          >
            <img
              src="/images/icon-arrow.svg"
              alt="arrow"
              className="w-6 md:w-10"
            />
          </div>
        </div>

        <div className="flex flex-col mt-4 md:mt-0">
          <div className="flex gap-2 text-5xl md:text-7xl font-extraBold-italic">
            <span className="text-purple">--</span>
            <span>years</span>
          </div>
          <div className="flex gap-2 text-5xl md:text-7xl font-extraBold-italic">
            <span className="text-purple">--</span>
            <span>months</span>
          </div>
          <div className="flex gap-2 text-5xl md:text-7xl font-extraBold-italic">
            <span className="text-purple">--</span>
            <span>days</span>
          </div>
        </div>
      </div>
    </section>
  );
}
