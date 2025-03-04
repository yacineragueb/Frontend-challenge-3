export default function Clipboard() {
  return (
    <section className="mt-10 mb-30">
      <div className="flex flex-col items-center">
        <h2>Clipboard for iOS and Mac OS</h2>
        <p className="description mb-10">
          Available for free on the App Store. Download for Mac or iOS, sync
          with iCloud and you’re ready to start adding to your clipboard.
        </p>
        <div className="flex flex-col gap-7 w-full md:flex-row md:justify-center">
          <a
            href="#"
            className="btn bg-strong-cyan shadow-[0_4px_0_hsl(171,90%,33%),0_8px_20px_hsla(171,66%,44%,0.3)] hover:bg-[hsl(171,75%,47%)]"
          >
            Download for iOS
          </a>
          <a
            href="#"
            className="btn bg-light-blue shadow-[0_4px_0_hsl(233,72%,56%)] hover:bg-[hsl(233,100%,73%)]"
          >
            Download for Mac
          </a>
        </div>
      </div>
    </section>
  );
}
