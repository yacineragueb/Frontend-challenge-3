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
  <li key={item.id} className="text-very-dark-blue font-raleway">
    <a href={item.href}>{item.title}</a>
  </li>
));

export default function Header() {
  return (
    <header className="border h-[10vh] bg-white flex justify-between items-center w-full px-5 md:px-16 fixed top-0 z-50">
      <img src="/images/logo.svg" alt="logo" className="w-25 lg:w-30" />
      <nav>
        <ul className="flex gap-5 sm:gap-10">{showNav}</ul>
      </nav>
    </header>
  );
}
