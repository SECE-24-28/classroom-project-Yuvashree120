import React, { useContext } from 'react'
import DataContext from './DataContext'

const Three = () => {
    const { dec } = useContext(DataContext)
  return (
    <div>
        <button  style={{backgroundColor:'red'}}onClick={dec}>-</button>
    </div>
  )
}

export default Three