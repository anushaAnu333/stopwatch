import React, { useState } from 'react';
import { useEffect } from 'react';

const Timer = () => {
    const [timer,setTimer]=useState(0)
    useEffect(() => {
      let id=setInterval(()=>{
          if(timer>100){
             // clearInterval(id)
          }else{

            setTimer(timer+1)
          }
         
      },10000)
    
      return () => {
        clearInterval(id);
      }
    }, [timer])
    
  return (
    <div>Count down:{timer}</div>
  )
}

export default Timer;