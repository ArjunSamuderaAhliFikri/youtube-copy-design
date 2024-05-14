const html = document.querySelector('html');
const toggle = document.getElementById('toggle');
toggle.addEventListener('click', function() {
    if(toggle.checked) {
        html.classList.add('dark');
    } else {
        html.classList.remove('dark');
    }
});