import React, { useRef } from "react";
import {peopleSettings} from "../store/Store";

const Input = () => {
    const addPerson = peopleSettings(state => state.addPerson);

    const inputRef = useRef();
    console.log(addPerson);

    function addPersonhandler(){
        console.log(inputRef.current.value);
        addPerson(inputRef.current.value);
    }
    return (
        <>
            <input ref={ inputRef }></input>
            <button onClick={addPersonhandler}>Add person</button>
        </>
    )
}

export default Input;