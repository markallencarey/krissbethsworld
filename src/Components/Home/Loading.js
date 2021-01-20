import React from 'react'
import { Roller } from 'react-awesome-spinners'


const Loading = (props) => {

  return (
    <div className='Loading'>
      <div className='loading-roller'>
        <Roller />
      </div>
    </div>
  )
}

export default Loading