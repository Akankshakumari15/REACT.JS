import React, { useContext } from 'react'
import context from './Context'

const HomeChild = () => {
    let data=useContext(context)
  return (
    <div>
        {data}
    </div>
  )
}

export default HomeChild