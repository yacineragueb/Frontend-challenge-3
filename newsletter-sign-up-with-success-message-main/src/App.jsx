import { useState } from "react";
import Success from "./Components/Success";

const listItems = [
  {
    id: "item-1",
    content: "Product discovery and building what matters",
  },
  {
    id: "item-2",
    content: "Measuring to ensure updates are a success",
  },
  {
    id: "item-3",
    content: "And much more!",
  },
];

const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

export default function App() {
  const [email, setEmail] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value);
    if(emailPattern.test(e.target.value)) {
      setIsInvalid(false);
    }
  }

  const handleClick = (e) => {
    e.preventDefault();

    if (!email.trim() || !emailPattern.test(email)) {
      setIsInvalid(true);
    } else {
      setIsClicked(true);
    }
  };

  const showListItems = listItems.map((item) => (
    <li key={item.id} className="flex gap-3 items-start">
      <img src="/assets/images/icon-list.svg" alt="icon" />
      <p className="text-blue-800">{item.content}</p>
    </li>
  ));
  return (
    <>
      {isClicked ? (
        <Success email={email} setEmail={setEmail} setIsClicked={setIsClicked}/>
      ) : (
        <section className="bg-white flex flex-col mx-auto lg:w-full lg:flex-row-reverse lg:justify-between lg:items-center lg:p-6 lg:rounded-3xl">
          <div className="mx-auto lg:mx-0">
            <picture>
              <source
                srcSet="/assets/images/illustration-sign-up-desktop.svg"
                type="image/svg+xml"
                media="(min-width: 1024px)"
              />
              <img
                src="/assets/images/illustration-sign-up-mobile.svg"
                alt="sign up image"
              />
            </picture>
          </div>

          <div className="p-6 flex flex-col sm:items-center lg:items-start lg:p-10">
            <h1 className="text-3xl font-bold text-blue-800 lg:text-6xl">
              Stay updated!
            </h1>
            <p className="my-4 text-blue-800 lg:w-[90%]">
              Join 60,000+ product managers receiving monthly updates on:
            </p>
            <ul className="space-y-3 mb-10">{showListItems}</ul>
            <form className=" flex flex-col relative w-full sm:w-[80%] lg:w-full">
              <label
                htmlFor="email"
                className="text-[.9rem] text-blue-800 font-bold mb-2"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                placeholder="email@company.com"
                value={email}
                onChange={handleChange}
                className={`border py-4 pl-6 rounded-lg ${
                  isInvalid ? "border-red bg-red/15 text-red" : "border-grey"
                } outline-none mb-6 text-blue-800`}
              />
              <p
                className={`absolute right-0 text-[.9rem] font-bold text-red ${
                  isInvalid ? null : "hidden"
                }`}
              >
                Valid email required
              </p>
              <button
                type="submit"
                onClick={handleClick}
                className="btn mb-4"
              >
                Subscribe to monthly newsletter
              </button>
            </form>
          </div>
        </section>
      )}
    </>
  );
}
