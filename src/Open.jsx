import React, { useState } from 'react'

export default function Open() {
  const [appear1, setAppear1] = useState(true)
  function appear() {
    setAppear1(!appear1)
  }
  return <>
  <div className="container">
    <div className="row">
        <button className='btn btn-danger w-100' onClick={appear}>section 2</button>
        
        {appear1==false?<p className=''>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dignissimos excepturi
             totam deleniti iste? Provident praesentium consectetur quasi,
             suscipit aperiam ex dolores distinctio ea nobis dolore eius vel molestiae ad.
        </p>:<p className=''></p>}
    </div>
  </div>
  </>
}
