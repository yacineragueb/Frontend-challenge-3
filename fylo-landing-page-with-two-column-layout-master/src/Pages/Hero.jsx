export default function Hero() {
  return (
    <section className="mt-[10vh] mb-26 lg:mb-46 px-5 md:px-16 pt-20 pb-10">
      <div className="flex flex-col lg:flex-row-reverse lg:items-center">
        <div className="lg:flex-1">
          <img src="/images/illustration-1.svg" alt="illustration" />
        </div>
        <div className="lg:flex-1">
          <h1 className="text-center lg:text-left text-2xl lg:text-[2.8rem] text-very-dark-blue font-bold font-open lg:font-raleway mb-4">All your files in one secure location, accessible anywhere.</h1>
          <p className="text-center lg:text-left text-very-dark-blue mb-8 lg:text-[1.3rem] lg:leading-7 lg:pr-10">
            Fylo stores your most important files in one secure location. Access
            them wherever you need, share and collaborate with friends, family,
            and co-workers.
          </p>

          <form className="flex flex-col gap-y-5 lg:gap-x-4 lg:flex-row lg:w-[85%]">
            <div className="flex flex-col gap-2 lg:flex-2/3">
              <input type="email" placeholder="Enter your email..." className="border border-very-dark-blue w-full rounded-sm py-3 px-6 outline-none placeholder:font-raleway placeholder:text-light-gray font-open" />
              {/* <p className="text-pink-600 text-sm">Check your email.</p> */}
            </div>
            <button type="submit" className="lg:flex-1/2 bg-bright-blue text-white font-bold font-raleway py-3 rounded-sm shadow-lg cursor-pointer">Get Started</button>
          </form>
        </div>
      </div>
    </section>
  );
}
