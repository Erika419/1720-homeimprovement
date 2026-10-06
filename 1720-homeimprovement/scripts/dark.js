const darkbtn = document.querySelector('#dark');
const darkel = document.body;

if (localStorage.getItem('theme') === 'dark') {
    darkel.classList.add('dark')
}

darkbtn.addEventListener('click', () => {
    const isDark = darkel.classList.toggle('dark');
    console.log(isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');

});