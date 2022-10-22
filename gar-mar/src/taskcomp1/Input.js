import React, { useCallback, useContext, useState } from 'react'
import { inputContext } from '../App'
import "./inputs.css"

export default function Input() {
    let obj = useContext(inputContext);
    const [inputValue, setValue] = useState("")
    const [ageValue, setAgevalue] = useState("")
    const submit = useCallback(() => {
        obj.setname(inputValue)
        obj.setAge(ageValue)

    }, [inputValue, ageValue])
    return (
        <div className="container">
            <div className="parent-input">
                <input  placeholder='Name' type="text" value={inputValue} onChange={(e) => { setValue(e.target.value) }} />
                <input placeholder='Age' type="text" value={ageValue} onChange={(e) => { setAgevalue(e.target.value) }} />
                <button onClick={submit}>click</button>
            </div>
        </div>
    )
}

