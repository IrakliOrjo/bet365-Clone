import React, { createContext,useState } from 'react'

export const BetContext = createContext(null)

export const BetContextProvider = (props) => {
    const [bet, setBet] = useState(false)
    

  return (
    <BetContext.Provider>{props.children}</BetContext.Provider>
  )
}

