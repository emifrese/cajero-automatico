import React from 'react'

const MainScreenWrapper = ({children}) => {
  return (
    <div className='w-full h-full flex justify-around items-center border-black border-2'>{children}</div>
  )
}

export default MainScreenWrapper