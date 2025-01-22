import { useState } from "react";

function Counter(){
   let [counter , setCounter]  = useState(0)

   // Usestate is a hook in react that give access and manage to the state of a function or variable. Its allows to add and update the value of variable

    const increaseValue = ()=>{
        if(counter<20){
            counter = counter+1;
            setCounter(counter)
        }
        
    }

    const decreaseValue = ()=>{
        if (counter>0) {
            counter = counter-1;
            setCounter(counter)
        }
    }
    return(
        <>
        <h1>
            Counter App
        </h1>
        <h2>
            Score {counter}
        </h2>
        <button onClick={increaseValue}>+{counter}</button>
        <button onClick={decreaseValue}>-{counter}</button>
        <h5>
            footer {counter}
        </h5>
        </>
    )
}

export default Counter