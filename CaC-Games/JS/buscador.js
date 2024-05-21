document.addEventListener('keyup', e=>{ 
    // const juegos = document.querySelectorAll('.container-juego');
    const noResultados = document.getElementById('no-resultados');
    const secciones = document.querySelectorAll('section');
    let hayResultados = false;
    if(e.target.matches('#buscador')){
        document.querySelectorAll('.container-juego').forEach(juego => {
            if (juego.textContent.toLowerCase().includes(e.target.value.toLowerCase())) {
                juego.classList.remove('filtro');
                hayResultados = true; // Hay al menos un resultado
                
            } else {
                juego.classList.add('filtro');
            }
        });

        if (hayResultados) {
            noResultados.style.display = 'none';
        } else {
            noResultados.style.display = 'block';
        }
        secciones.forEach(seccion => {
            const juegosVisibles = seccion.querySelectorAll('.container-juego:not(.filtro)'); //Dentro de cada sección, se seleccionan todos los elementos con la clase .container-juego que no tienen la clase filtro (es decir, los juegos visibles).
            if (juegosVisibles.length > 0) {
                seccion.style.display = '';
            } else {
                seccion.style.display = 'none';
            }
        });
    }
})