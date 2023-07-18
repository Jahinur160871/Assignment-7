
import React, { useState } from 'react';

const App = () => {

    const[list,setList]=useState([]);
    const[item,setItem]=useState("");

    const AddToList=()=>{
      list.push(item)
      setList([...list])
    
    }

    const RemoveToList=(index)=>{
      list.splice(index,1);
      setList([...list])
     
    }

  return (
    <div>
      <table>
        <tbody>
          {
            list.length!==0?(

              list.map((element,index)=>{
                return(
                  <tr>
                    <td>{element}</td>
                    <td><button onClick={()=>{
                      RemoveToList(index)
                    }}>Remove</button></td>
                  </tr>
                )
              })
            ):(<tr></tr>)
          }
        </tbody>
      </table>
      <h1>Your Total task is:{list.length}</h1>
      <input onChange={(e)=>setItem(e.target.value)} placeholder="Item" />
      <button onClick={AddToList}>add Task</button>
      
    </div>
  );
};

export default App;