import React from 'react'   
 
export default function Button({ children, className, onClick, active }) {    
  return ( 

    <button onClick={onClick}  className={className}>
      { children }
    </button> 
  )
}
