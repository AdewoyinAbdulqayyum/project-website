// changing navBar styles on scroll
window.addEventListener('scroll', () =>{
    document.querySelector('nav').classList.toggle('window-scroll',window.scrollY > 0)
})


// show//hide faq answer

// const faqs = document.querySelectorAll('.faq');
// faqs.forEach(faq => {
//     faq.addEventListener('click', () =>{
//         faq.classList.toggle('open');

//         //change icon
//     const icon = faq.querySelector('.faq_icon i')
//     if(icon.classList === 'ri-add-line'){
//         icon.className = "ri-subtract-line";
//     }else{
//         icon.className = "ri-add-line";
//     }
//     })
// })


const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        //change icon
        const icon = faq.querySelector('.faq_icon i');
        if(icon.classList.contains('ri-add-line')){
            icon.classList.remove('ri-add-line');
            icon.classList.add('ri-subtract-line');
        } else {
            icon.classList.remove('ri-subtract-line');
            icon.classList.add('ri-add-line');
        }
    });
});



/// show/hide nav menu
const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");


menuBtn.addEventListener('click', () =>{
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

///close nav  menu

const closenav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closenav)