// import { useState } from "react";

import { useState } from "react";

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

export default function App() {
  const [email, setEmail] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const [isInvalid, setIsInvalid] = useState(null);

  const handleClick = (e) => {
    e.preventDefault();
    let input = document.getElementById('email');
    
    if(input.value.trim() === '') {
      setIsInvalid(false);
    }
  }

  const showListItems = listItems.map((item) => (
    <li key={item.id} className="flex gap-3 items-start">
      <img src="/public/assets/images/icon-list.svg" alt="icon" />
      <p className="text-blue-800">{item.content}</p>
    </li>
  ));
  return (
    <>
      {isClicked ? (
        <div className="bg-white w-full h-screen flex flex-col p-6 justify-between md:w-[500px] md:h-[470px] md:p-12 md:rounded-3xl">
          <div className="flex-1 flex flex-col justify-center">
            <img
              src="/assets/images/icon-success.svg"
              alt="icon success"
              className="w-18 mb-8"
            />
            <h1 className="text-4xl font-bold text-blue-800 w-2/3 mb-4 md:text-5xl">
              Thanks for subscribing!
            </h1>
            <p className="text-blue-800 mb-6">
              A confirmation email has been sent to{" "}
              <span className="font-bold">ash@loremcompany.com</span>. Please
              open it and click the button inside to confirm your subscription.
            </p>
          </div>
          <button className="py-4 rounded-lg bg-blue-800 text-white font-bold cursor-pointer transition duration-300 hover:bg-linear-to-r hover:from-red-400 from-30% hover:to-orange-400">
            Dismiss message
          </button>
        </div>
      ) : (
        <section className="bg-white flex flex-col mx-auto lg:w-full lg:flex-row-reverse lg:justify-between lg:items-center lg:p-6 rounded-3xl">
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
                onChange={(e) => setEmail(e.target.value)}
                className={`border py-4 pl-6 rounded-lg ${isInvalid ? 'border-red' : 'border-grey'}  mb-6 outline-blue-800 text-blue-800`}
              />
              <p className={`absolute right-0 text-[.9rem] font-bold text-red ${isInvalid ? null : 'hidden'}`}>Valid email required</p>
              <button type="submit" onClick={handleClick} className="py-4  rounded-lg bg-blue-800 text-white font-bold mb-4 cursor-pointer transition duration-300 hover:bg-linear-to-r hover:from-red-400 from-30% hover:to-orange-400">
                Subscribe to monthly newsletter
              </button>
            </form>
          </div>
        </section>
      )}
    </>
  );
}
