import "./App.css";
import { useState } from "react";
import { Card } from "./components";
import useCurrencyConverter from "./hooks/useCurrencyConvertor";
function App() {
  const [ammount, setAmmount] = useState('0');
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmmount, setConvertedAmmount] = useState(0);

  const currencyConverter = useCurrencyConverter(from);

  // console.log(currencyConverter);
  const currencyList = Object.keys(currencyConverter);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmmount(ammount);
    setAmmount(convertedAmmount);
  };
  const convert = () => {
    setConvertedAmmount((ammount * currencyConverter[to]).toFixed(2));
  };

  return (
    <div
  className="relative flex flex-col items-center justify-center gap-6 h-screen bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage:
      "url('https://images.pexels.com/photos/6770775/pexels-photo-6770775.jpeg')",
  }}
>
  {/* Transparent Background for Main Content */}
  <div className="relative bg-white bg-opacity-70 rounded-2xl p-8 shadow-lg flex flex-col items-center gap-6">
    <Card 
      label="From" 
      amount={ammount} 
      currencyOptions={currencyList} 
      onCurrencyChange={(currency) => setAmmount(ammount)}
      selectedCurrency={from}
      inputEnable={false}
      onAmountChange={(ammount) => setAmmount(ammount)}
    />

    {/* Swap Button */}
    <div className="relative w-full flex justify-center">
      <button
        className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transform transition-all"
        onClick={swap}
      >
        Swap
      </button>
    </div>

    <Card 
      label="To" 
      amount={convertedAmmount} 
      currencyOptions={currencyList} 
      onCurrencyChange={(currency) => setTo(currency)}
      selectedCurrency={to}
      inputEnable={true}
    />
    <button
      className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
      onClick={convert}
    >
      Exchange {from.toUpperCase()} to {to.toUpperCase()}
    </button>
  </div>
</div>

  );
}

export default App;
