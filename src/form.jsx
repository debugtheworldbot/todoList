import * as React from "react";
import {useState} from "react";

export default (props) => {
    const useValue = (initValue) => {
        const [v, setV] = useState(initValue)
        return {
            value: v,
            onChange: e => setV(e.target.value),
            reset: () => setV('')
        }
    }
    const {reset, ...text} = useValue('')
    return (
        <form onSubmit={e => {
            e.preventDefault()
            props.onSubmit(text.value)
            reset()
        }}>
            <input {...text}/>
        </form>
    )
}
