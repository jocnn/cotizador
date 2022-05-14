import { createContext, useState } from "react";

const CotizadorContext = createContext()

const CotizadorProvider = ({children}) => {

  const [ error, setError ] = useState('')
  const [ datos, setDatos ] = useState({
    marca: '',
    year: '',
    plan: ''
  })

  const handleChangeDatos = e => {
    setDatos({
      ...datos,
        [e.target.name] : e.target.value
    })
  }

  const handleChangeError = e => {
    setError(e)
  }

  return (
    <CotizadorContext.Provider
      value={{
        datos,
        handleChangeDatos,
        error,
        handleChangeError
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