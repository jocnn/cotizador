import useCotizador from "../hooks/useCotizador"

const Resultado = () => {
  
  const { resultado } = useCotizador()
  
  if (resultado === 0) return null

  return (
    <>
      {resultado}
    </>
  )
}

export default Resultado