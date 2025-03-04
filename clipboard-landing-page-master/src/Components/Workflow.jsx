const workflows = [
  {
    id: "workflow-1",
    iconSrc: "/images/icon-blacklist.svg",
    iconAlt: "blacklist icon",
    title: "Create blacklists",
    content:
      "Ensure sensitive information never makes its way to your clipboard by excluding certain sources.",
  },
  {
    id: "workflow-2",
    iconSrc: "/images/icon-text.svg",
    iconAlt: "text icon",
    title: "Plain text snippets",
    content:
      "Remove unwanted formatting from copied text for a consistent look.",
  },
  {
    id: "workflow-3",
    iconSrc: "/images/icon-preview.svg",
    iconAlt: "preview icon",
    title: "Sneak preview",
    content: "Quick preview of all snippets on your Clipboard for easy access.",
  },
];

export default function Workflow() {
  const showWorkflows = workflows.map((item) => (
    <div key={item.id} className="flex flex-col items-center md:flex-1">
      <img src={item.iconSrc} alt={item.iconAlt} className="mb-8" />
      <h3 className="mb-4">{item.title}</h3>
      <p className="text-[16px] text-grayish-blue text-center">
        {item.content}
      </p>
    </div>
  ));
  return (
    <section className="min-h-screen lg:pt-10 mb">
      <div className="flex flex-col items-center">
        <h2>Supercharge your workflow</h2>
        <p className="description mb-20">
          We’ve got the tools to boost your productivity.
        </p>
        <div className="flex flex-col md:gap-20">
          <div className="flex flex-col gap-15 md:flex-row lg:px-30 lg:gap-10 lg:items-stretch">
            {showWorkflows}
          </div>
          <div className="flex flex-col items-center py-25 gap-16 lg:gap-30 md:flex-row md:flex-wrap md:justify-center">
            <img src="/images/logo-google.png" alt="google" />
            <img src="/images/logo-ibm.png" alt="ibm" />
            <img src="/images/logo-microsoft.png" alt="microsoft" />
            <img src="/images/logo-hp.png" alt="hp" />
            <img src="/images/logo-vector-graphics.png" alt="vector graphics" />
          </div>
        </div>
      </div>
    </section>
  );
}
