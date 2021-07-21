import React,{useState} from 'react'

const Test = () => {
    const [data,getData]=useState(0)
    function data1(){
        getData(data+1)
        console.log(data);    
    }
    data1();

    return (
        <div>
            
        </div>
    )
}

export default Test
