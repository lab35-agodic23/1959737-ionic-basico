const presupuesto = [];

function guardar() {
    const tGasto = document.getElementById('gasto');
    const monto = document.getElementById('cantidad')

    const gasto= `${tGasto.value}: $${monto.value}`;
  
    presupuesto.push(gasto);

    monto.value = '';
    tGasto.value = '';

    
    console.log('Información guardada:', gasto);
  }; 

  
const btnGuardar = document.getElementById('guardar');
btnGuardar.addEventListener('click', guardar);