import React,{useState} from 'react';
import Increment from './increment';
function App () {
    const[num,setNum]=useState(null);
    const[visible,setVisible]=useState(true);
const onSubmit = () => { 
    setVisible(false);
};
    return (
		<div>
			{visible?(
        <div>
        
<input type="num" placeholder="enter a value" 
onChange={(event)=>setNum(event.target.value)}
 value={num}/>
<button onClick={onSubmit} >SUBMIT</button>
</div>
	 ):(
        <Increment props={num}/>
	 )}
  </div>
  
    );
}
export default App;