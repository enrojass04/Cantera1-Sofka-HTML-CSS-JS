const cargarColor = () => {
    const listaPares = document.querySelectorAll("li:nth-child(even)");
    const listaImpares = document.querySelectorAll("li:nth-child(odd)");
  
    pares = Array.from(listaPares);
    impares = Array.from(listaImpares);   
  };
  
  
  
  const cambioPares = () => {
      pares.forEach(function (el) {
          el.style.backgroundColor = 'rebeccapurple';        
      })
      impares.forEach(function (elemimpares) {
        elemimpares.style.backgroundColor = 'green';
    })
    };
  
    const cambioImpares = () => {
      impares.forEach(function (el) {
          el.style.backgroundColor = 'rebeccapurple'
      })
      pares.forEach(function (elempares) {
        elempares.style.backgroundColor = 'green';
    })
  };