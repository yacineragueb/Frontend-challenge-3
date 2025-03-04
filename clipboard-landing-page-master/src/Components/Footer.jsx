export default function Footer() {
  return (
    <footer className="flex flex-col px-6 md:flex-row items-center md:justify-around py-10 gap-10 bg-grayish-blue/10">
      <div className="flex flex-col items-center gap-8 md:flex-row md:gap-35">
        <a href="#" className="w-15">
          <img src="/images/logo.svg" alt="logo" />
        </a>
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-25 text-dark-grayish-blue">
          <div className="flex flex-col gap-4 items-center md:items-start">
            <a href="#" className="transition-colors duration-200 hover:text-strong-cyan">FAQs</a>
            <a href="#" className="transition-colors duration-200 hover:text-strong-cyan">Contact Us</a>
          </div>
          <div className="flex flex-col gap-4 items-center md:items-start">
            <a href="#" className="transition-colors duration-200 hover:text-strong-cyan">Privacy Policy</a>
            <a href="#" className="transition-colors duration-200 hover:text-strong-cyan">Press Kit</a>
          </div>
          <a href="#" className="self-center md:self-start transition-colors duration-200 hover:text-strong-cyan">
            Install Guide
          </a>
        </div>
      </div>
      <div className="flex gap-8">
        <a href="#">
          <img src="/images/icon-facebook.svg" alt="facebook" />
        </a>
        <a href="#">
          <img src="/images/icon-twitter.svg" alt="twitter" />
        </a>
        <a href="#">
          <img src="/images/icon-instagram.svg" alt="instagram" />
        </a>
      </div>
    </footer>
  );
}
