import { useState,useEffect } from "react";

function useCurrencyConverter(currency){
  const [data,setData] = useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
        .then((response)=>response.json())
        .then((response)=> setData(response[currency]))
    },[currency])
    // console.log(data);
    return data;
}

export default useCurrencyConverter;