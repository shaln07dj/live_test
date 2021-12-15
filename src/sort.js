import React,{useState} from 'react'


function Sort() {
    const arr=[10,50,677,70,12]
    var rev=[]
    const [flag,setFlag]=useState(false)
    const [isReverse,setIsReverse]=useState([])
    const [newState,setNewState]=useState(arr)
    
    
    for (let i=(arr.length)-1;i>=0;i--)
    {    let v=0
        rev.push(arr[i])
        console.log(arr[i])
        v++
    }
    console.log(rev)

    const handleSort=()=>{
        setFlag(!flag)
        console.log(flag)
        
        console.log(rev)
        setIsReverse(rev)
        console.log(isReverse)
        console.log(arr)
       
        
        if (flag===true){
            setNewState(isReverse)
        }
        else
        if(flag===false){
            setNewState(arr)
        }
        
        console.log(newState)

    }

    return (
        <div>
            <h1>Hello React</h1>
            <button onClick={()=>handleSort()}>{flag===false ? "Normal":"Reverse"}</button>
            <div>
                {   
                    newState.map((index,value)=>{<li>
                        {value}
                    </li>

                    })
                    }
                
                
                </div>
        </div>
    )
}

export default Sort
