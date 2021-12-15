import React,{useState}from 'react'

function RemoveDuplicates() {
    var arr=[]
    var arr1=[]
    const [remDup,setRemDup]=useState([])
    const handleInput=()=>{
        const len=parseInt(prompt("Enter the Size of Array"))
        

        for(let i=0;i<len;i++){
            arr[i]=(prompt("Enter the element of Array"))
        }
    }
const get_array=()=>{
    for (let i=0 ;i<arr.length;i++){
        if(arr1.indexOf(arr[1])===-1){
            arr1.push(arr[i])
        }
    }
    setRemDup(arr1)
}


    return (
        <div>
              <button onClick={()=>handleInput()}>Enter Array To Remove Duplicates</button>
              <br></br>
                <button onClick={()=>{get_array()}}>Get Array</button><br></br>
                {remDup}

                       
        </div>
    )
}

export default RemoveDuplicates
