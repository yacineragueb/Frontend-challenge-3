export default function Hero() {
  return (
    <section className="mt-[10vh] border px-5 pt-20 pb-10">
      <div>
        <div>
          <img src="/images/illustration-1.svg" alt="illustration" />
        </div>
        <div>
          <h1 className="text-center text-2xl text-very-dark-blue font-bold font-open mb-4">All your files in one secure location, accessible anywhere.</h1>
          <p className="text-center text-very-dark-blue mb-8">
            Fylo stores your most important files in one secure location. Access
            them wherever you need, share and collaborate with friends, family,
            and co-workers.
          </p>

          <form className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <input type="email" placeholder="Enter your email..." className="border border-very-dark-blue w-full rounded-sm py-3 px-6 outline-none placeholder:font-raleway placeholder:text-light-gray font-open" />
              {/* <p className="text-pink-600 text-sm">Check your email.</p> */}
            </div>
            <button type="submit" className="bg-bright-blue text-white font-bold font-raleway py-3 rounded-sm shadow-lg cursor-pointer">Get Started</button>
          </form>
        </div>
      </div>
    </section>
  );
}
