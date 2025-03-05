export default function Hero() {
  return (
    <section className="flex items-center justify-center py-25 md:pt-45 mb-10">
      <picture>
        <source
          srcSet="/images/bg-header-desktop.png"
          media="(min-width: 1024px) "
        />
        <img
          src="/images/bg-header-mobile.png"
          alt="mobile"
          className="absolute inset-0 object-cover w-full -z-50"
        />
      </picture>
      <div className="flex flex-col items-center">
        <img src="/images/logo.svg" alt="logo" className="w-30 mb-14" />
        <h1 className="text-3xl lg:text-4xl text-dark-grayish-blue font-bai text-center font-bold mb-4">
          A history of everything you copy
        </h1>
        <p className="text-grayish-blue text-center text-[16px] mb-8 lg:mb-10 lg:w-2/3">
          Clipboard allows you to track and organize everything you copy.
          Instantly access your clipboard on all your devices.
        </p>
        <div className="flex flex-col gap-7 w-full md:flex-row md:justify-center">
          <a
            href="#"
            className="btn bg-strong-cyan shadow-[0_3px_0_hsl(171,85%,37%),0_8px_20px_hsla(171,66%,44%,0.3)] hover:bg-[hsl(171,75%,47%)]"
          >
            Download for iOS
          </a>
          <a
            href="#"
            className="btn bg-light-blue shadow-[0_3px_0_hsl(233,72%,56%)] hover:bg-[hsl(233,100%,73%)]"
          >
            Download for Mac
          </a>
        </div>
      </div>
    </section>
  );
}
