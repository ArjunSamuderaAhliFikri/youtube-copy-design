const telusuri = document.querySelector('input[name=search]');
const cari = document.querySelector('i[name=cari]');

telusuri.addEventListener('click', function() {
    cari.style.border = '3px solid white';
    telusuri.style.backgroundColor = '#222';
});

cari.addEventListener('click', function() {
    cari.style.border = '1px solid #222';
});

const toggle = document.getElementById('toggle');
const sidebar = document.getElementsByTagName('ul')[0];

toggle.addEventListener('click', function() {
    if(toggle.checked) {
        sidebar.classList.add('swipe');
    } else {
        sidebar.classList.remove('swipe');
    }
});

const profilUser = document.querySelector('#profil-user');
const asideBar = document.getElementsByTagName('aside')[0];
const checklist = document.getElementById('checklist');


checklist.addEventListener('click', function() {
    if(checklist.checked) {
        asideBar.classList.add('swipe');
        // asideBar.classList.add('visible');
    } else {
        asideBar.classList.remove('swipe');
        // asideBar.classList.remove('visible');
    }
});