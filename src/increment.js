import React, {useState} from 'react';
const Increment=({props})=>{
    const [num,setNum]=useState(props);
    const incNum=() =>{
      if(num<10){
        setNum(num+1)
      }
    }
    const decNum=() =>{
      if(num>0){
      setNum(num-1)
    }else{
      setNum(0);
    }
  }
    return(
<div>
<div className='main_div'></div>
<div className='center_div'></div>
<h1>{num}</h1>
<div className="btn_div"></div>
    <button onClick= {incNum} > Increment</button>
    <button onClick= {decNum} >Decrement</button>
</div>
    ) 
}
export default Increment;