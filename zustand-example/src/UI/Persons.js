import React from "react";
import {peopleSettings} from "../store/Store";

const Persons = () => {
    const people = peopleSettings( state => state.people );
    console.log(people);
    return(
        <>
        <p>Total number of peoples {people.length}</p>
        <ol>
            {people.map((p) => {
                return (
                    <li>{p}</li>
                )
            })}
        </ol>
        </>
    )
}

export default Persons;