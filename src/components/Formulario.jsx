import { Fragment } from "react";
import useCotizador from "../hooks/useCotizador";

import { MARCAS, YEARS, PLANES } from "../constants/Constants";
import Error from "./Error";

const Formulario = () => {

  const { datos, handleChangeDatos, error, handleChangeError } = useCotizador()

  const { marca, year } = datos

  const handleSubmit = e => {
    e.preventDefault()

    if (Object.values(datos).includes('')) {
      handleChangeError('Todos los campos son obligatorios');
      
      setTimeout(() => {
        handleChangeError('')
      }, 3000);
      
      return
    }
  }

	return (
		<>
      {
        error && <Error />
      }
			<form 
        onSubmit={handleSubmit}
      >
				<div className="my-5">
					<label
						className="block mb-3 font-bold text-gray-400 uppercase"
						htmlFor="marca">
						Marca
					</label>
					<select
            onChange={ e => handleChangeDatos(e) }
            value={marca}
						name="marca"
						id="marca"
						className="w-full p-3 bg-white border border-gray-200">
						<option 
              className="text-center" 
              value=""
            >-- Seleccione su marca --</option>
            {
              MARCAS.map( marca => (
                <option
                  key={marca.id}
                  value={marca.id}
                  className="text-center"
                >
                  {marca.nombre}
                </option>
              ))
            }
					</select>
				</div>

        <div className="my-5">
					<label
						className="block mb-3 font-bold text-gray-400 uppercase"
						htmlFor="year">
						Año
					</label>
					<select
            onChange={ e => handleChangeDatos(e) }
            value={year}
						name="year"
						id="year"
						className="w-full p-3 bg-white border border-gray-200">
						<option 
              className="text-center" 
              value=""
            >-- Seleccione el año --</option>
            {
              YEARS.map( anhio => (
                <option
                  key={anhio}
                  value={anhio}
                  className="text-center"
                >
                  {anhio}
                </option>
              ))
            }
					</select>
				</div>

        <div className="my-5">
					<label
						className="block mb-3 font-bold text-gray-400 uppercase"
						htmlFor="planes">
						Elije un Plan
					</label>
					<div className="flex gap-3 items-center">
            {
              PLANES.map( plan => (
                <Fragment
                  key={plan.id}
                >
                  <label htmlFor="plan">{plan.nombre}</label>
                  <input
                    onChange={ e => handleChangeDatos(e) }
                    type="radio" 
                    name="plan"
                    value={plan.id}
                  />
                </Fragment>
              ))
            }
					</div>
				</div>

        <input 
          type="submit" 
          value="Cotizar" 
          className="w-full bg-indigo-500 hover:bg-indigo-600 transition-colors
          text-white cursor-pointer p-3 uppercase"
        />
			</form>
		</>
	);
};

export default Formulario;
