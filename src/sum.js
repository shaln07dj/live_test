import React ,{useState}from 'react'

function Sum() {
   
    var arr=[]
    const [total,setTotal]=useState(0)
    const cal_sum=()=>{
        const len=parseInt(prompt("Enter the Size of Array"))
        

        for(let i=0;i<len;i++){
            arr[i]=parseInt(prompt("Enter the element of Array"))
        }
    }
    const get_sum=()=>{
        const add=(sum ,val)=>{
            return sum+val
    
    
        }
         setTotal(arr.reduce(add))


    }
       
    
 

   

    return (
        <div>
            <div>

            </div>
                <h1>Sum using Reduce </h1>
                <button onClick={()=>cal_sum()}>Enter Array To Find Sum

                </button>
                <br></br>
                <button onClick={()=>{get_sum()}}>Get Total</button><br></br>

                    Total={total}                
            
        </div>
    )
}

export default Sum
