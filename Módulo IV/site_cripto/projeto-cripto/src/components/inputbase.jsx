import React from "react";

const inputBase = ({label, ...props}) => {

    <>
        <input type="number" {...props}/>
        <span>{label}</span>
    </>

}

export default inputBase