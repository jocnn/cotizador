import { createContext, useState } from "react";
import { getDifferenceYear, caculateBrand, selectingPlan, formatMoney } from "../helpers";

const CotizadorContext = createContext()

const CotizadorProvider = ({children}) => {

  const [ cargando, setCargando ] = useState(false)
  const [ resultado, setResultado ] = useState(0)
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

  const handleCotizando = () => {
    //console.info('cotizando...')
    setCargando(true)

    console.info(datos)
    
    let result = 2000
    console.info(result)

    // diferencia de año
    const diferencia = getDifferenceYear(datos.year)
    console.info(diferencia)

    // restar el 3% por cada año de diferencia
    result -= ((diferencia * 3) * result) / 100
    console.info(result)

    // americano 15%, europeo 30% y asiatico 5%
    result *= caculateBrand(datos.marca)
    console.info(result)

    result *= selectingPlan(datos.plan)
    result = formatMoney(result)
    console.info(result)

    setTimeout(() => {
      setResultado(result)    
      setCargando(false)
    }, 3000);

  }

  return (
    <CotizadorContext.Provider
      value={{
        datos,
        handleChangeDatos,
        error,
        handleChangeError,
        handleCotizando,
        resultado,
        cargando
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