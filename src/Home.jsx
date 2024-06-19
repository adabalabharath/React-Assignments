import React, { memo } from 'react'

const Home = ({c,a}) => {
  console.log(c)
  console.log('home')
  return (
    <div>Home</div>
  )
}

export default memo(Home)