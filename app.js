const card = document.querySelector('.card');

card.addEventListener('mousemove', startRotated);
card.addEventListener('mouseout', stopRotated);



function startRotated(e) {
    const cardItem = this.querySelector('.card-item');
    cardItem.style.transform = 'rotateX(' + e.offsetY / 12 + 'deg) rotateY(' + e.offsetX / 12 + 'deg)';
}


function stopRotated() {
    const cardItem = this.querySelector('.card-item');
    cardItem.style.transform = 'rotate(0)'
}