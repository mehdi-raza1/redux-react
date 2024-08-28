import React from 'react'
import Hoc from './Hoc'

const ComponentHoc2 = (prop) => {
  return (
    <div>
      <h3 className='text-lg'>{prop.num}</h3>
      <button className="btn bg-red-700 rounded-lg p-3" onClick={prop.handleEvent}></button>
    </div>
  )
}

export default Hoc(ComponentHoc2)
