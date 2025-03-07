import { useEffect, useState } from "react";
import Input from "./Components/Input";
import validateInputs from "./utils/validateInputs";

export default function App() {
  const [userDate, setUserDate] = useState({ day: "", month: "", year: "" });
  const [errors, setErrors] = useState({ day: "", month: "", year: "" });
  const [years, setYears] = useState("--");
  const [months, setMonths] = useState("--");
  const [days, setDays] = useState("--");
  const [isCounting, setIsCounting] = useState(false);

  const handleOnChange = (name, value) => {
    if (isNaN(value)) {
      setErrors((prev) => ({ ...prev, [name]: "Please enter a number." }));
    } else {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
    setUserDate((prev) => ({ ...prev, [name]: value }));

    setIsCounting(false);
  };

  const handleClick = () => {
    let isValid = validateInputs(userDate, setErrors);

    if (!isValid) return;

    setTimeout(() => {
      const currentDate = new Date();

      const currentYear = currentDate.getFullYear();
      const currentMonth = currentDate.getMonth() + 1;
      const currentDay = currentDate.getDate();

      let birthDay = parseInt(userDate.day);
      let birthMonth = parseInt(userDate.month);
      let birthYear = parseInt(userDate.year);

      if (isNaN(birthYear) || isNaN(birthMonth) || isNaN(birthDay)) {
        return;
      }

      let yearsOfAge = currentYear - birthYear;
      let monthsOfAge = currentMonth - birthMonth;
      let daysOfAge = currentDay - birthDay;

      if (monthsOfAge < 0) {
        yearsOfAge--;
        monthsOfAge += 12;
      }

      if (daysOfAge < 0) {
        monthsOfAge--;

        let previousMonth = currentMonth - 1;
        if (previousMonth === 0) previousMonth = 12;
        const daysInPreviousMonth = new Date(
          currentYear,
          previousMonth,
          0
        ).getDate();
        daysOfAge += daysInPreviousMonth;
      }

      console.log("Final values:", { yearsOfAge, monthsOfAge, daysOfAge });

      setYears(yearsOfAge);
      setMonths(monthsOfAge);
      setDays(daysOfAge);
      setIsCounting(true);
    }, 300);
  };

  const Counter = ({ value, isCounting }) => {
    const [count, setCount] = useState("--");

    useEffect(() => {
      if (!isCounting) {
        setCount("--");
        return;
      }

      let start = 0;
      const duration = 700;
      const stepTime = Math.max(duration / value, 20);

      setCount(0);

      const timer = setInterval(() => {
        setCount(start);
        if (start >= value) clearInterval(timer);
        start += 1;
      }, stepTime);

      return () => clearInterval(timer);
    }, [value, isCounting]);

    return <span className="text-purple">{count}</span>;
  };

  return (
    <section className=" px-6 py-8 md:p-14 overflow-hidden bg-white mt-20 md:mt-0 w-[90%] mx-auto rounded-t-3xl rounded-bl-3xl rounded-br-[5rem] md:rounded-br-[10rem] md:w-200">
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

        <div className="flex flex-col mt-4 md:mt-0 space-y-3">
          <div className="flex gap-2 text-5xl md:text-8xl font-extraBold-italic">
            <Counter value={years} isCounting={isCounting} />
            <span>years</span>
          </div>
          <div className="flex gap-2 text-5xl md:text-8xl font-extraBold-italic">
            <Counter value={months} isCounting={isCounting} />
            <span>months</span>
          </div>
          <div className="flex gap-2 text-5xl md:text-8xl font-extraBold-italic">
            <Counter value={days} isCounting={isCounting} />
            <span>days</span>
          </div>
        </div>
      </div>
    </section>
  );
}
