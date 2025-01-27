import React ,{useId} from 'react'

const Card = ({
  label,
  amount,
  onAmountChange,
  inputEnable = false,
  currencyOptions =[],
  selectedCurrency= 'usd',
  onCurrencyChange,
  
}) => {
  const amountID = useId()
  return (
  <div className="w-[500px] max-w-[700px] p-6 bg-white rounded-2xl shadow-lg flex items-center justify-center">
    <div className="grid grid-cols-5 gap-4 items-end">
      <div className="col-span-3">
        <label
          htmlFor={amountID}
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          {label}
        </label>
        <input
          type="number"
          id={amountID}
          placeholder=""
          className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          value={amount}
          disabled ={inputEnable}
          onChange={(e)=> onAmountChange && 
            onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="col-span-2">
        <label
          htmlFor="countries"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Currency
        </label>
        <select
          id="countries"
          className="w-full px-4 py-2 border rounded-lg shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          value={selectedCurrency}
          onChange={(e)=>
            onCurrencyChange && onCurrencyChange(e.target.value)
          }
        >
          {currencyOptions.map((country)=> (<option key={country} value={country}>{country}</option>))}
        </select>
      </div>
    </div>
  </div>

  )
}

export default Card