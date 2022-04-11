import React, { useEffect } from "react";
import { useState } from "react";

import { getCities } from "./api";

export default function Cities() {

    const [cities, setCities] = useState({});
    const [currentInput, setCurrentInput] = useState('');
    const [finalQuery, setFinalQuery] = useState('');
    const [success, setSuccess] = useState(0);

    const checkInput = (e) => {
        if (currentInput != '') {
            setFinalQuery(currentInput);
            getCities(currentInput).then(result => {
                let tempData = result.data;
                setCities(tempData)
                if (Object.values(tempData).map(el => el.name).includes(currentInput)) 
                    setSuccess(1);
                else
                    setSuccess(-1);
            })
        } else {
            setSuccess(0);
        }
    }

    return(
        <div>
            <span>City: </span>
            <input type="text" onInput={e => setCurrentInput(e.target.value)} />
            <button onClick={checkInput}>Check</button>
            <hr />
            {success == 1 && (
                <div className="success">
                    <p>{finalQuery} exists!</p>
                </div>
            )}
            {success == -1 && (
                <div className="fail">
                    <p>{finalQuery} doesn't exist...</p>
                    {console.log("length", Object.keys(cities).length)}
                    {Object.keys(cities).length > 0 && (
                        <div>
                            <hr />
                            <p>did you mean...</p>
                            <ul>
                            {Object.values(cities).map(c => (
                                <li>{c.name}</li>
                            ))}
                            </ul>
                        </div>
                    )}
                </div>
            )}
        </div>
    )


}