import { createContext, useState } from "react";

const CotizadorContext = createContext()

const CotizadorProvider = ({children}) => {

  const [ modal, setModal ] = useState(false)

  const cambiarModal = () => {
    setModal(!modal)
  }

  return (
    <CotizadorContext.Provider
      value={{
        modal,
        cambiarModal
      }}
    >
      {children}
    </CotizadorContext.Provider>
  )
}

export {
  CotizadorProvider
}

export default CotizadorContext