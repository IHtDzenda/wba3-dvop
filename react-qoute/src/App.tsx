import { useState } from "react";

function App() {
  const [quote, setQuote] = useState("Quote of the day is:");
  const [isLoading, setIsLoading] = useState(false);
  const getQuote = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("https://dummyjson.com/quotes/random");
      const data = await response.json();
      setQuote("Quote of the day is: " + data.quote);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching quote:", error);
      setQuote("Could not fetch quote.");
    }
  };


  return (
    <div>
      <h1>Quote</h1>
      <p>{isLoading ? "Loading..." : quote}</p>
      <button onClick={getQuote}>Get Quote</button>
    </div>
  );
}

export default App;
