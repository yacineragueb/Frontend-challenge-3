import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const listItems = [
  {
    id: "about",
    content: 'About Us',
    href: "#about"
  },
  {
    id: "jobs",
    content: 'Jobs',
    href: '#jobs'
  },
  {
    id: "press",
    content: 'Press',
    href: '#press'
  },
  {
    id: "blog",
    content: 'Blog',
    href: 'blog'
  },
]
export default function Footer() {
  return (
    <footer className="bg-very-dark-blue text-white pt-15 md:pt-20 pb-10 md:pb-15 px-8 md:px-16 flex flex-col md:flex-row md:gap-30">
      <div className="flex flex-col mb-12 md:w-80">
        <div className=" mb-10 md:mb-5 w-fit">
          <a href="#">
            <img src="/images/logo.svg" alt="logo" className="text-white" />
          </a>
        </div>
        <div className="flex gap-4 items-center font-open mb-3 ">
          <img src="/images/icon-phone.svg" alt="phone" />
          <span>Phone: +1-543-123-4567</span>
        </div>
        <div className="flex gap-4 items-center font-open">
          <img src="/images/icon-email.svg" alt="email" />
          <span>example@fylo.com</span>
        </div>
      </div>

      <div className="flex flex-col gap-12 md:flex-row w-full justify-around md:pt-10">
        <div className="flex flex-col gap-4 font-open">
          
          <a href="#"></a>
          <a href="#"></a>
          <a href="#"></a>
        </div>
        <div className="flex flex-col gap-4 font-open">
          <a href="#">Contact Us</a>
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
        </div>
        <div className="flex gap-3 self-center md:self-start">
          <a
            href="#"
            className="border w-8 h-8 grid place-content-center rounded-full transition-colors duration-200 hover:text-[hsl(224,92%,65%)]"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="border w-8 h-8 grid place-content-center rounded-full"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="border w-8 h-8 grid place-content-center rounded-full"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}
