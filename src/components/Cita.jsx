import React from "react";

const Cita = ({ cita, eliminarCita }) => {
  const { mascota, propietario, fecha, hora, sintomas } = cita;
  return (
    <div className="cita">
      <p>
        <span>Mascota: {mascota}</span>
      </p>
      <p>
        {" "}
        <span>Propietario: {propietario}</span>
      </p>
      <p>
        <span>Fecha: {fecha}</span>
      </p>
      <p>
        <span>Hora: {hora}</span>
      </p>{" "}
      <span>Hora: {hora}</span>
      <p>
        <span>Sintomas: {sintomas}</span>
      </p>
      <button
        className="button eliminar u-full-width"
        onClick={() => 
          eliminarCita(cita.id)
        }
      >
        Eliminar &times;
      </button>
    </div>
  );
};

export default Cita;
