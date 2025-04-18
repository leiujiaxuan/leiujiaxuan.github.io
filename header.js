document.querySelector('#checkbox').addEventListener('change', function () {
    console.log("hi");
    const header = document.querySelector('header');
    const display = document.querySelector('nav');
    if (this.checked) {
        header.style.height = '100%';
        display.style.display = 'flex';

    } else {
        header.style.height = 'auto';
        display.style.display = 'none';
    }
});