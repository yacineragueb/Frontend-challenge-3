export default function App() {
  return (
    <section>
      <h5>ADVICE #177</h5>
      <p>
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat maxime
        praesentium nam a amet recusandae repellat."
      </p>
      <picture>
        <source
          srcSet="/images/pattern-divider-desktop.svg"
          type="image/svg+xml"
          media="(min-width: 640px)"
        />
        <img src="/images/pattern-divider-mobile.svg" alt="divider" />
      </picture>
    </section>
  );
}
