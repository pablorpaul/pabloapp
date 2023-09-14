import React, { useState, useEffect } from "react";

function Relogio() {
  const [horaAtual, setHoraAtual] = useState(
    new Date().toLocaleString("pt-BR")
  );

  useEffect(() => {
    // Configurar um intervalo para atualizar a hora a cada segundo (1000 milissegundos)
    const intervalId = setInterval(() => {
      setHoraAtual(new Date().toLocaleString("pt-BR"));
    }, 1000);

    // Limpar o intervalo quando o componente for desmontado
    return () => clearInterval(intervalId);
  }, []); // O segundo argumento [] garante que o useEffect só seja executado uma vez, semelhante ao componentDidMount

  return (
    <div>
      <h1>Relógio</h1>
      <p>Hora Atual : {horaAtual}</p>
    </div>
  );
}

export default Relogio;