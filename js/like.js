let like = document.querySelector('.article__like');
let likesNumber = document.querySelector('.likes-number');

like.onclick = function () {
    if (like.classList.contains('added')) {
        likesNumber.textContent--;
    } else {
        likesNumber.textContent++;
    }
    like.classList.toggle('added');
};