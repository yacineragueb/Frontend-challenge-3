import { useState } from "react";
import Skeleton from "./Components/Skeleton";
import axios from "axios";
import { useEffect } from "react";

export default function App() {
  const [advice, setAdvice] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchQuote = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(import.meta.env.VITE_API_URL);
      setAdvice(res.data.slip);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <>
      {isLoading ? (
        <Skeleton />
      ) : (
        <section className="w-[90%] max-w-130 mx-auto flex flex-col items-center shadow-2xl bg-Dark-grayish-blue px-6 pt-10 pb-15 rounded-xl mt-26 md:mt-0 relative">
          <h5 className="text-Neon-green tracking-[4px] text-[10px] md:text-sm font-bold">
            ADVICE #{advice.id}
          </h5>
          <q className="text-[1.75rem] text-light-cyan font-bold text-center my-6">
            {advice ? advice.advice : "No quote available"}
          </q>
          <picture>
            <source
              srcSet="/images/pattern-divider-desktop.svg"
              type="image/svg+xml"
              media="(min-width: 640px)"
            />
            <img src="/images/pattern-divider-mobile.svg" alt="divider" />
          </picture>

          <div
            onClick={fetchQuote}
            className="absolute top-full -translate-y-1/2 w-15 h-15 rounded-full grid place-content-center bg-Neon-green cursor-pointer transition-shadow duration-200 hover:shadow-[0_0_5px_hsl(150,100%,66%),0_0_10px_hsl(150,100%,70%)] ease-in"
          >
            <img src="/images/icon-dice.svg" alt="dice" />
          </div>
        </section>
      )}
    </>
  );
}
