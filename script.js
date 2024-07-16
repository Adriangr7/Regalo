document.addEventListener('DOMContentLoaded', function() {
    console.log('Regalo lucia');
    alert('¡FELIZ CUMPLEAÑOS!');
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Datos de prueba (en un entorno real, verifica en el servidor)
    const validUsername = 'lucia';
    const validPassword = 'adri';

    if (username === validUsername && password === validPassword) {
        // Redirigir a la página de contenido
        window.location.href = 'index.html';
    } else {
        // Mostrar mensaje de error
        document.getElementById('error-message').textContent = 'Usuario o contraseña incorrectos';
    }
});


