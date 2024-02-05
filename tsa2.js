function animateBox(day) {
    let colorBox = document.getElementById('colorBox');
    let dayButton = document.querySelector(`.day-button[data-day='${day}']`);

    let marginTop = window.getComputedStyle(colorBox).getPropertyValue('margin-top');

    if (marginTop === '20px' || marginTop === '') {
        colorBox.style.marginTop = '150px';
        colorBox.style.backgroundColor = getRandomColor();
    } else {
        colorBox.style.marginTop = '20px';
        colorBox.style.backgroundColor = getRandomColor();
    }
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
