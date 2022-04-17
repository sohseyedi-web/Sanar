const navbars = document.querySelector('.icon')
const navMobile = document.querySelector('.navbars-items__mobile')

navbars.addEventListener('click', () => {
    navMobile.classList.toggle('active-nav')
})