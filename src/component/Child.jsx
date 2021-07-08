import React from 'react'

function Child({name,handleName}) {
    const handleAlert = e => {
        handleName(name);
    }
    return (
        <div>
            <h1>{name}</h1>
            <button onClick={handleAlert}>click</button>
        </div>
    )
    }
    export default Child