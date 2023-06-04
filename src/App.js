import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
const [kalbo ,setKalbo] = useState([]);

useEffect(() => {
  axios.get("http://localhost:5010/api/user/").then((myvariable)=>{
    setKalbo(myvariable.data);
  })
  
}, []);

  return (
    <div className="App">{kalbo.map((value,key)=>{
    return(
      <div>{value.username}</div>
    )
    })}
    </div>
  );
}

export default App;
