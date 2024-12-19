import React, { useState } from 'react'
import coin1 from '../src/img/coin1.jpg'
import coin2 from '../src/img/coin2.jpg'
export default function Coin() {
    let [coin,setCoin] = useState(true);
    let [count, setCount] = useState(0);
    const [head, setHead] = useState(0); // Heads count
    const [tail, setTail] = useState(0);
    function flip(){
        setCoin(!coin)
        setCount(count=>count+1);
        if(count%2==0){
            setTail(tail=>tail+1)
        }
        else {
            setHead(tail=>tail+1)
        }
    }
  return (<>
  <div>
    <div className="container text-center py-2">
        <div className="row">
        <h1>Task 2</h1>
        {coin==true?<img src={coin1} className='w-25 mx-auto' alt="" />:<img src={coin2} className='w-25 mx-auto' alt="" />}
        <button className='btn btn-danger my-2' onClick={flip}>Flip Me</button> 
        <p>out of {count} flips, there have been {head} num and {tail} pic</p> 
        </div>
    </div>
  </div>
  </>
  )
}
