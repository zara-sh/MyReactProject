import React,{useState} from 'react'


function ToggleButton(){
    const[isOn, setIsOn] = useState(false);
    const toggle = function() {
        setIsOn(!isOn)
    } ;
    return(
        <div>
            <button onClick={toggle}> {isOn ? 'Hi' : 'Bye'}</button>
        </div>
    )
}
export default ToggleButton