import { useEffect, useState } from "react";

const NavItems = [
  {
    id: "item-1",
    title: "Features",
    href: "#features",
  },
  {
    id: "item-2",
    title: "Team",
    href: "#team",
  },
  {
    id: "item-3",
    title: "Sign In",
    href: "#sign",
  },
];

const showNav = NavItems.map((item) => (
  <li key={item.id} className="text-very-dark-blue font-raleway transition-colors duration-200 hover:text-bright-blue">
    <a href={item.href}>{item.title}</a>
  </li>
));

export default function Header() {
  const [isScroller, setIsScroller] = useState(false);

  useEffect(() => {

    // // Using debounce to reduce the number of state updates and improve performance
    // This prevents excessive re-renders caused by frequent scroll events
    let timeout;

    const handleScroller = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setIsScroller(window.scrollY > 10);
      }, 200);
    };

    window.addEventListener("scroll", handleScroller);

    return () => {
      window.removeEventListener("scroll", handleScroller);
      clearTimeout(timeout);
    };
  }, []);
  return (
    <header
      className={`${
        isScroller && "shadow-2xs"
      } h-[15vh] bg-white flex justify-between items-center w-full px-5 md:px-16 fixed top-0 z-50`}
    >
      <a href="#"><img src="/images/logo.svg" alt="logo" className="w-25 md:w-auto" /></a>
      <nav>
        <ul className="flex gap-5 sm:gap-10">{showNav}</ul>
      </nav>
    </header>
  );
}
