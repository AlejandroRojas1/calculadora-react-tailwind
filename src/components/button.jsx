import React from 'react'

const Button = ({value, custom}) => {

  return (
    <>
    <button className= {`${ custom } w-full border border-black rounded-lg shadow-noBlurButton shadow-black size-10 font-medium bg-white`}>{value}</button>
    </>
  )
}

export default Button