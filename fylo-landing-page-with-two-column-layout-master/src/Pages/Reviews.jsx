export default function Reviews() {
  return (
    <section className="px-5 md:px-16 relative border bg-[hsl(240,75%,98.43%)] pt-10 pb-25">
      <picture className="absolute inset-x-0 bottom-full w-full">
        <source
          srcSet="/images/bg-curve-desktop.svg"
          type="image/svg+xml"
          media="(min-width: 390px)"
        />
        <img
          src="/images/bg-curve-mobile.svg"
          alt="#"
          className="w-full h-auto object-cover"
        />
      </picture>
      <div className="flex flex-col gap-20 lg:flex-row-reverse lg:items-center">
        <div>
          <img src="/images/illustration-2.svg" alt="illustration" />
        </div>

        <div className="flex flex-col items-center lg:items-start">
          <h2 className="text-[1.1rem] lg:text-[2.4rem] font-bold font-raleway text-very-dark-blue mb-6">
            Stay productive, wherever you are
          </h2>
          <p className="text-desaturated-blue mb-4 lg:w-[80%]">
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </p>
          <p className="text-desaturated-blue mb-10 lg:mb-4 lg:w-[80%]">
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required!
          </p>

          <a
            href="#"
            className="text-moderate-cyan flex gap-2 border-b-2 pb-2 mb-12 transition-colors duration-200 hover:text-[hsl(170,54%,50%)]"
          >
            See how Fylo works{" "}
            <img src="/images/icon-arrow.svg" alt="arrow" className="w-6" />
          </a>

          <div className="flex flex-col bg-white rounded-md shadow-[0_0_8px_hsla(238,22%,44%,0.1)] p-8 lg:w-[65%]">
            <img
              src="/images/icon-quotes.svg"
              alt="quotes"
              className="self-start mb-3"
            />
            <p className="text-very-dark-blue mb-4 text-[.875rem] leading-6">
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <div className="flex gap-3 items-center">
              <img
                src="/images/avatar-testimonial.jpg"
                alt="avatar"
                className="w-12 h-12 rounded-full "
              />
              <div>
                <h3 className="font-bold text-very-dark-blue font-raleway text-[.9rem]">
                  Kyle Burton
                </h3>
                <span className="text-very-dark-blue text-[.825rem]">
                  Founder & CEO, Huddle
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
