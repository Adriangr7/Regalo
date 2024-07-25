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
        window.location.href = 'contenido.html';
    } else {
        // Mostrar mensaje de error
        document.getElementById('error-message').textContent = 'Usuario o contraseña incorrectos';
    }
});

let currentSlide = 0;

function nextVideo() {
    const carousel = document.getElementById('videoCarousel');
    const videos = Array.from(carousel.getElementsByTagName('video'));
    let activeIndex = videos.findIndex(video => video.classList.contains('active'));
    videos[activeIndex].pause(); // Añade esta línea
    videos[activeIndex].classList.remove('active');
    activeIndex = (activeIndex + 1) % videos.length;
    videos[activeIndex].classList.add('active');
    videos[activeIndex].play();
}

document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var correctAnswers = 0;

    var answer1 = document.getElementById('question1').value;
    var answer2 = document.getElementById('question2').value;
    var answer3 = document.getElementById('question3').value;
    var answer4 = document.getElementById('question4').value;

    if (answer1.toLowerCase() === 'hola') correctAnswers++;
    if (answer2.toLowerCase() === 'lsan') correctAnswers++;
    if (answer3.toLowerCase() === 'burguer') correctAnswers++;
    if (answer4.toLowerCase() === 'luna') correctAnswers++;

    alert('Respuestas correctas: ' + correctAnswers); // Depuración

    if (correctAnswers === 4) {
        window.location.href = 'password.html';
    } else {
        alert('Alguna respuesta es incorrecta. Intenta de nuevo.');
    }
});



