import { Fragment } from "react";

import { MARCAS, YEARS, PLANES } from "../constants/Constants";

const Formulario = () => {
	return (
		<>
			<form action="">

				<div className="my-5">
					<label
						className="block mb-3 font-bold text-gray-400 uppercase"
						htmlFor="marca">
						Marca
					</label>
					<select
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
						htmlFor="anho">
						Año
					</label>
					<select
						name="anho"
						id="anho"
						className="w-full p-3 bg-white border border-gray-200">
						<option 
              className="text-center" 
              value=""
            >-- Seleccione el año --</option>
            {
              YEARS.map( year => (
                <option
                  key={year}
                  value={year}
                  className="text-center"
                >
                  {year}
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
