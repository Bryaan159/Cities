// Función para cambiar la información al hacer clic en el enlace de cada continente
function toggleContinent(continent) {
    var container = document.querySelector('.container');
    var continentTitle = document.getElementById('continent-title');
    var continentInfo = document.getElementById('continent-info');
    var continentImg = document.getElementById('continent-img');

    var asiaInfo = document.getElementById('asia-info');
    var australiaInfo = document.getElementById('australia-info');
    var brazilInfo = document.getElementById('brazil-info');

    // Verificar si el continente seleccionado ya está activo
    var continentIsActive = container.classList.contains(continent.toLowerCase());

    // Si el continente seleccionado no está activo, removemos todas las clases de continente
    if (!continentIsActive) {
        container.classList.remove('asia', 'australia', 'brazil');
    }


    // Ocultar todos los elementos de información
    asiaInfo.style.display = 'none';
    australiaInfo.style.display = 'none';
    brazilInfo.style.display = 'none';

    // Mostrar información específica según el continente
    if (continent === 'Asia') {
        container.classList.add('asia');
        continentTitle.textContent = 'Asia';
        continentInfo.textContent = 'This is some additional information about Asia that will be shown when you click on the link above.';
        continentImg.src = 'img/main2.png';
        asiaInfo.style.display = 'block';
    } else if (continent === 'Australia') {
        container.classList.add('australia');
        continentTitle.textContent = 'Australia';
        continentInfo.textContent = 'This is some additional information about Australia that will be shown when you click on the link above.';
        continentImg.src = 'img/main4.png'
        australiaInfo.style.display = 'block';
    } else if (continent === 'Brazil') {
        container.classList.add('brazil');
        continentTitle.textContent = 'Brazil';
        continentInfo.textContent = 'This is some additional information about Brazil that will be shown when you click on the link above.';
        continentImg.src = 'img/main3.png';
        brazilInfo.style.display = 'block';
    } else {
        container.classList.remove('asia', 'australia', 'brazil');
        container.classList.add('africa');
        continentTitle.textContent = 'Africa';
        continentImg.src = 'img/main.png';
        continentInfo.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, cumque impedit error fugit sequi doloribus aperiam officia recusandae, quo beatae vero inventore eius modi.';
    }
}