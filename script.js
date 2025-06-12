document.addEventListener('DOMContentLoaded', () => {
    const videoContainer = document.getElementById('videoContainer');
    const carabacaVideoContainer = document.getElementById('carabacaVideoContainer');
    const mainContent = document.getElementById('mainContent');
    const video = document.getElementById('introVideo');
    const carabacaVideo = document.getElementById('carabacaVideo');
    const skipButton = document.getElementById('skipButton');
    const closeCarabacaButton = document.getElementById('closeCarabacaButton');
    const fraseInput = document.getElementById('fraseInput');
    const resultado = document.getElementById('resultado');
    const playButton = document.getElementById('playButton');

    // Diccionario de frases (todas en minúsculas para comparación)
    const diccionarioFrases = {
        'tengen toppa gurren lagann': 'Chuchu es un peligro para la sociedad cuando...',
        'maneja': 'que pasa cuando mezclas un basto con un osioso y yo ...',
        'soy los dos': 'Joseph es fan del anime...',
        'soy las dos': 'Joseph es fan del anime...',
        'Boku no Hero Academia': 'Joseph: Donde nos encontramos al nagual? (10.499995,-66.796326), el color de la reja es',
        'bnha': 'Joseph: Donde nos encontramos al nagual? (10.499995,-66.796326), el color de la reja es?',
        'My Hero Academia': 'Joseph: Donde nos encontramos al nagual? (10.499995,-66.796326), el color de la reja es?',
        'verde': 'Una nueva aventura nos abarca, el anillo debe ser destruido, debemos ir al Río Bruinen para comenzar nuestro viaje (10.516895, -66.852463) donde se encuentra el rio?',
        'en el avila': 'por ultimo, quememos el anillo para terminar con nuestro viaje (10,4716782, -66,8212620), es un anillo para...?',
        'el avila': 'por ultimo, quememos el anillo para terminar con nuestro viaje (10,4716782, -66,8212620), es un anillo para...?',
        'avila': 'por ultimo, quememos el anillo para terminar con nuestro viaje (10,4716782, -66,8212620), es un anillo para...?',
    
    };

    // Función para mostrar el contenido principal
    function mostrarContenidoPrincipal() {
        videoContainer.style.display = 'none';
        mainContent.style.display = 'block';
        // Mostrar la frase inicial cuando se muestra el contenido
        resultado.textContent = 'En que siempre se equivoca Stefano: Tengen ...';
    }

    // Función para mostrar el video de carabaca
    function mostrarVideoCarabaca() {
        carabacaVideoContainer.style.display = 'flex';
        mainContent.style.display = 'none';
        carabacaVideo.play();
    }

    // Función para cerrar el video de carabaca
    function cerrarVideoCarabaca() {
        carabacaVideoContainer.style.display = 'none';
        mainContent.style.display = 'block';
        carabacaVideo.pause();
        carabacaVideo.currentTime = 0;
    }

    // Función para iniciar el video
    function iniciarVideo() {
        video.play();
        playButton.style.display = 'none';
    }

    // Manejar el botón de skip
    skipButton.addEventListener('click', mostrarContenidoPrincipal);

    // Manejar el botón de cerrar carabaca
    closeCarabacaButton.addEventListener('click', cerrarVideoCarabaca);

    // Manejar el clic en el botón de reproducción
    playButton.addEventListener('click', iniciarVideo);

    // Manejar el final del video
    video.addEventListener('ended', () => {
        mostrarContenidoPrincipal();
    });

    fraseInput.addEventListener('input', (e) => {
        const frase = e.target.value.toLowerCase().trim();
        
        if (frase === '') {
            resultado.textContent = 'En que siempre se equivoca Stefano: Tengen ...';
            return;
        }

        // Verificar si es la frase de carabaca
        if (frase === 'cruz de caravaca' || frase === 'un anillo para gobernarlos a todos') {
            mostrarVideoCarabaca();
            return;
        }

        // Buscar la frase en el diccionario
        const respuesta = diccionarioFrases[frase];
        
        if (respuesta) {
            resultado.textContent = respuesta;
        } else {
            resultado.textContent = 'Frase no encontrada';
        }
    });
}); 