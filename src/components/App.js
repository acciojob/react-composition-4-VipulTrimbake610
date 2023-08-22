
import React, { useState } from "react";
import './../styles/App.css';


const App = () => {
  let [values, setValues] = useState({name:"",email:"",password:""});
  return (
    <div>
        {/* Do not remove the main div */}
        <form action="">
          <label htmlFor="">Name</label>
          <input type="text" onChange={(e)=>setValues({...values, name:e.target.value})} />
          <label htmlFor="">Email</label>
          <input type="email"  onChange={(e)=>setValues({...values, email:e.target.value})}/>
          <label htmlFor="">Password</label>
          <input type="password"  onChange={(e)=>setValues({...values, password:e.target.value})}/>

          <button onSubmit={(e)=>{console.log(values);}}>Submit</button>
        </form>
    </div>
  )
}

export default App
