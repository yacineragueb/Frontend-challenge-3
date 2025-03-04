const ListItems = [
  {
    id: "Li-1",
    title: "Quick Search",
    content:
      "Easily search your snippets by content, category, web address, application, and more.",
  },
  {
    id: "Li-2",
    title: "iCloud Sync",
    content: "Instantly saves and syncs snippets across all your devices.",
  },
  {
    id: "Li-3",
    title: "Complete History",
    content:
      "Retrieve any snippets from the first moment you started using the app.",
  },
];

export default function Snippets() {
  const showListItems = ListItems.map((item) => (
    <li key={item.id}>
      <h3>{item.title}</h3>
      <p className="text-[16px] text-grayish-blue lg:w-4/7">{item.content}</p>
    </li>
  ));
  return (
    <section className="min-h-screen mb-20 lg:pt-10 border">
      <div className="flex flex-col items-center">
        <h2>Keep track of your snippets</h2>
        <p className="description mb-14">
          Clipboard instantly stores any item you copy in the cloud, meaning you
          can access your snippets immediately on all your devices. Our Mac and
          iOS apps will help you organize everything.
        </p>

        <div className="flex flex-col gap-12 lg:gap-25 lg:flex-row lg:items-center">
          <div>
            <img src="/public/images/image-computer.png" alt="computer" />
          </div>
          <div className="text-center lg:text-left">
            <ul className="space-y-8 lg:space-y-12">
              {showListItems}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
