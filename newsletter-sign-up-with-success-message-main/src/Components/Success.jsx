export default function Success({ email, setEmail, setIsClicked }) {
  return (
    <div className="bg-white w-full h-screen flex flex-col p-6 justify-between md:w-[500px] md:h-[470px] md:p-12 md:rounded-3xl fade-in">
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
          <span className="font-bold">{email}</span>. Please open it and click
          the button inside to confirm your subscription.
        </p>
      </div>
      <button
        onClick={() => {
          setIsClicked(false);
          setEmail("");
        }}
        className="btn"
      >
        Dismiss message
      </button>
    </div>
  );
}
