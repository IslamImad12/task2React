import React, { useState } from 'react'
export default function Home() {
    const [name, setName] = useState({
        name:'ahmed',
        age:'13',
    })
    function x() {
        setName({
            name:'eslam',
            age:'14',
        })
    }
    
    return (<>
    <div>{name.name}</div>
    <div>{name.age}</div>
    <button onClick={x}>click</button>
    </>
  )
}
