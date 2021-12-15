import React from 'react'

function Destuct() {

    const x={
        "A":[10,20,45,70]
       
    }
    const A_2=x.A[2]
    console.log(A_2)
    return (
        <div>
            
            <h1> Destructre {A_2}</h1>
        </div>
    )
}

export default Destuct
