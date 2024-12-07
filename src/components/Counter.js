import React, {useState} from 'react'

function Counter(){
    const[initial, setFunction] = useState(1000);
    const increament = () =>{
        setFunction(initial + 1);
    }
    const decreament = () =>{
        setFunction(initial - 1 )
      
    }
    const resetKey = () => {
        setFunction(0)
    }
    return(
        <div>
            <h1>
            <button onClick={increament}>Increase</button> 
            
                Counter : {initial}
        
            <button onClick={decreament}>decrease</button>
            <br/>

            </h1>
            <button onClick={resetKey}>Reset</button>
           
        </div>
    )
}

export default Counter