import React from "react";

const inputtag = (props) => {

    return(
        <div>
            <input 
            className="rounded-md bg-transparent border w-80% h-12 outline-none focus:border-purple p-2" 
            type="number"
            value={props.value}
            onChange={props.onChange}
            style={props.style}
            min={props.min}
            max={props.max}
            />
             {props.el > props.number || props.el < 1 ?  <small className="text-lightred text-xs">{props.text}</small> : "" }
        </div>
    ) 
}

export default inputtag;