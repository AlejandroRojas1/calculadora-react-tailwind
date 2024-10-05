import React from 'react'

const Button = ({handlePressButton, value, custom}) => {

  return (
    <>
    <button onClick={()=>handlePressButton(value)} className= {`${ custom } w-full border border-black rounded-lg shadow-noBlurButton shadow-black size-10 font-medium bg-white relative transform active:shadow-none active:translate-x-0.5 active:translate-y-0.5 `}>{value}</button>
    </>
  )
}

export default Button