const hamburger = document.getElementById('hamburger-icon')
const mobileNav = document.getElementById('mobile-nav')

const closeNav = document.getElementById('close-icon')



mobileNav.style.display= 'none'

const displayMobileNav = () => {
    mobileNav.style.display="block"
    hamburger.style.display='none'
    closeNav.style.display= "inline"
 }

const hideMobileNav = () => {
     hamburger.style.display='inline'
     closeNav.style.display= 'none'
     mobileNav.style.display= 'none'
 }

 const hideCloseNav = () => {
     closeNav.style.display= "none"
 }


hamburger.addEventListener('click', displayMobileNav)

closeNav.addEventListener('click', hideMobileNav)



document.getElementsByTagName('Body')[0].onresize = () => {
    if (window.innerWidth > 617) {
        mobileNav.style.display= 'none'
    }

    else ( hamburger.style.display='inline',
    closeNav.style.display= 'none')
}

hideCloseNav()