import { useRef, useState } from "react";

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export default function Access() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const formRef = useRef(null);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !emailPattern.test(email.trim())) {
      setError(true);
      return;
    }
    setError(false);
    formRef.current.submit();
  };
  return (
    <section className="px-8 md:px-16 py-20 bg-desaturated-blue text-white flex flex-col md:flex-row items-center md:gap-10 lg:gap-45">
      <div className="flex flex-col items-center text-center md:text-left md:items-start ">
        <h1 className="text-xl font-raleway font-bold mb-4 md:text-3xl">
          Get early access today
        </h1>
        <p className="font-open text-[.9rem] md:text-base mb-6 md:w-[85%] ">
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
      </div>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-col gap-y-3 lg:gap-x-4 lg:w-[85%] w-full"
      >
        <div className="flex flex-col gap-2 lg:flex-2/3">
          <input
            value={email}
            onChange={handleChange}
            type="email"
            placeholder="email@example.com"
            className={`bg-white  ${
              error ? "border border-red-500" : "border-very-dark-blue"
            } text-very-dark-blue shadow-lg w-full md:w-[90%] rounded-sm py-3 px-6 outline-none placeholder:font-raleway placeholder:text-light-gray font-open`}
          />
          {error && (
            <p className="text-white text-sm">Please Check your email.</p>
          )}
        </div>
        <button
          type="submit"
          className="btn md:self-start md:w-[90%] lg:w-[40%]"
        >
          Get Started For Free
        </button>
      </form>
    </section>
  );
}
