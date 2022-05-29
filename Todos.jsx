import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';




const Todos=()=> {
  //1
  const [page ,setPage]=useState(1)
//this page is something i need to pass over port "http://localhost:8000/todos?_page={here}&_limit=5" we are going to use string interpolution $  and back tick  ` "http://localhost:8000/todos?_page=${}&_limit=5"`
  const [limit,setLimit]=useState(5)
  const [totalCount,setTotalCount]=useState(0)
  const [todos,setTodos]=useState([])
  //useEffect to run anything only one
  //useEffect when one particular state value changes
  useEffect(()=>{
    axios
    .get(`http://localhost:8000/todos?_page=${page}&_limit=${limit}`)//page koduthal kurach data maathram enter aayi varum
    .then((r)=>{
      setTodos(r.data);//r.data-getting data in response
       setTotalCount(Number(r.headers["x-total-count"]));
    });
      
    }
   
  ,[page,limit])
  return (
    <div className="App">
      <button
    disabled={page<=1}
     onClick={()=>{
       if(page>1){
        setPage(page-1)
       }
     
     }}>{'<'}</button>
     <select onChange={(e)=> setLimit(Number(e.target.value))} >
       <option value={5}>5</option>
       <option value={10}>10</option>
       <option value={20}>20</option>
     </select>


    <button
    disabled={totalCount<page*5}//limit 5 aan so we give page*limit
     onClick={()=>setPage(page+1)}>{'>'}</button>;
     
      {
      todos.map((todo/*index koduthal number ethranname undennu kittum*/)=>(
        <div key={todo.id}>{todo.id}{`:`}{todo.text}</div>
      ))
    }

    
    </div>
  );
}

export default Todos;
