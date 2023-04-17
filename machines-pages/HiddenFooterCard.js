//Parte do footer expansível do card
const expandButton = document.querySelector('.expand-button');
const description = document.querySelector('.card-footer p');

expandButton.addEventListener('click', () => {
    if (description.classList.contains('hidden')) {
        description.classList.remove('hidden');
        expandButton.textContent = 'Mostrar menos';
        document.querySelector('.card-footer').style.maxHeight = '100%';
    } else {
        description.classList.add('hidden');
        expandButton.textContent = 'Mostrar mais';
        document.querySelector('.card-footer').style.maxHeight = '50px';
    }
});

//Parte do card de contato
var btn = document.getElementById("contactBtn");

var modal = document.getElementById("contactModal");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}