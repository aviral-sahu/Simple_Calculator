import React  from "react"
import "./styles.css";

export default function App() {
  
 var ans="";
  function cal(e){
    if(e.target.innerHTML==='='){
      document.getElementById("input").value=eval(ans);
      ans=eval(ans);
    }
    else if(e.target.innerHTML==='C'){
      document.getElementById("input").value=0; 
      ans="";
    }
    else{
     ans =ans +e.target.innerHTML;
     document.getElementById("input").value=ans;
    }
    
     console.log(ans);
  //let Input=document.getElementById("input");
//e.target.innerHTML;
  }

  return (
    <div className="App">
    <input type="text" id="input" placeholder="0" disabled/>
      <div className="box" onClick={cal}>
     <button  >1</button>
     <button >2</button>
     <button >3</button>
     <button >4</button> 
     <button >5</button>
     <button >6</button>
     <button  >7</button>
     <button  >8</button>
     <button  >9</button>
     <button>0</button>
     <button>00</button>
     <button>.</button>
     <button  >+</button>
     <button  >-</button>
     <button  >*</button>
     <button >/</button>
     
     <button >C</button>
     <button >=</button>
     </div>

        </div>
  );
}
